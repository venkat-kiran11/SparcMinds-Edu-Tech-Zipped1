import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';
import Logo from '../assets/logo.jpg';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSend = async () => {
    setMessage('');
    if (!email) {
      setMessage('Please enter your email');
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/login'
      });
      if (error) setMessage(error.message);
      else setMessage('If that email exists, check your inbox for reset instructions.');
    } catch (err) {
      setMessage('Failed to send reset email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <img src={Logo} alt="logo" className="h-10 w-10 rounded-lg" />
            <span className="text-2xl font-bold text-slate-900">SPARCMINDS</span>
          </div>

          <div className="mt-4 p-4 bg-white rounded-lg shadow text-center">
            <div className="flex items-center justify-center mb-3">
              <div className="bg-black rounded-full p-2">
                <Mail className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Forgot Password?</h2>
            <p className="text-gray-500 mb-4">No worries, we'll send you reset instructions</p>

            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border-2 border-amber-300 rounded-lg focus:ring-0 focus:border-amber-400 bg-white text-gray-900"
              />
              <p className="text-xs text-gray-400 mt-2">We'll send a password reset link to this email</p>
            </div>

            <div className="mt-3">
              <button onClick={handleSend} disabled={loading} className="w-full py-2.5 rounded-lg text-black font-semibold disabled:opacity-50 bg-amber-400 hover:bg-amber-500 shadow-sm">
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </div>

            {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}

            <div className="mt-4">
              <button type="button" onClick={() => navigate('/login')} className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-2 mx-auto">
                <span className="text-lg">←</span>
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}