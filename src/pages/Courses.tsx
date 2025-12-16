import { useState } from 'react';
import { Menu, X, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import Logo from '../assets/logo.jpg';
import javascriptImg from "../assets/javaScriptImage.jpg";
import reactImg from "../assets/ReactImage.jpg";
import pythonImg from "../assets/PythonImage.jpg";
import uiImg from "../assets/UIImage.jpg";
import dataAnalysisImg from "../assets/DataAnalysisImage.jpg";
import projectManagementImg from "../assets/ProjectManagementImage.jpg";


interface Course {
  id: number;
  title: string;
  instructor: string;
  duration: string | number;
  originalPrice: number;
  discountPrice: number;
  image: string;
  students?: number;
  isComingSoon?: boolean;
}
const courses: Course[] = [
  {
    id: 1,
    title: 'Java Full Stack Development',
    instructor: 'Sarah Johnson',
    duration: '2 - 3 Months',
    students: 12450,
    originalPrice: 18000,
    discountPrice: 14999,
    image: 'src/assets/java full stack.png'
  },
  {
    id: 2,
    title: 'Full Stack Testing',
    instructor: 'Dr.Michael Chen',
    duration: '2 - 3 Months',
    students: 8920,
    originalPrice: 15600,
    discountPrice: 12999,
    image: '1GenerativeAi (2).png'
  },
  {
    id: 3,
    title: 'DevOps with AWS',
    instructor: 'Emma Williams',
    duration: '2 - 3 Months',
    students: 15200,
    originalPrice: 16800,
    discountPrice: 13999,
    image: 'src/assets/1devops with aws.png'
  },
  {
    id: 4,
    title: 'Generative AI',
    instructor: 'Emma Williams',
    duration: '2 - 3 Months',
    students: 15200,
    originalPrice: 14400,
    discountPrice: 11999,
    image: 'src/assets/Aigenerative ai (1).png'
  },
  {
    id: 5,
    title: 'Cyber Security',
    instructor: 'Sarah Johnson',
    duration: '2 - 3 Months',
    students: 12450,
    originalPrice: 19200,
    discountPrice: 15999,
    image: 'src/assets/Cyber Security.png'
  },
  {
    id: 6,
    title: 'Data Analytics',
    instructor: 'Dr.Michael Chen',
    duration: '2 - 3 Months',
    students: 8920,
    originalPrice: 18000,
    discountPrice: 14999,
    image: 'src/assets/DataAnal.png'
  },
  {
    id: 7,
    title: 'Web Development',
    instructor: 'Emma Williams',
    duration: '2 - 3 Months',
    students: 15200,
    originalPrice: 16800,
    discountPrice: 13999,
    image: 'src/assets/web devolopment.png'
  },
  {
    id: 8,
    title: 'Data Science',
    instructor: 'Dr. Priya Rao',
    duration: '3 - 4 Months',
    students: 5000,
    originalPrice: 22800,
    discountPrice: 18999,
    image: 'https://via.placeholder.com/400x300?text=Data+Science'
  },
  {
    id: 9,
    title: 'Cloud Computing with AI',
    instructor: 'Ravi Kumar',
    duration: '2 - 3 Months',
    students: 3500,
    originalPrice: 19200,
    discountPrice: 15999,
    image: 'https://via.placeholder.com/400x300?text=Cloud+Computing+with+AI'
  },
  {
    id: 10,
    title: 'Generative AI Advanced',
    instructor: 'Dr. A I Expert',
    duration: '2 - 3 Months',
    students: 4000,
    originalPrice: 15000,
    discountPrice: 11999,
    image: 'src/assets/assets/GenerativeAi_Advanced.png'
  },
  {
    id: 11,
    title: 'Coming Soon',
    instructor: 'AI Courses',
    duration: 0,
    students: 0,
    originalPrice: 0,
    discountPrice: 0,
    image: '',
    isComingSoon: true
  }
];

const whyChooseUs = [
  {
    icon: 'https://img.icons8.com/color/96/meeting-room.png',
    title: 'Live Interactive Classes',
    description: 'Learn directly from trainers and clear your doubts in live sessions.'
  },
  {
    icon: 'https://img.icons8.com/color/96/project-management.png',
    title: 'Real-Time Projects',
    description: 'Gain hands-on experience by working on industry-style real projects.'
  },
  {
    icon: 'https://img.icons8.com/color/96/contract.png',
    title: 'Internship Letter',
    description: 'Receive an internship letter that adds value to your resume.'
  },
  {
    icon: 'https://img.icons8.com/color/96/interview.png',
    title: 'Mock Interviews & Resume',
    description: 'Practice interviews and get support to build a professional resume.'
  },
  {
    icon: 'https://img.icons8.com/color/96/goal.png',
    title: 'Placement Guidance',
    description: 'Learn how to apply for jobs and prepare for interviews confidently.'
  },
  {
    icon: 'https://img.icons8.com/color/96/certificate.png',
    title: 'Course Certificates',
    description: 'Get a verified certificate for every course you complete successfully.'
  }
];

function Courses() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#04142a]">
      <nav className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="Sparcminds logo"
                className="h-10 w-10 rounded-lg"
              />
              <div className="flex items-center gap-2">
                <div className="flex flex-col leading-tight">
                  <span className="text-white font-bold text-[18px] tracking-wider">
                    Skillup.SPARCMINDS
                  </span>
                  <span className="text-white text-[10px] opacity-80">
                    {/* Building Trust & Careers */}
                  </span>
                </div>
                <button
                  className="lg:hidden text-white ml-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
              </div>
            </div>

            <div className="hidden lg:flex flex-1 justify-center">
              <button className="bg-[#f9b817] text-black  px-3 py-2   rounded-full font-semibold text-lg shadow-lg hover:bg-[#e0a615] transition">
                Request a Call Back
              </button>
            </div>

            <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 w-full lg:w-auto mt-4 lg:mt-0 text-white font-semibold`}>
              <button onClick={() => navigate('/')} className="hover:text-[#f9b817] transition">
                Home
              </button>
              <a href="https://sparcmindsmedia.blogspot.com/" className="hover:text-[#f9b817] transition">
                Blogs
              </a>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 hover:text-[#f9b817] transition"
                >
                  <span>Upcoming Courses</span>
                  <span className={`text-xs transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {isDropdownOpen && (
                  <div className="lg:absolute lg:top-full lg:right-0 mt-2 bg-white text-black rounded-xl p-4 flex flex-col gap-3 min-w-[260px] lg:shadow-2xl">
                    <a href="#" className="hover:underline text-sm">AI Powered Java Full Stack</a>
                    <a href="#" className="hover:underline text-sm">Graphic Design Course</a>
                    <a href="#" className="hover:underline text-sm">AI Powered Digital Marketing</a>
                    <a href="#" className="hover:underline text-sm">AI Powered Data Analytics</a>
                  </div>
                )}
              </div>
            </div>

            <div className="w-full lg:hidden mt-2">
              <button className="w-full max-w-[360px] mx-auto block bg-[#f9b817] text-black px-6 py-3 rounded-full font-semibold shadow-lg">
                Request a Call Back
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white mb-12">
            <h3 className="text-3xl font-bold mb-2">Popular Courses</h3>
            <p className="text-gray-300">Start learning with our most loved courses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                <div className="h-48 sm:h-56 md:h-52 lg:h-44 bg-white overflow-hidden relative">
                  {course.isComingSoon ? (
                    <div className="flex items-center justify-center h-full bg-gray-100">
                      <h5 className="text-xl font-semibold text-gray-700">Coming soon..</h5>
                    </div>
                  ) : (
                    <img
                      src={course.image}
                      alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  )}
                </div>

                <div className="p-4 bg-[#04142a] text-white flex-1 flex flex-col">
                  <h5 className="text-lg font-semibold mb-2">{course.title}</h5>
                  
                  {!course.isComingSoon && (
                    <>
                      <div className="flex items-center gap-1 text-sm mb-auto">
                        <Clock size={16} />
                        <span>{course.duration}</span>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                        <div className="flex flex-col items-start gap-1">
                          <del className="text-warning opacity-80 text-sm">₹{course.originalPrice.toLocaleString()}</del>
                          <span className="text-xl font-bold text-[#ffffff]">
                            ₹{course.discountPrice.toLocaleString()}
                          </span>
                        </div>
                        <button 
                          onClick={() => course.id === 3 ? navigate('/learn-more') : course.id === 2 ? navigate('/fullstack-testing-daywise') : null}
                          className="bg-[#f9b817] text-black  px-3 py-2  rounded-lg font-semibold hover:bg-[#e0a615] transition">
                          Learn More
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


 {/* DISCOVER */}
      <section id="discover" className="py-16 sm:py-20">
        <div className="max-w-7xl container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
              Upcoming Courses
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Choose from thousands of in-demand professional skills
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {[
              { name: 'JavaScript', category: 'Programming', level: 'Intermediate', image: javascriptImg },
              { name: 'React', category: 'Frontend', level: 'Intermediate', image: reactImg },
              { name: 'Python', category: 'Programming', level: 'Beginner', image: pythonImg },
              { name: 'UI/UX Design', category: 'Design', level: 'Intermediate', image: uiImg },
              { name: 'Data Analysis', category: 'Analytics', level: 'Intermediate', image: dataAnalysisImg },
              { name: 'Project Management', category: 'Management', level: 'Intermediate', image: projectManagementImg },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group"
              >
                <div className="h-32 sm:h-40 w-full overflow-hidden">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{skill.name}</h3>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-xs sm:text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-semibold">
                      {skill.category}
                    </span>
                    <span className="text-xs sm:text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {skill.level}
                    </span>
                  </div>
                  <button
                    onClick={() => navigate('/signup')}
                    className="w-full py-2 bg-amber-400 text-slate-900 text-sm sm:text-base font-semibold rounded-lg hover:bg-amber-500 transition"
                  >
                    Add to Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => navigate('/signup')}
              className="px-8 py-3 sm:py-4 bg-warning text-black rounded-lg font-semibold hover:bg-slate-800 transition"
            >
              Explore All Skills
            </button>
          </div>
        </div>
      </section>




      <section className="py-16 bg-[#f9b817]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Why Choose Us?</h2>
            <p className="text-gray-700">
              Learn with simple teaching, real practice, and full support for your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 mx-auto mb-4 -mt-12 bg-black rounded-full p-3 shadow-xl"
                />
                <h5 className="text-xl font-semibold mb-3">{item.title}</h5>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-black mb-4">Get Certified</h1>
              <p className="text-xl text-gray-700 mb-6">
                Yes, you'll get a <strong>Certificate</strong> representing your Industry Readiness
                once you submit your projects and clear the pre-placement test.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <img
                    src="https://i0.wp.com/sjbit.edu.in/wp-content/uploads/2021/07/AICTE-Logo-250x250-1.png?w=250&ssl=1"
                    alt="AICTE Approved"
                    className="w-16 h-16 object-contain"
                  />
                  <span className="text-lg">Approved by AICTE</span>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2025/4/500055463/AP/OS/HG/19876923/iso-21001-2018-certification.png"
                    alt="ISO Certified"
                    className="w-16 h-16 object-contain"
                  />
                  <span className="text-lg">Certified by ISO 21001:2018</span>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="https://www.legalraasta.com/blog/wp-content/uploads/2018/09/Importance-1-e1536998812445.png"
                    alt="MSME Registered"
                    className="w-16 h-16 object-contain"
                  />
                  <span className="text-lg">Registered under MSME</span>
                </div>
              </div>

              <button className="bg-[#f9b817] text-black  px-3 py-2  rounded-lg font-semibold hover:bg-[#e0a615] transition">
                Learn More
              </button>
            </div>

            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvrQDevxLylxtjB6kG5bRLqoJ8m4ZxjKc7GQ&s"
                alt="Certificate"
                className="w-full rounded-lg border-4 border-[#f9b817]"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-transparent text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-start gap-3 mb-4">
                <img
                  src={Logo}
                  alt="Logo" width={200}
                  className="w-14 h-14 object-cover rounded-lg"
                />
                <div>
                  <h5 className="text-xl font-bold">SPARCMINDS</h5>
                  <small className="text-sm text-gray-300">EDU-TECH</small>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Our mission is to empower students across the Telugu states with high-quality
                education in their regional language, making learning accessible, practical, and
                culturally relevant.
              </p>
              <div className="flex gap-3">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
               <FontAwesomeIcon icon={faYoutube} size="2x" />
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                <FontAwesomeIcon icon={faTelegram} size="2x" />
              </div>
            </div>

            <div>
              <h6 className="text-lg font-semibold text-[#FFD43B] mb-3">Our Popular Courses</h6>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Java Full Stack Development</li>
                <li>Cloud Computing with AI</li>
                <li>Generative AI Advanced</li>
                <li>Full Stack Testing</li>
                <li>DevOps With AWS</li>
                <li>Generative AI</li>
                <li>Cyber Security</li>
                <li>Data Analytics</li>
                <li>Web Development</li>
                <li>Data Science</li>
              </ul>
            </div>

            <div>
              <h6 className="text-lg font-semibold text-[#FFD43B] mb-3">Contact & Location</h6>
              <div className="relative pb-[56.25%] h-0 overflow-hidden mb-4 rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30449.884309977147!2d78.39164569999998!3d17.44843705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1764251420862!5m2!1sen!2sin"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                Madhapur, Hyderabad Telangana
              </p>
              <p className="text-gray-400 text-sm mb-1">
                <strong>Call:</strong> +91- 79974 86159
              </p>
              <p className="text-gray-400 text-sm">
                <strong>Email:</strong> support@frontlinesedutech.com
              </p>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-gray-700">
            <small className="text-gray-400">
              ©2025 SPARCMINDS EDU-TECH, All rights reserved
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Courses;
