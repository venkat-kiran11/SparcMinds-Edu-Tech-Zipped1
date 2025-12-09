import { useState, useEffect } from 'react';
import { BookOpen, LogOut, Settings, User as UserIcon, Award, Clock, TrendingUp, Zap, Users, Share2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { useNavigate, Link } from 'react-router-dom';

interface Profile {
  id: string;
  full_name: string;
  email: string;
  bio: string;
  avatar_url: string;
}

interface UserSkill {
  id: string;
  skill_id: string;
  proficiency_level: number;
  endorsements_count: number;
  verified: boolean;
  skill: { name: string; category: string };
}

export function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [userSkills, setUserSkills] = useState<UserSkill[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'skills' | 'profile'>('overview');
  const [loading, setLoading] = useState(true);
  const [editingProfile, setEditingProfile] = useState(false);
  const [fullName, setFullName] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    (async () => {
      try {
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .maybeSingle();

        if (profileData) {
          setProfile(profileData);
          setFullName(profileData.full_name || '');
          setBio(profileData.bio || '');
        }

        const { data: skillsData } = await supabase
          .from('user_skills')
          .select('id, skill_id, proficiency_level, endorsements_count, verified, skill:skills(name, category)')
          .eq('user_id', user.id)
          .order('proficiency_level', { ascending: false })
          .limit(5);

        if (skillsData) {
          setUserSkills(skillsData);
        }
      } catch (error) {
        console.error('Error loading dashboard:', error);
      } finally {
        setLoading(false);
      }
    })();
  }, [user, navigate]);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleUpdateProfile = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: fullName,
          bio: bio,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);

      if (error) throw error;

      setProfile({
        ...profile!,
        full_name: fullName,
        bio: bio,
      });
      setEditingProfile(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-amber-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const avgProficiency = userSkills.length > 0
    ? Math.round(userSkills.reduce((sum, s) => sum + s.proficiency_level, 0) / userSkills.length)
    : 0;

  const totalEndorsements = userSkills.reduce((sum, s) => sum + s.endorsements_count, 0);

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
              onClick={handleSignOut}
              className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Skills</p>
                <p className="text-3xl font-bold text-gray-900">{userSkills.length}</p>
              </div>
              <TrendingUp className="w-12 h-12 text-blue-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Avg Proficiency</p>
                <p className="text-3xl font-bold text-gray-900">{avgProficiency}%</p>
              </div>
              <Zap className="w-12 h-12 text-amber-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Endorsements</p>
                <p className="text-3xl font-bold text-gray-900">{totalEndorsements}</p>
              </div>
              <Users className="w-12 h-12 text-green-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Learning Paths</p>
                <p className="text-3xl font-bold text-gray-900">0</p>
              </div>
              <Clock className="w-12 h-12 text-purple-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Badges</p>
                <p className="text-3xl font-bold text-gray-900">0</p>
              </div>
              <Award className="w-12 h-12 text-orange-500 opacity-20" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md">
          <div className="border-b border-gray-200 flex">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-4 font-semibold transition ${
                activeTab === 'overview'
                  ? 'text-amber-600 border-b-2 border-amber-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-6 py-4 font-semibold transition ${
                activeTab === 'skills'
                  ? 'text-amber-600 border-b-2 border-amber-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Skills & SkillUp
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-6 py-4 font-semibold transition ${
                activeTab === 'profile'
                  ? 'text-amber-600 border-b-2 border-amber-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Profile
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome, {profile?.full_name}!</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-amber-600" />
                      <span>Your Skill Journey</span>
                    </h3>
                    <p className="text-gray-600">
                      You have {userSkills.length} skill{userSkills.length !== 1 ? 's' : ''} with an average proficiency of {avgProficiency}%
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span>Community Recognition</span>
                    </h3>
                    <p className="text-gray-600">
                      You've received {totalEndorsements} endorsement{totalEndorsements !== 1 ? 's' : ''} from the community
                    </p>
                  </div>
                </div>

                {userSkills.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Top Skills</h3>
                    <div className="space-y-3">
                      {userSkills.map((skill) => (
                        <div key={skill.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{skill.skill.name}</h4>
                            <p className="text-sm text-gray-600">{skill.skill.category}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">{skill.proficiency_level}%</p>
                            <p className="text-sm text-gray-600">{skill.endorsements_count} endorsements</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'skills' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                    <Zap className="w-6 h-6 text-amber-600" />
                    <span>SkillUp Management</span>
                  </h2>
                  <Link
                    to="/skills"
                    className="px-6 py-3 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-500 transition inline-flex items-center space-x-2"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>Manage Skills</span>
                  </Link>
                </div>

                {userSkills.length === 0 ? (
                  <div className="text-center py-12">
                    <Zap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">You haven't added any skills yet</p>
                    <Link
                      to="/skills"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-500 transition"
                    >
                      <TrendingUp className="w-5 h-5" />
                      <span>Add Your First Skill</span>
                    </Link>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {userSkills.map((skill) => (
                      <div
                        key={skill.id}
                        className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition p-6"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg">{skill.skill.name}</h3>
                            <p className="text-sm text-gray-600">{skill.skill.category}</p>
                          </div>
                          {skill.verified && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Verified</span>
                          )}
                        </div>

                        <div className="space-y-4">
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
                            <div className="flex items-center space-x-1 text-gray-600">
                              <Users className="w-4 h-4" />
                              <span>{skill.endorsements_count} endorsements</span>
                            </div>
                          </div>
                        </div>

                        <Link
                          to={`/profile/${user?.id}`}
                          className="mt-4 w-full py-2 bg-white text-center text-amber-600 border border-amber-600 rounded-lg hover:bg-amber-50 transition font-semibold text-sm"
                        >
                          View Full Profile
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">My Profile</h2>

                {!editingProfile ? (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
                      <p className="text-gray-600 text-lg">{profile?.full_name || 'Not set'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                      <p className="text-gray-600 text-lg">{profile?.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Bio</label>
                      <p className="text-gray-600 text-lg">{profile?.bio || 'No bio added yet'}</p>
                    </div>
                    <button
                      onClick={() => setEditingProfile(true)}
                      className="flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition"
                    >
                      <Settings className="w-5 h-5" />
                      <span>Edit Profile</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Bio</label>
                      <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Tell us about yourself..."
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none"
                      />
                    </div>
                    <div className="flex space-x-4">
                      <button
                        onClick={handleUpdateProfile}
                        className="px-6 py-3 bg-amber-400 text-slate-900 font-semibold rounded-lg hover:bg-amber-500 transition"
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={() => {
                          setEditingProfile(false);
                          setFullName(profile?.full_name || '');
                          setBio(profile?.bio || '');
                        }}
                        className="px-6 py-3 bg-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-400 transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
