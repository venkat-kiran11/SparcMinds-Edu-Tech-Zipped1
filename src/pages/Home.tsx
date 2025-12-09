import { BookOpen, Users, Award, Video, TrendingUp, ChevronRight, Play, Star, Clock, CheckCircle, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Link } from "react-router-dom";
import Logo from '../assets/logo.jpg';

export function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white sticky top-0 z-50 shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="">
<img
                src={Logo}
                alt="Sparcminds logo"
                className="h-10 w-10 rounded-lg"
              />
                <BookOpen className="w-6 h-6 text-slate-900" />
              </div>
              <span className="text-2xl font-bold">SKILLUP.SPARCMINDS</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#discover" className="hover:text-amber-400 transition">Discover Skills</a>
              <a href="#features" className="hover:text-amber-400 transition">Features</a>
              <Link to="/courses" className="hover:text-amber-400 transition"> Courses</Link>
              <Link to="/about-us" className="hover:text-amber-400 transition"> About Us</Link>

         
              <a href="#pricing" className="hover:text-amber-400 transition">Pricing</a>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <span className="text-sm">{user.email}</span>
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="px-6 py-2 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-500 transition"
                  >
                    Dashboard
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => navigate('/login')}
                    className="px-4 py-2 hover:text-amber-400 transition"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => navigate('/signup')}
                    className="px-6 py-2 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-500 transition"
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Learn Without <span className="text-amber-400">Limits</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Build your professional profile, showcase your skills, get endorsed by peers, and unlock your career potential with SPARCMINDS SkillUp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate(user ? '/dashboard' : '/signup')}
                  className="px-8 py-4 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-500 transition flex items-center justify-center group"
                >
                  Get Started
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition" />
                </button>
                <button
                  onClick={() => navigate('/discover-skills')}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition flex items-center justify-center"
                >
                  <Zap className="mr-2 w-5 h-5" />
                  Discover Skills
                </button>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-amber-400">10K+</div>
                  <div className="text-gray-400">Skills</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-400">50K+</div>
                  <div className="text-gray-400">Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-400">100K+</div>
                  <div className="text-gray-400">Endorsements</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition duration-300">
                <img
                  src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional skills"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Skills Endorsed</div>
                    <div className="font-bold text-gray-900">+5,432 this week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SkillUp?</h2>
            <p className="text-xl text-gray-600">Everything you need to showcase and develop your professional skills</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition group">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <TrendingUp className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Track Progress</h3>
              <p className="text-gray-600">Monitor your skill development and proficiency growth over time</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition group">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Users className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Endorsed</h3>
              <p className="text-gray-600">Receive recognition and endorsements from your professional network</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition group">
              <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Award className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Earn Badges</h3>
              <p className="text-gray-600">Unlock achievement badges by reaching skill milestones</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition group">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Zap className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Build Portfolio</h3>
              <p className="text-gray-600">Create a compelling professional portfolio showcasing your expertise</p>
            </div>
          </div>
        </div>
      </section>

      <section id="discover" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Discover Professional Skills</h2>
            <p className="text-xl text-gray-600">Choose from thousands of in-demand professional skills</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {[
              { name: 'JavaScript', category: 'Programming', level: 'Intermediate' },
              { name: 'React', category: 'Frontend', level: 'Intermediate' },
              { name: 'Python', category: 'Programming', level: 'Beginner' },
              { name: 'UI/UX Design', category: 'Design', level: 'Intermediate' },
              { name: 'Data Analysis', category: 'Analytics', level: 'Intermediate' },
              { name: 'Project Management', category: 'Management', level: 'Intermediate' },
            ].map((skill, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group">
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-24 flex items-center justify-center">
                  <Zap className="w-12 h-12 text-white opacity-20" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.name}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-semibold">
                      {skill.category}
                    </span>
                    <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {skill.level}
                    </span>
                  </div>
                  <button
                    onClick={() => navigate(user ? '/skills' : '/signup')}
                    className="w-full py-2 bg-amber-400 text-slate-900 font-semibold rounded-lg hover:bg-amber-500 transition"
                  >
                    Add to Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => navigate('/discover-skills')}
              className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition"
            >
              Explore All Skills
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Build Your Professional Brand</h2>
              <p className="text-xl text-gray-300 mb-8">
                Create a powerful professional profile that showcases your expertise and attracts opportunities.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-400" />
                  <span>Add unlimited professional skills</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-400" />
                  <span>Get verified skill endorsements</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-400" />
                  <span>Earn exclusive achievement badges</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-400" />
                  <span>Share your profile with recruiters</span>
                </li>
              </ul>
              <button
                onClick={() => navigate(user ? '/dashboard' : '/signup')}
                className="mt-8 px-8 py-4 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-500 transition"
              >
                Get Started Free
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Clock className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-gray-400">Access</div>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">Unlimited</div>
                  <div className="text-gray-400">Skills</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">50K+</div>
                  <div className="text-gray-400">Community</div>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">4.9</div>
                  <div className="text-gray-400">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="">
                  <img
                src={Logo}
                alt="Sparcminds logo"
                className="h-10 w-10 rounded-lg"
              />
                  <BookOpen className="w-6 h-6 text-slate-900" />
                </div>
                <span className="text-2xl font-bold">SPARCMINDS</span>
              </div>
              <p className="text-gray-400">Professional skill development platform.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition">Browse Skills</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">View Profiles</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition">Help Center</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SPARCMINDS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
