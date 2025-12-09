import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import './About.css';

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className="skillup-about">
        <nav className="nav-bar">
          <div className="nav-container">
            <a 
              href="#home" 
              className="nav-brand" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              SkillUp
            </a>

            <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
              <a href="#about-us" onClick={(e) => { e.preventDefault(); scrollToSection('about-us'); }}>About Us</a>
              <a href="#mission" onClick={(e) => { e.preventDefault(); scrollToSection('mission'); }}>Mission</a>
              <a href="#what-we-do" onClick={(e) => { e.preventDefault(); scrollToSection('what-we-do'); }}>What We Do</a>
              <a href="#team" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>Team</a>
              <a href="#faqs" onClick={(e) => { e.preventDefault(); scrollToSection('faqs'); }}>FAQs</a>
            </div>
          </div>
        </nav>

        {/* HOME SECTION */}
        <section id="home" className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">SkillUp by SparcMinds</h1>
              <p className="hero-subtitle">Transforming Students into Industry-Ready Professionals</p>
              <p className="hero-description">
                An innovative learning platform dedicated to helping students become
                industry-ready professionals through practical skills, career guidance,
                and hands-on training.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT US */}
        <section id="about-us" className="section section-light">
          <div className="container">
            <h2 className="section-title">About Us</h2>
            <div className="content-wrapper">
              <p className="text-large">
                SkillUp by SparcMinds Edu-Tech is an innovative learning platform...
              </p>
              <p className="text-large">
                Our platform is built for students who want to grow beyond theory...
              </p>

              <div className="highlight-box">
                <p>
                  <strong>SkillUp is not just a training system—it is a complete career development ecosystem.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section id="mission" className="section section-dark">
          <div className="container">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-intro">
              Our mission is to empower students with real-world skills...
            </p>

            <div className="grid grid-4">
              <div className="card"><h3>Structured Skill Development</h3><p>Intensive foundational & advanced programs</p></div>
              <div className="card"><h3>Mentorship from Professionals</h3><p>Guidance from working professionals</p></div>
              <div className="card"><h3>Placement Support</h3><p>Continuous support until selection</p></div>
              <div className="card"><h3>Affordable & Quality</h3><p>Accessible prices</p></div>
            </div>

            <div className="mission-statement">
              <p>We believe every student deserves a chance...</p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faqs" className="section section-light">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>

            <div className="faq-container">

              {/* FAQ 1 */}
              <div className="faq-item">
                <button 
                  className={`faq-question ${openFaq === 0 ? 'active' : ''}`} 
                  onClick={() => toggleFaq(0)}
                >
                  <span>Who can join SkillUp?</span>
                  <ChevronDown className={`faq-icon ${openFaq === 0 ? 'rotate' : ''}`} />
                </button>

                <div className={`faq-answer ${openFaq === 0 ? 'open' : ''}`}>
                  <p>Any student or fresher aiming to build a tech career...</p>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="faq-item">
                <button 
                  className={`faq-question ${openFaq === 1 ? 'active' : ''}`} 
                  onClick={() => toggleFaq(1)}
                >
                  <span>Do you provide certificates?</span>
                  <ChevronDown className={`faq-icon ${openFaq === 1 ? 'rotate' : ''}`} />
                </button>

                <div className={`faq-answer ${openFaq === 1 ? 'open' : ''}`}>
                  <p>Yes—students receive certification after course completion...</p>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="faq-item">
                <button 
                  className={`faq-question ${openFaq === 2 ? 'active' : ''}`} 
                  onClick={() => toggleFaq(2)}
                >
                  <span>Do you guarantee placement?</span>
                  <ChevronDown className={`faq-icon ${openFaq === 2 ? 'rotate' : ''}`} />
                </button>

                <div className={`faq-answer ${openFaq === 2 ? 'open' : ''}`}>
                  <p>We provide continuous support and job assistance...</p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="faq-item">
                <button 
                  className={`faq-question ${openFaq === 3 ? 'active' : ''}`} 
                  onClick={() => toggleFaq(3)}
                >
                  <span>Are classes online or offline?</span>
                  <ChevronDown className={`faq-icon ${openFaq === 3 ? 'rotate' : ''}`} />
                </button>

                <div className={`faq-answer ${openFaq === 3 ? 'open' : ''}`}>
                  <p>SkillUp uses a structured hybrid model...</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">

            <div className="footer-column">
              <h5>SkillUp</h5>
              <p>Transforming students into industry-ready professionals.</p>
            </div>

            <div className="footer-column">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#what-we-do">What We Do</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#faqs">FAQs</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h5>Contact</h5>
              <p>Email: info@skillup.com<br />Phone: +91 XXXXXXXXXX</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 SkillUp by SparcMinds. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <span>|</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;