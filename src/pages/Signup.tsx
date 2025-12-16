import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BookOpen, Mail, Lock, User, AlertCircle, Eye, EyeOff, Phone } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Logo from '../assets/logo.jpg';

export function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [displayPassword, setDisplayPassword] = useState('');
const [displayConfirmPassword, setDisplayConfirmPassword] = useState('');

const passwordRevealTimeoutRef = useRef<number | null>(null);
const confirmRevealTimeoutRef = useRef<number | null>(null);
const maskPasswordAll = () => {
  setDisplayPassword('•'.repeat(password.length));
};

const maskConfirmAll = () => {
  setDisplayConfirmPassword('•'.repeat(confirmPassword.length));
};


const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const newVisible = e.target.value;
  const prevVisible = displayPassword;

  if (newVisible.length > prevVisible.length) {
    // user typed new chars
    const added = newVisible.slice(prevVisible.length);
    const newReal = password + added;

    const maskedPart = '•'.repeat(Math.max(newReal.length - 1, 0));
    const last = newReal.slice(-1);

    setPassword(newReal);
    setDisplayPassword(maskedPart + last);

    if (!showPassword) {
      if (passwordRevealTimeoutRef.current !== null) {
        window.clearTimeout(passwordRevealTimeoutRef.current);
      }
      passwordRevealTimeoutRef.current = window.setTimeout(() => {
        maskPasswordAll();
      }, 1000); // 1 second
    }
  } else if (newVisible.length < prevVisible.length) {
    // backspace
    const newReal = password.slice(0, newVisible.length);
    setPassword(newReal);
    if (!showPassword) {
      setDisplayPassword('•'.repeat(newReal.length));
    } else {
      setDisplayPassword(newReal);
    }
  }
};



const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const newVisible = e.target.value;
  const prevVisible = displayConfirmPassword;

  if (newVisible.length > prevVisible.length) {
    const added = newVisible.slice(prevVisible.length);
    const newReal = confirmPassword + added;

    const maskedPart = '•'.repeat(Math.max(newReal.length - 1, 0));
    const last = newReal.slice(-1);

    setConfirmPassword(newReal);
    setDisplayConfirmPassword(maskedPart + last);

    if (!showConfirmPassword) {
      if (confirmRevealTimeoutRef.current !== null) {
        window.clearTimeout(confirmRevealTimeoutRef.current);
      }
      confirmRevealTimeoutRef.current = window.setTimeout(() => {
        maskConfirmAll();
      }, 1000);
    }
  } else if (newVisible.length < prevVisible.length) {
    const newReal = confirmPassword.slice(0, newVisible.length);
    setConfirmPassword(newReal);
    if (!showConfirmPassword) {
      setDisplayConfirmPassword('•'.repeat(newReal.length));
    } else {
      setDisplayConfirmPassword(newReal);
    }
  }
};




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!agreed) {
      setError('You must agree to the Terms and Conditions and Privacy Policy');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      await signUp(email, password, fullName, phone);
      navigate('/login');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

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

          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Create Account</h1>
          <p className="text-gray-600 text-center mb-8">Join thousands of professionals</p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none"
                />
              </div>
            </div>

            

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
  type="text" // masking is manual
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
      if (passwordRevealTimeoutRef.current !== null) {
        window.clearTimeout(passwordRevealTimeoutRef.current);
      }
    } else {
      maskPasswordAll();
    }
  }}
  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded text-gray-500 hover:text-gray-700"
>
  {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
</button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
  type="text"
  value={showConfirmPassword ? confirmPassword : displayConfirmPassword}
  onChange={handleConfirmPasswordChange}
  placeholder="••••••••"
  required
  className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none"
/>
               <button
  type="button"
  aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
  onClick={() => {
    const newShow = !showConfirmPassword;
    setShowConfirmPassword(newShow);
    if (newShow) {
      setDisplayConfirmPassword(confirmPassword);
      if (confirmRevealTimeoutRef.current !== null) {
        window.clearTimeout(confirmRevealTimeoutRef.current);
      }
    } else {
      maskConfirmAll();
    }
  }}
  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded text-gray-500 hover:text-gray-700"
>
  {showConfirmPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
</button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !agreed}
              className="w-full py-3 bg-amber-400 text-slate-900 font-semibold rounded-lg hover:bg-amber-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-amber-600 font-semibold hover:text-amber-700">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}