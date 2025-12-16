import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PrivacyPolicy: React.FC = () => {
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
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
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
        <h1 className="fw-bold text-dark">Privacy Policy</h1>
        <p className="mb-0 text-dark">SKILLUP.SPARCMINDS EDU-TECH</p>
      </div>

      {/* ---------------- CONTENT SECTION ---------------- */}
      <div className="container my-5">
        <div className="card shadow-lg p-4 border-0">

          <h2 className="fw-bold mb-3">Privacy Policy – SKILLUP.SPARCMINDS EDU-TECH</h2>

          <p><strong>Effective Date:</strong> 18/11/2025</p>
          <p><strong>Contact:</strong> 7997486159</p>

          <hr />

          <h4 className="fw-semibold mt-3">1. DATA WE COLLECT</h4>
          <ul>
            <li>Personal information: name, phone number, email.</li>
            <li>Usage data, activity logs, learning progress.</li>
            <li>Device information: IP address, browser, OS.</li>
            <li>Analytics and performance data.</li>
          </ul>

          <h4 className="fw-semibold mt-3">2. LEGAL BASIS</h4>
          <p>Data is processed according to:</p>
          <ul>
            <li>IT Act 2000</li>
            <li>IT (Reasonable Security Practices & Procedures) Rules 2011</li>
            <li>Consumer Protection (E-Commerce) Rules</li>
          </ul>

          <h4 className="fw-semibold mt-3">3. DATA USAGE</h4>
          <ul>
            <li>User account management</li>
            <li>Tracking learning progress & issuing certificates</li>
            <li>Sending notifications and communication</li>
            <li>Security and fraud prevention</li>
            <li>Legal compliance</li>
          </ul>

          <h4 className="fw-semibold mt-3">4. DATA SHARING</h4>
          <ul>
            <li>Shared with payment processors</li>
            <li>Shared with hosting/cloud providers</li>
            <li>Shared with government authorities when required</li>
            <li><strong>We DO NOT sell your data</strong></li>
          </ul>

          <h4 className="fw-semibold mt-3">5. SECURITY MEASURES</h4>
          <p>Under Section 43A of the IT Act, we use:</p>
          <ul>
            <li>Secure servers</li>
            <li>Encrypted data transmission</li>
            <li>Cybersecurity audits</li>
            <li>Advanced protection safeguards</li>
          </ul>

          <h4 className="fw-semibold mt-3">6. USER RIGHTS</h4>
          <ul>
            <li>Request access to your data</li>
            <li>Request correction of incorrect information</li>
            <li>Request deletion (as permitted by law)</li>
          </ul>

          <h4 className="fw-semibold mt-3">7. DATA RETENTION</h4>
          <p>
            Data is stored for operational use and legally required retention of
            <strong> 3–7 years</strong>.
          </p>

          <h4 className="fw-semibold mt-3">8. CHILD DATA PROTECTION</h4>
          <p>We do not collect data from children without parental consent.</p>

          <h4 className="fw-semibold mt-3">9. GRIEVANCE REDRESSAL</h4>
          <p><strong>Grievance Officer:</strong></p>
          <p>Phone: 7997486159</p>
          <p>Response time: Within 48 hours.</p>
          <p>For privacy concerns, contact the number above.</p>

          <p className="mt-4 fw-semibold">By using our services, you agree to this Privacy Policy.</p>
        </div>
      </div>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-light py-4 mt-5">
        <div className="container text-center text-md-start">
          <div className="row">

            <div className="col-md-3 mb-3">
              <h5 className="fw-bold">SKILLUP</h5>
              <p>Transforming learners into industry-ready professionals.</p>
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
              <p>India</p>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
};

export default PrivacyPolicy;