import { useState, useEffect } from 'react';
import { BookOpen, Search, Filter, TrendingUp, Users } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.jpg';

interface Skill {
  id: string;
  name: string;
  category: string;
  difficulty: string;
  description: string;
}

interface SkillWithStats extends Skill {
  userCount?: number;
  avgProficiency?: number;
}

export function SkillDiscovery() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [skills, setSkills] = useState<SkillWithStats[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data: skillsData } = await supabase
          .from('skills')
          .select('*')
          .order('category');

        if (skillsData) {
          setSkills(skillsData);
          const uniqueCategories = Array.from(new Set(skillsData.map(s => s.category)));
          setCategories(uniqueCategories as string[]);
        }
      } catch (error) {
        console.error('Error loading skills:', error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || skill.category === selectedCategory;
    const matchesDifficulty = !selectedDifficulty || skill.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const handleLearnSkill = (skillId: string) => {
    if (!user) {
      navigate('/signup');
      return;
    }
    navigate('/skills');
  };

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
              <div className="">
                <img
                src={Logo}
                alt="Sparcminds logo"
                className="h-10 w-10 rounded-lg"
              />
               
              </div>
              <span className="text-2xl font-bold text-slate-900">SPARCMINDS</span>
            </div>
            <button
              onClick={() => navigate(user ? '/dashboard' : '/')}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              {user ? 'Dashboard' : 'Home'}
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Discover Skills</h1>
          <p className="text-gray-600">Explore thousands of professional skills and start learning</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search skills by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none text-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Filter className="w-5 h-5 text-gray-600" />
                <label className="font-semibold text-gray-900">Category</label>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
              >
                <option value="">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-3">
                <TrendingUp className="w-5 h-5 text-gray-600" />
                <label className="font-semibold text-gray-900">Difficulty</label>
              </div>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
              >
                <option value="">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No skills found matching your criteria</p>
            </div>
          ) : (
            filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden border border-gray-200"
              >
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-24 flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-white opacity-20" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.name}</h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {skill.description || 'Professional skill for career growth'}
                  </p>

                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-semibold">
                      {skill.category}
                    </span>
                    <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {skill.difficulty.charAt(0).toUpperCase() + skill.difficulty.slice(1)}
                    </span>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>Popular skill</span>
                      </div>
                      <span className="font-semibold text-gray-900">1.2K learners</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleLearnSkill(skill.id)}
                    className="w-full py-2 bg-amber-400 text-slate-900 font-semibold rounded-lg hover:bg-amber-500 transition"
                  >
                    {user ? 'Add to Profile' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Build Your Professional Profile</h2>
              <p className="text-gray-300 mb-6">
                Add skills to your profile, get endorsed by peers, and showcase your expertise to the world.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Track your skill development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Earn endorsements from your network</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Get personalized learning recommendations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Unlock achievement badges</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Skills in Platform</span>
                    <span className="text-2xl font-bold text-amber-400">{skills.length}</span>
                  </div>
                  <div className="h-1 bg-white/20 rounded-full">
                    <div className="h-1 bg-amber-400 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <p className="text-xs text-gray-300">
                    Choose from our curated collection of professional skills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
