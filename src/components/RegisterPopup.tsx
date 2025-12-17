import React, { useState } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function RegisterPopup({ isOpen, onClose }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [college, setCollege] = useState('');
  const [role, setRole] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation for required fields
    if (!name.trim() || !email.trim() || !college.trim() || !role || !timeSlot || !mobile.trim() || !message.trim()) {
      alert('Please fill all required fields.');
      return;
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      college: college.trim(),
      role,
      timeSlot,
      countryCode,
      mobile: mobile.trim(),
      message: message.trim(),
      course: course.trim(),
    };

    // TODO: Replace with API/supabase call if needed.
    console.log('Contact form submitted:', payload);

    // Optionally clear fields (keeps UX simple for now)
    setName('');
    setEmail('');
    setCollege('');
    setRole('');
    setTimeSlot('');
    setCountryCode('+91');
    setMobile('');
    setMessage('');

    // Close the popup after submit
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative w-full max-w-lg mx-4 bg-white rounded-xl shadow-xl p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold">Get in Touch</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 ml-4"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white p-3 placeholder-gray-400 shadow-sm"
                placeholder="Enter your email"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-white p-3 placeholder-gray-400 shadow-sm"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">College Name <span className="text-red-500">*</span></label>
                <input
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-white p-3 placeholder-gray-400 shadow-sm"
                  placeholder="Enter college name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Role <span className="text-red-500">*</span></label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-white p-3 placeholder-gray-400 shadow-sm"
                >
                  <option value="">Choose Role</option>
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="coordinator">Coordinator</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Time Slot <span className="text-red-500">*</span></label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-white p-3 placeholder-gray-400 shadow-sm"
                >
                  <option value="">Choose Time Slot</option>
                  <option value="morning">Morning (8am - 11am)</option>
                  <option value="afternoon">Afternoon (12pm - 4pm)</option>
                  <option value="evening">Evening (5pm - 8pm)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile Number <span className="text-red-500">*</span></label>
              <div className="mt-1 flex gap-3">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
                >
                  <option value="+91">IN +91</option>
                  <option value="+1">US +1</option>
                  <option value="+44">UK +44</option>
                </select>

                <input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  inputMode="tel"
                  className="flex-1 rounded-lg border border-gray-200 bg-white p-3 placeholder-gray-400 shadow-sm"
                  placeholder="Mobile number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white p-3 placeholder-gray-400 shadow-sm"
                placeholder="Enter your message"
              />
            </div>

            <div>
              <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-400 text-white font-semibold">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}