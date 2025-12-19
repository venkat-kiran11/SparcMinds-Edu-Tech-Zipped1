
import { useState, useEffect, useCallback } from "react";
import {
  Users,
  Award,
  TrendingUp,
  ChevronRight,
  CheckCircle,
  Zap,
  Clock,
  Star,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { FloatingActionButtons } from "../components/FloatingActionButton";
import RegisterPopup from "../components/RegisterPopup";
import Logo from "../assets/logo.jpg";
import sparkhome from "../assets/sparkhome.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
// import excellenceBanner from "../assets/FlowDiagrammodified.jpg";
import LearningRoadmap from "../components/LeaningRoadmap";

export function Home() {
  const navigate = useNavigate();
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  const features = [
    "Track Progress",
    "Get Endorsed",
    "Earn Badges",
    "Build Portfolio",
  ];

  const closeAllDropdowns = () => {
    setAboutDropdownOpen(false);
    setFeaturesDropdownOpen(false);
  };

  const scrollToFeaturesSection = () => {
    setIsMobileMenuOpen(false);
    setFeaturesDropdownOpen(false);
    setAboutDropdownOpen(false);

    const section = document.getElementById("features");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAboutNavigation = (section: string) => {
    closeAllDropdowns();
    setIsMobileMenuOpen(false);
    navigate("/about-us");

    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  // Footer FAQ Navigation
  const handleFooterFAQ = () => {
    navigate("/about-us");

    setTimeout(() => {
      const faqSection = document.getElementById("faqs");
      if (faqSection) faqSection.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  // Show popup after 10s every time page loads
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowRegisterPopup(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const closeRegisterPopup = useCallback(() => {
    setShowRegisterPopup(false);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showRegisterPopup) closeRegisterPopup();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showRegisterPopup, closeRegisterPopup]);

  const containerStagger = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
  };

  const childFadeUp = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const heroTextVariant = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const goToSignup = () => navigate("/signup");
  const goToLogin = () => navigate("/login");

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white sticky top-0 z-50 shadow-lg">
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={Logo} className="h-10 w-10 rounded-lg" />
              <span className="text-white font-bold text-[18px] tracking-wider">
                Skillup.SPARCMINDS
              </span>
              
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {/* Features */}
              <div className="relative">
                <button
                  className="hover:text-amber-400 transition flex items-center gap-1"
                  onClick={() => {
                    setFeaturesDropdownOpen(!featuresDropdownOpen);
                    setAboutDropdownOpen(false);
                  }}
                >
                  Features
                  <ChevronDown
                    className={`w-4 transition ${
                      featuresDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {featuresDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-xl py-2 z-50">
                    {features.map((feature) => (
                      <button
                        key={feature}
                        onClick={scrollToFeaturesSection}
                        className="block w-full text-left px-4 py-2 hover:bg-slate-700 hover:text-amber-400 text-sm"
                      >
                        {feature}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/courses" className="hover:text-amber-400">
                Courses
              </Link>
<Link to="/studentprofile" className="hover:text-amber-400">
                studentprofile
              </Link>

               

              {/* About */}
              <div className="relative">
                <button
                  className="hover:text-amber-400 transition flex items-center gap-1"
                  onClick={() => {
                    setAboutDropdownOpen(!aboutDropdownOpen);
                    setFeaturesDropdownOpen(false);
                  }}
                >
                  About
                  <ChevronDown
                    className={`w-4 transition ${
                      aboutDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {aboutDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-xl py-2 z-50">
                    <button
                      onClick={() => handleAboutNavigation("about-us")}
                      className="block w-full text-left px-4 py-2 hover:bg-slate-700 hover:text-amber-400 text-sm"
                    >
                      About Us
                    </button>
                    <button
  onClick={() => handleAboutNavigation("vision")}
  className="block w-full text-left px-4 py-2 hover:bg-slate-700 hover:text-amber-400 text-sm"
>
  Our Vision
</button>
                    <button
                      onClick={() => handleAboutNavigation("mission")}
                      className="block w-full text-left px-4 py-2 hover:bg-slate-700 hover:text-amber-400 text-sm"
                    >
                      Our Mission
                    </button>
                    <button
                      onClick={() => handleAboutNavigation("faqs")}
                      className="block w-full text-left px-4 py-2 hover:bg-slate-700 hover:text-amber-400 text-sm"
                    >
                      FAQs
                    </button>
                  </div>
                )}
              </div>

              <a
                href="https://sparcmindsmedia.blogspot.com/"
                className="hover:text-amber-400"
              >
                Blogs
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button onClick={goToLogin} className="hover:text-amber-400">
                Sign In
              </button>
              <button
                onClick={goToSignup}
                className="px-6 py-2 bg-amber-400 text-slate-900 rounded-lg hover:bg-amber-500"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:text-amber-400"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                closeAllDropdowns();
              }}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-3 space-y-4 border-t border-slate-700 pt-4"
            >
              {/* FEATURES */}
              <button
                className="w-full text-left flex justify-between py-2"
                onClick={() => {
                  setFeaturesDropdownOpen(!featuresDropdownOpen);
                  setAboutDropdownOpen(false);
                }}
              >
                Features
                <ChevronDown
                  className={`w-4 transition ${
                    featuresDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {featuresDropdownOpen && (
                <div className="pl-4 space-y-2">
                  {features.map((feature) => (
                    <button
                      key={feature}
                      onClick={scrollToFeaturesSection}
                      className="block w-full text-left text-sm hover:text-amber-400"
                    >
                      {feature}
                    </button>
                  ))}
                </div>
              )}

              {/* ABOUT */}
              <button
                className="w-full text-left flex justify-between py-2"
                onClick={() => {
                  setAboutDropdownOpen(!aboutDropdownOpen);
                  setFeaturesDropdownOpen(false);
                }}
              >
                About
                <ChevronDown
                  className={`w-4 transition ${
                    aboutDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {aboutDropdownOpen && (
                <div className="pl-4 space-y-2">
                  <button
                    onClick={() => handleAboutNavigation("about-us")}
                    className="block w-full text-left"
                  >
                    About Us
                  </button>
                  <button
  onClick={() => handleAboutNavigation("vision")}
  className="block w-full text-left"
>
  Our Vision
</button>
                  <button
                    onClick={() => handleAboutNavigation("mission")}
                    className="block w-full text-left"
                  >
                    Our Mission
                  </button>
                  <button
                    onClick={() => handleAboutNavigation("faqs")}
                    className="block w-full text-left"
                  >
                    FAQs
                  </button>
                </div>
              )}

              {/* COURSES */}
              <button
                onClick={() => navigate("/courses")}
                className="block w-full text-left py-2"
              >
                Courses
              </button>

              {/* BLOGS */}
              <a
                href="https://sparcmindsmedia.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left py-2 hover:text-amber-400"
              >
                Blogs
              </a>

              {/* AUTH */}
              <button
                onClick={goToLogin}
                className="block w-full text-left py-2"
              >
                Sign In
              </button>

              <button
                onClick={goToSignup}
                className="w-full py-2 bg-amber-400 rounded-lg text-slate-900"
              >
                Get Started
              </button>
            </motion.div>
          )}
        </nav>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              variants={heroTextVariant}
              initial="hidden"
              whileInView="show"
            >
              <h1 className="text-5xl font-bold mb-6">
                Learn Without <span className="text-amber-400">Limits</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Build your professional profile, showcase your skills, get
                endorsed by peers, and unlock your career potential with
                SPARCMINDS SkillUp.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={goToSignup}
                  className="px-8 py-4 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-500"
                >
                  Get Started <ChevronRight className="inline-block ml-2" />
                </button>

                <button className="px-8 py-4 bg-white/10 rounded-lg font-semibold hover:bg-white/20">
                  <Zap className="inline-block mr-2" />
                  Discover Skills
                </button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-8 shadow-2xl">
                <img src={sparkhome} className="rounded-xl shadow-lg" />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-green-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Skills Endorsed</p>
                  <p className="font-bold text-gray-900">+5,432 this week</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold mb-4"
            >
              Why Choose SkillUp?
            </motion.h2>

            <p className="text-xl text-gray-600">
              Everything you need to showcase and develop your professional
              skills
            </p>
          </div>

          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            className="grid md:grid-cols-4 gap-8"
          >
            <motion.div
              variants={childFadeUp}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Track Progress</h3>
              <p className="text-gray-600">
                Monitor your skill development over time.
              </p>
            </motion.div>

            <motion.div
              variants={childFadeUp}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Get Endorsed</h3>
              <p className="text-gray-600">
                Receive recognition from your network.
              </p>
            </motion.div>

            <motion.div
              variants={childFadeUp}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Earn Badges</h3>
              <p className="text-gray-600">
                Unlock achievements by reaching milestones.
              </p>
            </motion.div>

            <motion.div
              variants={childFadeUp}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Build Portfolio</h3>
              <p className="text-gray-600">
                Showcase expertise in your professional profile.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BRAND / STATS */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-6">
        Build Your Professional Brand
      </h2>

      <p className="text-xl text-gray-300 mb-8">
        Create a powerful professional profile that showcases your expertise.
      </p>

      <ul className="space-y-4">
        {[
          "Add unlimited professional skills",
          "Get verified skill endorsements",
          "Earn exclusive achievement badges",
          "Share your profile with recruiters",
        ].map((text) => (
          <li key={text} className="flex items-center gap-3">
            <CheckCircle className="text-amber-400 w-5 h-5" />
            <span>{text}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={goToSignup}
        className="mt-8 px-8 py-4 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-500 transition"
      >
        Get Started Free
      </button>
    </motion.div>

    {/* RIGHT STATS CARD */}
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-10"
    >
      <div className="grid grid-cols-2 gap-10">

        {[
          { icon: <Clock size={28} />, label: "Access", value: "24/7" },
          { icon: <Award size={28} />, label: "Skills", value: "Unlimited" },
          { icon: <Users size={28} />, label: "Community", value: "50K+" },
          { icon: <Star size={28} />, label: "Rating", value: "4.9" },
        ].map(({ icon, label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center text-center space-y-2"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-amber-400">
              {icon}
            </div>

            {/* Value */}
            <div className="text-3xl font-bold">
              {value}
            </div>

            {/* Label */}
            <div className="text-gray-400 text-sm">
              {label}
            </div>
          </div>
        ))}

      </div>
    </motion.div>

  </div>
</section>


      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <LearningRoadmap />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

    {/* Logo + About */}
    <div>
      <div className="flex items-start gap-3 mb-4">
        <img src={Logo} alt="Logo" className="w-14 h-14 rounded-lg" />
        <div>
          <h5 className="text-xl font-bold">Skillup.SPARCMINDS</h5>
          <small className="text-sm text-gray-300">EDU-TECH</small>
        </div>
      </div>

      <p className="text-gray-400 text-sm mb-4">
        Our mission is to empower students across the Telugu states with
        high-quality education in their regional language.
      </p>

      {/* <div className="flex gap-3">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <FontAwesomeIcon icon={faYoutube} size="2x" />
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        <FontAwesomeIcon icon={faTelegram} size="2x" />
      </div> */}
      <div className="flex gap-3">
  <a
    // href=""
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="hover:text-amber-400 transition"
  >
    <FontAwesomeIcon icon={faInstagram} size="2x" />
  </a>

  <a
    href="https://www.youtube.com/@skillupsparcmindsedutech"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
    className="hover:text-amber-400 transition"
  >
    <FontAwesomeIcon icon={faYoutube} size="2x" />
  </a>

  <a
    href="https://www.linkedin.com/company/sparcmindsedutech/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="hover:text-amber-400 transition"
  >
    <FontAwesomeIcon icon={faLinkedin} size="2x" />
  </a>

  <a
    // href=""
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Telegram"
    className="hover:text-amber-400 transition"
  >
    <FontAwesomeIcon icon={faTelegram} size="2x" />
  </a>
</div>



    </div>

    {/* Platform */}
    <div>
      <h4 className="font-bold mb-4">Platform</h4>
      <ul className="text-gray-400 space-y-2">
        <li><Link to="/courses" className="hover:text-amber-400">Courses</Link></li>
        <li><a href="https://sparcmindsmedia.blogspot.com/" target="_blank" className="hover:text-amber-400">Blog</a></li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h4 className="font-bold mb-4">Support</h4>
      <ul className="text-gray-400 space-y-2">
        <li><a href="#" className="hover:text-amber-400">Help Center</a></li>
        <li><a href="tel:+917997486159" className="hover:text-amber-400">Contact Us</a></li>
        <li>
          <button onClick={handleFooterFAQ} className="hover:text-amber-400">
            FAQs
          </button>
        </li>
      </ul>
    </div>

    {/* Legal */}
    <div>
      <h4 className="font-bold mb-4">Legal</h4>
      <ul className="text-gray-400 space-y-2">
        <li><Link to="/PrivacyPolicy" className="hover:text-amber-400">Privacy Policy</Link></li>
        <li><Link to="/TermsAndConditions" className="hover:text-amber-400">Terms of Service</Link></li>
      </ul>
    </div>

  </div>

  <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
    © 2026 SPARCMINDS. All rights reserved.
  </div>
</footer>


      {/* POPUP */}
      <RegisterPopup isOpen={showRegisterPopup} onClose={closeRegisterPopup} />

      <FloatingActionButtons />
    </div>
  );
}

export default Home;