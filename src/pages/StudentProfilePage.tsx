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
import { useNavigate } from "react-router-dom";
import "./StudentProfilePage.css";
import Logo from "../assets/logo.jpg";

/* ================= TYPES ================= */

type TabKey =
  | "overview"
  | "education"
  | "courses"
  | "payments"
  | "placement";

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

interface Education {
  qualification: string;
  degree: string;
  institution: string;
  passingYear: string;
  status: string;
}

interface CourseDetails {
  courseName: string;
  batchName: string;
  startDate: string;
  endDate: string;
  courseStatus: string;
  skills: string;
}

interface PaymentDetails {
  courseFee: string;
  paymentStatus: string;
  subscriptionValidity: string;
}

interface PlacementDetails {
  jobReady: string;
  resumeLink: string;
  mockScore: string;
  companiesApplied: string;
  interviewStatus: string;
}

/* ================= COMPONENT ================= */

const StudentProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  /* ================= STATE ================= */

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

  const [education, setEducation] = useState<Education>({
    qualification: "",
    degree: "",
    institution: "",
    passingYear: "",
    status: "",
  });

  const [course, setCourse] = useState<CourseDetails>({
    courseName: "",
    batchName: "",
    startDate: "",
    endDate: "",
    courseStatus: "",
    skills: "",
  });

  const [payment, setPayment] = useState<PaymentDetails>({
    courseFee: "",
    paymentStatus: "",
    subscriptionValidity: "",
  });

  const [placement, setPlacement] = useState<PlacementDetails>({
    jobReady: "",
    resumeLink: "",
    mockScore: "",
    companiesApplied: "",
    interviewStatus: "",
  });

  /* ================= HANDLERS ================= */

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setProfileImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleProfileChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  /* ================= TABS ================= */

  const renderOverview = () => (
    <div className="box">
      <h3 className="section-title">Basic Information</h3>

      <input
        className="form-control mb-3"
        name="fullName"
        placeholder="Full Name"
        value={profile.fullName}
        onChange={handleProfileChange}
      />

      <input className="form-control mb-3" value={profile.studentId} disabled />

      <input
        className="form-control mb-3"
        name="email"
        placeholder="Email Address"
        value={profile.email}
        onChange={handleProfileChange}
      />

      <input
        className="form-control mb-3"
        name="mobile"
        placeholder="Mobile Number"
        value={profile.mobile}
        onChange={handleProfileChange}
      />

      <input
        type="date"
        className="form-control mb-3"
        name="dob"
        value={profile.dob}
        onChange={handleProfileChange}
      />

      <select
        className="form-select mb-3"
        name="gender"
        value={profile.gender}
        onChange={handleProfileChange}
      >
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <input
        className="form-control mb-3"
        name="location"
        placeholder="Location"
        value={profile.location}
        onChange={handleProfileChange}
      />

      <input
        className="form-control"
        name="timezone"
        placeholder="Time Zone"
        value={profile.timezone}
        onChange={handleProfileChange}
      />
    </div>
  );

  const renderEducation = () => (
    <div className="box">
      <h3 className="section-title">Educational Information</h3>

      <input
        className="form-control mb-3"
        placeholder="Highest Qualification"
        value={education.qualification}
        onChange={(e) =>
          setEducation({ ...education, qualification: e.target.value })
        }
      />

      <input
        className="form-control mb-3"
        placeholder="Degree & Specialization"
        value={education.degree}
        onChange={(e) =>
          setEducation({ ...education, degree: e.target.value })
        }
      />

      <input
        className="form-control mb-3"
        placeholder="College / University"
        value={education.institution}
        onChange={(e) =>
          setEducation({ ...education, institution: e.target.value })
        }
      />

      <input
        className="form-control mb-3"
        placeholder="Year of Passing"
        value={education.passingYear}
        onChange={(e) =>
          setEducation({ ...education, passingYear: e.target.value })
        }
      />

      <select
        className="form-select"
        value={education.status}
        onChange={(e) =>
          setEducation({ ...education, status: e.target.value })
        }
      >
        <option value="">Current Status</option>
        <option>Student</option>
        <option>Graduate</option>
        <option>Working Professional</option>
      </select>
    </div>
  );

  const renderCourses = () => (
    <div className="box">
      <h3 className="section-title">Course Enrollment Details</h3>

      <input
        className="form-control mb-3"
        placeholder="Course Name"
        value={course.courseName}
        onChange={(e) =>
          setCourse({ ...course, courseName: e.target.value })
        }
      />

      <input
        className="form-control mb-3"
        placeholder="Batch Name"
        value={course.batchName}
        onChange={(e) =>
          setCourse({ ...course, batchName: e.target.value })
        }
      />

      <div className="row">
        <div className="col-md-6">
          <input
            type="date"
            className="form-control mb-3"
            value={course.startDate}
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
        </div>
        <div className="col-md-6">
          <input
            type="date"
            className="form-control mb-3"
            value={course.endDate}
            onChange={(e) =>
              setCourse({ ...course, endDate: e.target.value })
            }
          />
        </div>
      </div>

      <select
        className="form-select mb-3"
        value={course.courseStatus}
        onChange={(e) =>
          setCourse({ ...course, courseStatus: e.target.value })
        }
      >
        <option value="">Course Status</option>
        <option>Active</option>
        <option>Completed</option>
        <option>On Hold</option>
      </select>

      <input
        className="form-control"
        placeholder="Skills Covered (Comma Separated)"
        value={course.skills}
        onChange={(e) =>
          setCourse({ ...course, skills: e.target.value })
        }
      />
    </div>
  );

  const renderPayments = () => (
    <div className="box">
      <h3 className="section-title">Payment & Subscription</h3>

      <input
        className="form-control mb-3"
        placeholder="Course Fee"
        value={payment.courseFee}
        onChange={(e) =>
          setPayment({ ...payment, courseFee: e.target.value })
        }
      />

      <select
        className="form-select mb-3"
        value={payment.paymentStatus}
        onChange={(e) =>
          setPayment({ ...payment, paymentStatus: e.target.value })
        }
      >
        <option value="">Payment Status</option>
        <option>Paid</option>
        <option>Pending</option>
        <option>Overdue</option>
      </select>

      <input
        className="form-control"
        placeholder="Subscription Validity"
        value={payment.subscriptionValidity}
        onChange={(e) =>
          setPayment({ ...payment, subscriptionValidity: e.target.value })
        }
      />
    </div>
  );

  const renderPlacement = () => (
    <div className="box">
      <h3 className="section-title">Placement & Career</h3>

      <select
        className="form-select mb-3"
        value={placement.jobReady}
        onChange={(e) =>
          setPlacement({ ...placement, jobReady: e.target.value })
        }
      >
        <option value="">Job Ready Status</option>
        <option>Yes</option>
        <option>No</option>
      </select>

      <input
        className="form-control mb-3"
        placeholder="Resume Drive Link"
        value={placement.resumeLink}
        onChange={(e) =>
          setPlacement({ ...placement, resumeLink: e.target.value })
        }
      />

      <input
        className="form-control mb-3"
        placeholder="Mock Interview Score"
        value={placement.mockScore}
        onChange={(e) =>
          setPlacement({ ...placement, mockScore: e.target.value })
        }
      />

      <input
        className="form-control mb-3"
        placeholder="Companies Applied"
        value={placement.companiesApplied}
        onChange={(e) =>
          setPlacement({ ...placement, companiesApplied: e.target.value })
        }
      />

      <select
        className="form-select"
        value={placement.interviewStatus}
        onChange={(e) =>
          setPlacement({ ...placement, interviewStatus: e.target.value })
        }
      >
        <option value="">Interview Status</option>
        <option>Not Started</option>
        <option>In Progress</option>
        <option>Selected</option>
        <option>Rejected</option>
      </select>
    </div>
  );

  const renderTab = () => {
    switch (activeTab) {
      case "overview":
        return renderOverview();
      case "education":
        return renderEducation();
         case "account&LoginDetails":
        return renderaccount();
      case "courses":
        return renderCourses();
      case "payments":
        return renderPayments();
      case "placement":
        return renderPlacement();
      default:
        return null;
    }
  };

  /* ================= JSX ================= */

  return (
    <div className="min-vh-100 bg-warning">
      <div className="top-navbar bg-dark text-white">
        <div className="nav-left">
          <img src={Logo} alt="Logo" className="h-10 w-10 rounded-lg" />
          <span className="brand-text">SKILLUP.SPARCMINDS EDU-TECH</span>
        </div>

        <div className="nav-center">
          <h4 className="fw-bold">Student Profile</h4>
        </div>

        <div className="nav-right">
          <button onClick={() => navigate("/")} className="nav-btn">
            Home
          </button>
          <button onClick={() => navigate("/courses")} className="nav-btn">
            Courses
          </button>
          <button className="nav-btn logout bg-warning text-dark">
            <LogOut size={14} /> Logout
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="row dashboard-layout">
          <div className="col-md-3">
            <div className="card-box text-center">
              <div className="profile-avatar">
                {profileImage ? <img src={profileImage} /> : <User size={56} />}
              </div>

              <label className="profile-upload">
                <Camera size={16} />
                <input type="file" hidden onChange={handleImageUpload} />
              </label>

              <h5 className="fw-bold">
                {profile.fullName || "Student Name"}
              </h5>
              <p className="text-muted">{profile.studentId}</p>

              <ul className="sidebar-nav list-unstyled">
                <li onClick={() => setActiveTab("overview")}>
                  <User size={16} /> Overview
                </li>
                <li onClick={() => setActiveTab("education")}>
                  <BookOpen size={16} /> Education
                </li>
                <li onClick={() => setActiveTab("courses")}>
                  <Award size={16} /> Courses
                </li>
                <li onClick={() => setActiveTab("payments")}>
                  <CreditCard size={16} /> Payments
                </li>
                <li onClick={() => setActiveTab("placement")}>
                  <Briefcase size={16} /> Placement
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-9">
            <div className="main-panel">{renderTab()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfilePage;
