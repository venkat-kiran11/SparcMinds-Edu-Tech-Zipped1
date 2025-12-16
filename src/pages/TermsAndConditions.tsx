import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const TermsConditions: React.FC = () => {
  return (
    <div>

      {/* ---------------- NAVBAR ---------------- */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            SKILLUP.SPARCMINDS EDU-TECH
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="/courses">Courses</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
              <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ---------------- BANNER ---------------- */}
      <div className="py-5 text-white text-center bg-warning">
        <h1 className="fw-bold text-dark">Terms & Conditions</h1>
        <p className="mb-0 text-dark">SKILLUP.SPARCMINDS EDU-TECH</p>
      </div>

      {/* ---------------- CONTENT SECTION ---------------- */}
      <div className="container my-5">
        <div className="card shadow-lg p-4 border-0">

          <h2 className="fw-bold mb-3">Terms & Conditions – SKILLUP.SPARCMINDS EDU-TECH</h2>

          <p><strong>Effective Date:</strong> 18/11/2025</p>
          <p><strong>Contact:</strong> 7997486159</p>

          <hr />

          {/* -------- 1 -------- */}
          <h4 className="fw-semibold mt-3">1. INTRODUCTION</h4>
          <p>
            These Terms govern your use of Skillup.SparcMinds Edu-Tech Services.
            By accessing the platform, you agree to comply with the Information Technology Act 2000,
            Consumer Protection Act 2019, Indian Contract Act 1872, and E-Commerce Rules.
          </p>

          {/* -------- 2 -------- */}
          <h4 className="fw-semibold mt-3">2. USER ELIGIBILITY</h4>
          <p>
            Users must be 13 years or older. Under-18 users require parental supervision.
          </p>

          {/* -------- 3 -------- */}
          <h4 className="fw-semibold mt-3">3. ACCOUNT CREATION & SECURITY</h4>
          <p>
            Users must provide accurate details and are fully responsible for maintaining account confidentiality.
          </p>

          {/* -------- 4 -------- */}
          <h4 className="fw-semibold mt-3">4. PAYMENTS, GST & BILLING</h4>
          <ul>
            <li>All payments must comply with Indian GST and taxation laws.</li>
            <li>Course fees and validity periods are displayed at the time of purchase.</li>
          </ul>

          {/* -------- 5 -------- */}
          <h4 className="fw-semibold mt-3">5. COURSE ACCESS & CERTIFICATION</h4>
          <p>
            Certificates are issued upon course completion and may be revoked in cases of misuse.
          </p>

          {/* -------- 6 -------- */}
          <h4 className="fw-semibold mt-3">6. REFUND POLICY</h4>
          <p>
            Refunds are issued only within the defined refund period and according to Consumer Protection norms.
          </p>

          {/* -------- 7 -------- */}
          <h4 className="fw-semibold mt-3">7. INTELLECTUAL PROPERTY</h4>
          <p>
            All training material is owned by Skillup.SparcMinds Edu-Tech and is protected under Copyright Act 1957.
          </p>

          {/* -------- 8 -------- */}
          <h4 className="fw-semibold mt-3">8. PROHIBITED ACTIVITIES</h4>
          <ul>
            <li>Platform tampering or hacking attempts</li>
            <li>Sharing copyrighted material illegally</li>
            <li>Misusing learning resources</li>
          </ul>

          {/* -------- 9 -------- */}
          <h4 className="fw-semibold mt-3">9. LIMITATION OF LIABILITY</h4>
          <p>
            The company is not liable for indirect losses, data loss, or failures caused by third-party services.
          </p>

          {/* -------- 10 -------- */}
          <h4 className="fw-semibold mt-3">10. TERMINATION</h4>
          <p>
            We may suspend or terminate accounts for violations or fraudulent behaviour.
          </p>

          {/* -------- 11 -------- */}
          <h4 className="fw-semibold mt-3">11. GOVERNING LAW</h4>
          <p>
            These Terms are governed by Indian law.  
            Jurisdiction: <strong>Hyderabad, Telangana.</strong>
          </p>

          <h4 className="fw-semibold mt-3">For Queries</h4>
          <p>Phone: 7997486159</p>

          <p className="mt-4 fw-semibold">By using our services, you agree to these Terms & Conditions.</p>
        </div>
      </div>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-light py-4 mt-5">
        <div className="container text-center text-md-start">
          <div className="row">

            <div className="col-md-3 mb-3">
              <h5 className="fw-bold">SKILLUP</h5>
              <p>Empowering learners with industry-ready skills.</p>
            </div>

            <div className="col-md-3 mb-3">
              <h5 className="fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/about" className="text-dark">About</a></li>
                <li><a href="/courses" className="text-dark">Courses</a></li>
                <li><a href="/blog" className="text-dark">Blog</a></li>
                <li><a href="/contact" className="text-dark">Contact</a></li>
              </ul>
            </div>

            <div className="col-md-3 mb-3">
              <h5 className="fw-bold">Support</h5>
              <ul className="list-unstyled">
                <li><a href="/PrivacyPolicy" className="text-dark">Privacy Policy</a></li>
                <li><a href="/TermsAndConditions" className="text-dark">Terms & Conditions</a></li>
              </ul>
            </div>

            <div className="col-md-3 mb-3">
              <h5 className="fw-bold">Contact</h5>
              <p>Phone: 7997486159</p>
              <p>SKILLUP.SPARCMINDS EDU-TECH</p>
              <p>Hyderabad, Telangana</p>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
};

export default TermsConditions;