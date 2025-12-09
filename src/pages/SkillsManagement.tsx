import { useState, useEffect } from 'react';
import { BookOpen, Plus, Trash2, TrendingUp, Search } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

interface Skill {
  id: string;
  name: string;
  category: string;
  difficulty: string;
  description: string;
}

interface UserSkill {
  id: string;
  skill_id: string;
  proficiency_level: number;
  years_of_experience: number;
  verified: boolean;
  endorsements_count: number;
  skill: Skill;
}

export function SkillsManagement() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [userSkills, setUserSkills] = useState<UserSkill[]>([]);
  const [availableSkills, setAvailableSkills] = useState<Skill[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(new Set());
  const [proficiency, setProficiency] = useState<Record<string, number>>({});
  const [experience, setExperience] = useState<Record<string, number>>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    (async () => {
      try {
        const { data: userSkillsData } = await supabase
          .from('user_skills')
          .select('id, skill_id, proficiency_level, years_of_experience, verified, endorsements_count, skill:skills(*)')
          .eq('user_id', user.id)
          .order('proficiency_level', { ascending: false });

        if (userSkillsData) {
          setUserSkills(userSkillsData);
        }

        const { data: allSkills } = await supabase
          .from('skills')
          .select('*')
          .order('category');

        if (allSkills) {
          setAvailableSkills(allSkills);
        }
      } catch (error) {
        console.error('Error loading skills:', error);
      } finally {
        setLoading(false);
      }
    })();
  }, [user, navigate]);

  const handleAddSkills = async () => {
    if (!user || selectedSkills.size === 0) return;

    try {
      const newSkills = Array.from(selectedSkills).map(skillId => ({
        user_id: user.id,
        skill_id: skillId,
        proficiency_level: proficiency[skillId] || 50,
        years_of_experience: experience[skillId] || 0,
      }));

      const { error } = await supabase.from('user_skills').insert(newSkills);

      if (error) throw error;

      const { data: refreshedSkills } = await supabase
        .from('user_skills')
        .select('id, skill_id, proficiency_level, years_of_experience, verified, endorsements_count, skill:skills(*)')
        .eq('user_id', user.id);

      if (refreshedSkills) {
        setUserSkills(refreshedSkills);
      }

      setSelectedSkills(new Set());
      setProficiency({});
      setExperience({});
      setShowAddForm(false);
    } catch (error) {
      console.error('Error adding skills:', error);
    }
  };

  const handleRemoveSkill = async (skillId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('user_skills')
        .delete()
        .eq('user_id', user.id)
        .eq('skill_id', skillId);

      if (error) throw error;

      setUserSkills(userSkills.filter(s => s.skill_id !== skillId));
    } catch (error) {
      console.error('Error removing skill:', error);
    }
  };

  const handleUpdateProficiency = async (userSkillId: string, level: number) => {
    try {
      const { error } = await supabase
        .from('user_skills')
        .update({ proficiency_level: level })
        .eq('id', userSkillId);

      if (error) throw error;

      setUserSkills(userSkills.map(s =>
        s.id === userSkillId ? { ...s, proficiency_level: level } : s
      ));
    } catch (error) {
      console.error('Error updating proficiency:', error);
    }
  };

  const toggleSkillSelection = (skillId: string) => {
    const newSelected = new Set(selectedSkills);
    if (newSelected.has(skillId)) {
      newSelected.delete(skillId);
    } else {
      newSelected.add(skillId);
    }
    setSelectedSkills(newSelected);
  };

  const filteredAvailableSkills = availableSkills.filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    skill.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addedSkillIds = new Set(userSkills.map(s => s.skill_id));

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-amber-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading skills...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-slate-900" />
              </div>
              <span className="text-2xl font-bold text-slate-900">SPARCMINDS</span>
            </div>
            <button
              onClick={() => navigate('/dashboard')}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Skills</h1>
          <p className="text-gray-600">Manage your professional skills and get endorsements</p>
        </div>

        {userSkills.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-amber-600" />
                <span>Your Skills ({userSkills.length})</span>
              </h2>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="px-4 py-2 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-500 transition flex items-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>Add Skill</span>
              </button>
            </div>

            <div className="space-y-4">
              {userSkills.map((userSkill) => (
                <div key={userSkill.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{userSkill.skill.name}</h3>
                      <div className="flex items-center space-x-3 mt-2">
                        <span className="text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                          {userSkill.skill.category}
                        </span>
                        <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                          {userSkill.skill.difficulty}
                        </span>
                        {userSkill.verified && (
                          <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                            Verified
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveSkill(userSkill.skill_id)}
                      className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Proficiency: {userSkill.proficiency_level}%
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={userSkill.proficiency_level}
                        onChange={(e) => handleUpdateProficiency(userSkill.id, Number(e.target.value))}
                        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Years of Experience: {userSkill.years_of_experience}
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          min="0"
                          max="50"
                          value={userSkill.years_of_experience}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-gray-600">{userSkill.endorsements_count} endorsements</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {showAddForm && (
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Add Skills</h2>

            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
                />
              </div>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto mb-6">
              {filteredAvailableSkills
                .filter(skill => !addedSkillIds.has(skill.id))
                .map((skill) => (
                  <div key={skill.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={selectedSkills.has(skill.id)}
                            onChange={() => toggleSkillSelection(skill.id)}
                            className="w-5 h-5 rounded border-gray-300 text-amber-400 cursor-pointer"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                            <p className="text-sm text-gray-600">{skill.category}</p>
                          </div>
                        </div>
                      </div>
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {skill.difficulty}
                      </span>
                    </div>

                    {selectedSkills.has(skill.id) && (
                      <div className="mt-4 grid grid-cols-2 gap-4 pl-9 border-t border-gray-200 pt-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Proficiency: {proficiency[skill.id] || 50}%
                          </label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={proficiency[skill.id] || 50}
                            onChange={(e) =>
                              setProficiency({ ...proficiency, [skill.id]: Number(e.target.value) })
                            }
                            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-amber-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Years of Experience
                          </label>
                          <input
                            type="number"
                            min="0"
                            max="50"
                            value={experience[skill.id] || 0}
                            onChange={(e) =>
                              setExperience({ ...experience, [skill.id]: Number(e.target.value) })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleAddSkills}
                disabled={selectedSkills.size === 0}
                className="px-6 py-3 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-500 transition disabled:opacity-50"
              >
                Add Selected Skills ({selectedSkills.size})
              </button>
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setSelectedSkills(new Set());
                  setProficiency({});
                  setExperience({});
                }}
                className="px-6 py-3 bg-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {!showAddForm && userSkills.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No Skills Added Yet</h2>
            <p className="text-gray-600 mb-6">Start building your skill profile by adding your professional skills</p>
            <button
              onClick={() => setShowAddForm(true)}
              className="px-8 py-3 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-500 transition inline-flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Add Your First Skill</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
