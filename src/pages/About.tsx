import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
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
            <Link to="/" className="nav-brand">
              SKILLUP.SPARCMINDS
            </Link>

            <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
              <a href="#about-us" onClick={(e) => { e.preventDefault(); scrollToSection('about-us'); }}>About Us</a>
              <a href="#vision" onClick={(e) => { e.preventDefault(); scrollToSection('vision'); }}>Vision</a>
              <a href="#mission" onClick={(e) => { e.preventDefault(); scrollToSection('mission'); }}>Mission</a>
              <a href="#faqs" onClick={(e) => { e.preventDefault(); scrollToSection('faqs'); }}>FAQs</a>
              <Link to="/">Back to Home</Link>
            </div>
          </div>
        </nav>

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

        <section id="about-us" className="section section-light">
          <div className="container">
            <h2 className="section-title">About Us</h2>
            <div className="content-wrapper">
              <p className="text-large">
                SkillUp by SparcMinds Edu-Tech is an innovative learning platform designed to bridge the gap between academic knowledge and real-world industry requirements. We focus on transforming students into industry-ready professionals through comprehensive skill development programs, mentorship, and hands-on training.
              </p>
              <p className="text-large">
                Our platform is built for students who want to grow beyond theory and gain practical expertise that employers value. We provide structured learning paths, professional guidance, and continuous support to ensure every student achieves their career goals.
              </p>

              <div className="highlight-box">
                <p>
                  <strong>SkillUp is not just a training system—it is a complete career development ecosystem.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="vision" className="section section-dark">
          <div className="container">
            <h2 className="section-title">Our Vision</h2>
            <p className="section-intro">At SparcMinds Academy, our vision is to emerge as a transformative EdTech platform that empowers students to unlock their true potential. We strive to:</p>

            <div className="grid grid-4">
              <div className="card">
                <h3>Change students’ lives</h3>
                <p>Change students’ lives by providing practical, high-impact learning that creates real opportunities</p>
              </div>
              <div className="card">
                <h3>Make young people industry-ready</h3>
                <p>Make young people industry-ready with future-focused skills, hands-on training, and real-world exposure</p>
              </div>
              <div className="card">
                <h3>Enable successful careers for all</h3>
                <p>Enable successful careers for all, regardless of background, location, or prior experience</p>
              </div>
            </div>

            <div className="mission-statement">
<p>We aim to bridge the gap between education and employment by combining quality mentorship, cutting-edge technology, and industry-aligned curricula. SparcMinds Academy aspires to be the next major milestone in skill development—shaping confident, skilled, and career-ready professionals for the global workforce.</p>            </div>
          </div>
        </section>
        <section id="mission" className="section section-dark">
          <div className="container">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-intro">
              Our mission is to empower students with real-world skills, professional mentorship, and career opportunities that transform their futures. We are committed to making quality education accessible and affordable for everyone.
            </p>

            <div className="grid grid-4">
              <div className="card">
                <h3>Structured Skill Development</h3>
                <p>Intensive foundational and advanced programs designed for real-world application</p>
              </div>
              <div className="card">
                <h3>Mentorship from Professionals</h3>
                <p>Get guidance from experienced working professionals in your field</p>
              </div>
              <div className="card">
                <h3>Placement Support</h3>
                <p>Continuous career support and job assistance until you land your dream role</p>
              </div>
              <div className="card">
                <h3>Affordable & Quality</h3>
                <p>High-quality education at accessible prices for all students</p>
              </div>
            </div>

            <div className="mission-statement">
              <p>We believe every student deserves a chance to build a successful career. Through our platform, we are creating opportunities for thousands of students to achieve their professional dreams and make a meaningful impact in their industries.</p>
            </div>
          </div>
        </section>

        <section id="faqs" className="section section-light">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>

            <div className="faq-container">
              <div className="faq-item">
                <button
                  className={`faq-question ${openFaq === 0 ? 'active' : ''}`}
                  onClick={() => toggleFaq(0)}
                >
                  <span>Who can join SparcMinds EduTech?</span>
                  <ChevronDown className={`faq-icon ${openFaq === 0 ? 'rotate' : ''}`} />
                </button>

                <div className={`faq-answer ${openFaq === 0 ? 'open' : ''}`}>
                  <p>Any student or fresher aiming to build a tech career can join SkillUp. Whether you're a college student, recent graduate, or someone looking to switch careers, our programs are designed to help you succeed.</p>
                </div>
              </div>

<div className="faq-item">
        <button
          className={`faq-question ${openFaq === 0 ? 'active' : ''}`}
          onClick={() => toggleFaq(0)}
        >
          <span>What is the duration of your courses?</span>
          <ChevronDown className={`faq-icon ${openFaq === 0 ? 'rotate' : ''}`} />
        </button>

        <div className={`faq-answer ${openFaq === 0 ? 'open' : ''}`}>
          <p>
            Our course durations typically range from 8 to 12 weeks, depending on the learning track. For example, Java Full Stack programs span around 90+ hours, Salesforce courses are approximately 40+ hours, and AI/Data Analytic programs extend beyond 100+ hours.
          </p>
        </div>
      </div>
              <div className="faq-item">
                <button
                  className={`faq-question ${openFaq === 1 ? 'active' : ''}`}
                  onClick={() => toggleFaq(1)}
                >
                  <span>Will I get a certificate after completing the course?</span>
                  <ChevronDown className={`faq-icon ${openFaq === 1 ? 'rotate' : ''}`} />
                </button>

                <div className={`faq-answer ${openFaq === 1 ? 'open' : ''}`}>
                  <p>Yes, You will receive a verifiable course completion certificate from SPARCMINDS EDU-TECH after successfully completing the program. This certificate can be showcased on your resume and LinkedIn profile</p>
                </div>
              </div>

              <div className="faq-item">
                <button
                  className={`faq-question ${openFaq === 2 ? 'active' : ''}`}
                  onClick={() => toggleFaq(2)}
                >
                  <span>Do you guarantee placement?</span>
                  <ChevronDown className={`faq-icon ${openFaq === 2 ? 'rotate' : ''}`} />
                </button>

                <div className={`faq-answer ${openFaq === 2 ? 'open' : ''}`}>
                  <p>We provide continuous placement support and job assistance to all our students. While we cannot guarantee placement, our dedicated team works closely with you, providing interview preparation, resume building, and connecting you with hiring partners until you secure your desired role.</p>
                </div>
              </div>

              <div className="faq-item">
                <button
                  className={`faq-question ${openFaq === 3 ? 'active' : ''}`}
                  onClick={() => toggleFaq(3)}
                >
                  <span>Are classes online or offline?</span>
                  <ChevronDown className={`faq-icon ${openFaq === 3 ? 'rotate' : ''}`} />
                </button>

                <div className={`faq-answer ${openFaq === 3 ? 'open' : ''}`}>
                  <p>SkillUp uses a structured hybrid model that combines the best of both online and offline learning. You get the flexibility of online classes with the option for in-person sessions and workshops to ensure comprehensive learning.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h5>SparcMinds SkillUp</h5>
              <p>Transforming students into industry-ready professionals.</p>
            </div>

            <div className="footer-column">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#vision">Vision</a></li>
                <li><a href="#mission">Mission</a></li>
                <li><a href="#faqs">FAQs</a></li>
                <li><Link to="/">Home</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h5>Contact</h5>
              <p>Email: info@sparcminds.com<br />Phone: +91 7997486159</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 SkillUp by SparcMinds. All rights reserved.</p>
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
