import { Camera, Menu } from "lucide-react";
import { useState } from "react";

function StudentProfile() {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Centered Card */}
      <div className="w-[50%] bg-yellow-400 rounded-xl shadow-xl p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button className="text-black">
            <Menu size={26} />
          </button>

          <h1 className="text-xl font-bold text-black">My Profile</h1>

          <button className="border border-black text-black px-3 py-1 rounded text-sm hover:bg-black hover:text-yellow-400 transition">
            Log Out
          </button>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-black mb-6">
          Profile Picture
        </h2>

        {/* Profile Image */}
        <div className="relative flex justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-900 border-2 border-black shadow-xl">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-sm">No image</span>
              </div>
            )}
          </div>

          {/* Camera Button */}
          <label
            htmlFor="profile-upload"
            className="absolute bottom-0 right-[35%] w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition border-2 border-white shadow-md"
          >
            <Camera size={22} color="white" />
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
