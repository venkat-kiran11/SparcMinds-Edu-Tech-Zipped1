import React, { useState, ChangeEvent } from "react";
import {
  Camera,
  LogOut,
  User,
  BookOpen,
  Award,
  CreditCard,
  Briefcase,
} from "lucide-react";
import "./StudentProfilePage.css";
import Logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

interface Profile {
  fullName: string;
  studentId: string;
  email: string;
  mobile: string;
  dob: string;
  gender: string;
  location: string;
  timezone: string;
}

const StudentProfilePage: React.FC = () => {
  // ✅ FIX: initialize navigate
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("overview");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const [profile, setProfile] = useState<Profile>({
    fullName: "",
    studentId: "SM-2025-001",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    location: "",
    timezone: "",
  });

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setProfileImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const renderTab = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="box">
            <h3 className="section-title">Basic Information</h3>
            <input className="form-control mb-3" name="fullName" placeholder="Full Name" onChange={handleChange} />
            <input className="form-control mb-3" value={profile.studentId} disabled />
            <input className="form-control mb-3" name="email" placeholder="Email" onChange={handleChange} />
            <input className="form-control mb-3" name="mobile" placeholder="Mobile" onChange={handleChange} />
            <input type="date" className="form-control mb-3" name="dob" onChange={handleChange} />
            <select className="form-select mb-3" name="gender" onChange={handleChange}>
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input className="form-control mb-3" name="location" placeholder="Location" onChange={handleChange} />
            <input className="form-control" name="timezone" placeholder="Time Zone" onChange={handleChange} />
          </div>
        );

      case "courses":
        return (
          <div className="box">
            <h3 className="section-title">Courses</h3>
            <div className="stat-card">
              <span className="stat-label">Course Name</span>
              <h2 className="stat-value">Full Stack Testing</h2>
              <span className="stat-badge success">Active</span>
            </div>
          </div>
        );

      case "progress":
        return (
          <div className="box">
            <h3 className="section-title">Progress</h3>
            <div className="stat-grid">
              <div className="stat-card">
                <span className="stat-label">Completion</span>
                <h2 className="stat-value">65%</h2>
              </div>
              <div className="stat-card">
                <span className="stat-label">Attendance</span>
                <h2 className="stat-value">90%</h2>
              </div>
            </div>
          </div>
        );

      case "payments":
        return (
          <div className="box">
            <h3 className="section-title">Payments</h3>
            <div className="stat-grid">
              <div className="stat-card">
                <span className="stat-label">Course Fee</span>
                <h2 className="stat-value">₹45,000</h2>
              </div>
              <div className="stat-card">
                <span className="stat-label">Payment Status</span>
                <h2 className="stat-value success">Paid</h2>
              </div>
            </div>
          </div>
        );

      case "placement":
        return (
          <div className="box">
            <h3 className="section-title">Placement</h3>
            <div className="stat-card">
              <span className="stat-label">Placement Status</span>
              <h2 className="stat-value success">Job Ready</h2>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-vh-100 bg-warning">
      {/* ================= TOP NAVBAR ================= */}
      <div className="top-navbar bg-dark text-white">
        <div className="nav-left">
          <img
                src={Logo}
                alt="Sparcminds logo"
                className="h-10 w-10 rounded-lg"
              />
          <span className="brand-text">SKILLUP.SPARCMINDS EDU-TECH</span>
        </div>

        <div className="nav-center">
          <h4 className="mb-0 fw-bold">Student Profile</h4>
        </div>

        <div className="nav-right">
          <button
            onClick={() => navigate("/")}
            className="nav-btn text-white"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/courses")}
            className="nav-btn text-white"
          >
            Courses
          </button>
          <button className="nav-btn logout bg-warning text-dark">
            <LogOut size={14} /> Logout
          </button>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-4">
        <div className="row dashboard-layout">
          {/* Sidebar */}
          <div className="col-md-3">
            <div className="card-box h-100 text-center">
              <div className="profile-wrapper">
                <div className="profile-avatar">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" />
                  ) : (
                    <User size={56} />
                  )}
                </div>
                <label className="profile-upload">
                  <Camera size={16} />
                  <input type="file" hidden onChange={handleImageUpload} />
                </label>
              </div>

              <h5 className="fw-bold">{profile.fullName || "Student Name"}</h5>
              <p className="text-muted">{profile.studentId}</p>

              <ul className="sidebar-nav list-unstyled mt-4">
                <li onClick={() => setActiveTab("overview")}><User size={16} /> Overview</li>
                <li onClick={() => setActiveTab("courses")}><BookOpen size={16} /> Courses</li>
                <li onClick={() => setActiveTab("progress")}><Award size={16} /> Progress</li>
                <li onClick={() => setActiveTab("payments")}><CreditCard size={16} /> Payments</li>
                <li onClick={() => setActiveTab("placement")}><Briefcase size={16} /> Placement</li>
              </ul>
            </div>
          </div>

          {/* Main */}
          <div className="col-md-9">
            <div className="main-panel h-100">
              <div className="main-content">{renderTab()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfilePage;
