import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookOpen, Award, TrendingUp, Users, Plus, MessageSquare, ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

interface UserSkill {
  id: string;
  skill_id: string;
  proficiency_level: number;
  endorsements_count: number;
  verified: boolean;
  years_of_experience: number;
  skill: {
    name: string;
    category: string;
    difficulty: string;
  };
}

interface Profile {
  id: string;
  full_name: string;
  email: string;
  bio: string;
  avatar_url: string;
}

export function SkillProfile() {
  const { userId } = useParams<{ userId: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [skills, setSkills] = useState<UserSkill[]>([]);
  const [badges, setBadges] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const isOwnProfile = user?.id === userId;

  useEffect(() => {
    (async () => {
      if (!userId) return;

      try {
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', userId)
          .maybeSingle();

        if (profileData) setProfile(profileData);

        const { data: skillsData } = await supabase
          .from('user_skills')
          .select('id, skill_id, proficiency_level, endorsements_count, verified, years_of_experience, skill:skills(name, category, difficulty)')
          .eq('user_id', userId)
          .order('proficiency_level', { ascending: false });

        if (skillsData) setSkills(skillsData);

        const { data: badgesData } = await supabase
          .from('user_badges')
          .select('id, badge:skill_badges(name, description, icon_url)')
          .eq('user_id', userId);

        if (badgesData) setBadges(badgesData);
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        setLoading(false);
      }
    })();
  }, [userId]);

  const handleEndorseSkill = async (skillId: string) => {
    if (!user || isOwnProfile || !userId) return;

    try {
      await supabase.from('skill_endorsements').insert({
        endorser_id: user.id,
        endorsed_user_id: userId,
        skill_id: skillId,
      });

      const { data: userSkill } = await supabase
        .from('user_skills')
        .select('endorsements_count')
        .eq('skill_id', skillId)
        .eq('user_id', userId)
        .maybeSingle();

      if (userSkill) {
        await supabase
          .from('user_skills')
          .update({ endorsements_count: (userSkill.endorsements_count || 0) + 1 })
          .eq('skill_id', skillId)
          .eq('user_id', userId);

        setSkills(skills.map(s =>
          s.skill_id === skillId
            ? { ...s, endorsements_count: (s.endorsements_count || 0) + 1 }
            : s
        ));
      }
    } catch (error) {
      console.error('Error endorsing skill:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-amber-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Profile not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-slate-900" />
              </div>
              <span className="text-2xl font-bold text-slate-900">SPARCMINDS</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{profile.full_name}</h1>
              <p className="text-gray-600 mb-4">{profile.bio || 'No bio added yet'}</p>
              <div className="flex items-center space-x-6">
                <div>
                  <div className="text-2xl font-bold text-amber-600">{skills.length}</div>
                  <div className="text-sm text-gray-600">Skills</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600">{badges.length}</div>
                  <div className="text-sm text-gray-600">Badges</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600">
                    {skills.length > 0
                      ? Math.round(skills.reduce((sum, s) => sum + s.proficiency_level, 0) / skills.length)
                      : 0}
                  </div>
                  <div className="text-sm text-gray-600">Avg Proficiency</div>
                </div>
              </div>
            </div>
            {!isOwnProfile && user && (
              <button className="px-6 py-3 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-500 transition flex items-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>Connect</span>
              </button>
            )}
          </div>
        </div>

        {badges.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <Award className="w-6 h-6 text-amber-600" />
              <span>Achievements</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {badges.map((badge) => (
                <div key={badge.id} className="text-center">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-4xl">{badge.badge.icon_url}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{badge.badge.name}</h3>
                  <p className="text-sm text-gray-600">{badge.badge.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
            <TrendingUp className="w-6 h-6 text-amber-600" />
            <span>Skills</span>
          </h2>
          {skills.length === 0 ? (
            <p className="text-gray-600 text-center py-8">No skills added yet</p>
          ) : (
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{skill.skill.name}</h3>
                      <div className="flex items-center space-x-3 mt-2">
                        <span className="text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                          {skill.skill.category}
                        </span>
                        <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                          {skill.skill.difficulty}
                        </span>
                        {skill.verified && (
                          <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                            Verified
                          </span>
                        )}
                      </div>
                    </div>
                    {!isOwnProfile && user && (
                      <button
                        onClick={() => handleEndorseSkill(skill.skill_id)}
                        className="px-4 py-2 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-500 transition flex items-center space-x-2"
                      >
                        <Plus className="w-5 h-5" />
                        <span>Endorse</span>
                      </button>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Proficiency</span>
                        <span className="text-sm font-semibold text-gray-900">{skill.proficiency_level}%</span>
                      </div>
                      <div className="w-full bg-gray-300 rounded-full h-2">
                        <div
                          className="bg-amber-400 h-2 rounded-full transition-all"
                          style={{ width: `${skill.proficiency_level}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{skill.endorsements_count} endorsements</span>
                      </div>
                      {skill.years_of_experience > 0 && (
                        <span className="text-gray-600">
                          {skill.years_of_experience} year{skill.years_of_experience !== 1 ? 's' : ''} experience
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
