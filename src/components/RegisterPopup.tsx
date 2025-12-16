import React, { useState } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function RegisterPopup({ isOpen, onClose }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!name.trim() || !email.trim()) {
      alert('Please enter a name and email.');
      return;
    }

    // For now just log the data. Replace with API/supabase call if needed.
    console.log('Registering student:', { name, email, course });
    // Close the popup after submit
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative w-full max-w-lg mx-4 bg-white rounded-xl shadow-xl p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-center">Register as a Student</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 ml-4"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Course of interest (optional)</label>
            <input
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              placeholder="Ex: React, Python, UI/UX"
            />
          </div>

          <div className="flex items-center justify-end space-x-3">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-amber-400 text-slate-900 rounded-md font-semibold">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
