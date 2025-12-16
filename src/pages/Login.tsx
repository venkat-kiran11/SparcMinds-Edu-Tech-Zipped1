import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Logo from '../assets/logo.jpg';

export function Login() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');          // real password
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [displayPassword, setDisplayPassword] = useState(''); // what user sees
  const lastCharTimerRef = useRef<number | null>(null);
    const revealTimeoutRef = useRef<number | null>(null);


  const maskAll = () => {
    setDisplayPassword('•'.repeat(password.length));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (passwordError) setPasswordError('');
    const newVisible = e.target.value;
    const prevVisible = displayPassword;

    // Derive real password from length difference
    if (newVisible.length > prevVisible.length) {
      // typed new chars
      const added = newVisible.slice(prevVisible.length);
      const newReal = password + added;

      // previous chars masked, only last visible
      const maskedPart = '•'.repeat(Math.max(newReal.length - 1, 0));
      const last = newReal.slice(-1);

      setPassword(newReal);
      setDisplayPassword(maskedPart + last);

      if (!showPassword) {
        if (lastCharTimerRef.current !== null) {
          window.clearTimeout(lastCharTimerRef.current);
        }
        lastCharTimerRef.current = window.setTimeout(() => {
          maskAll();
        }, 1000); // 1 second
      }
    } else if (newVisible.length < prevVisible.length) {
      // backspace / delete
      const newReal = password.slice(0, newVisible.length);
      setPassword(newReal);
      if (!showPassword) {
        setDisplayPassword('•'.repeat(newReal.length));
      } else {
        setDisplayPassword(newReal);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // clear previous errors
    setError('');
    setEmailError('');
    setPasswordError('');
    setLoading(true);

    // client-side validation
    let hasError = false;
    if (!email) {
      setEmailError('Please enter your email');
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email');
      hasError = true;
    }

    if (!password) {
      setPasswordError('Please enter your password');
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      hasError = true;
    }

    if (hasError) {
      setLoading(false);
      return;
    }

    try {
      await signIn(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  // Handle password typing
  // Decide what to show in the input


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="">
              <img
                src={Logo}
                alt="Sparcminds logo"
                className="h-10 w-10 rounded-lg"
              />
             
            </div>
            <span className="text-2xl font-bold text-slate-900">SPARCMINDS</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Welcome Back</h1>
          <p className="text-gray-600 text-center mb-8">Sign in to your SkillUp profile</p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(''); }}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none"
                />
              </div>
              {emailError && <p className="text-xs text-red-600 mt-1">{emailError}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text" // always text; masking is manual
                  value={showPassword ? password : displayPassword}
                  onChange={handlePasswordChange}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none"
                />

                <button
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => {
                    const newShow = !showPassword;
                    setShowPassword(newShow);

                    if (newShow) {
                      setDisplayPassword(password);
                      if (revealTimeoutRef.current !== null) {
                        window.clearTimeout(revealTimeoutRef.current);
                      }
                    } else {
                      setDisplayPassword('•'.repeat(password.length));
                    }
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>
              {passwordError && <p className="text-xs text-red-600 mt-1">{passwordError}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-amber-400 text-slate-900 font-semibold rounded-lg hover:bg-amber-500 transition disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>

            <div className="mt-3 text-right">
              <button type="button" onClick={() => navigate('/forgot-password')} className="text-sm text-amber-600 hover:text-amber-700">
                Forgot password?
              </button>
            </div>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-amber-600 font-semibold hover:text-amber-700">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}