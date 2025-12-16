import "bootstrap/dist/css/bootstrap.min.css";
import mainDevops from "../assets/aws.webp"
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.jpg';


export default function LearnMore() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* NAVBAR - SPARCMINDS STYLE */}
      <nav className="bg-black py-4 shadow-lg sticky top-0 z-50" style={{padding:'16px 0'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="Sparcminds logo"
                className="h-10 w-10 rounded-lg"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-[17px] tracking-wider">
                  Skillup.SPARCMINDS
                </span>
                <span className="text-white text-[10px] opacity-80">
                  
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white font-semibold">
              <button onClick={() => navigate('/')} className="hover:text-[#f9b817] transition">
                Home
              </button>
              <button onClick={() => navigate('/courses')} className="hover:text-[#f9b817] transition">
                Courses
              </button>
              <button onClick={() => navigate('/courses')} className="bg-[#f9b817] text-black px-4 py-2 rounded-lg hover:bg-[#e0a615] transition">
                Back to Courses
              </button>
            </div>
          </div>
        </div>
      </nav>
      

      {/* HERO SECTION with Image */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={mainDevops} alt="DevOps with AWS Course" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT COLUMN - Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Microsoft Azure DevOps Training Program
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-semibold">
                with Real-Time Projects & Industry Certification
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Transform into an industry-ready DevOps professional by mastering end-to-end software delivery using the Azure DevOps ecosystem.
                This hands-on course empowers you to build scalable CI/CD workflows, manage code with GitHub integrations, provision infrastructure
                using ARM & Bicep, and deploy modern applications with full automation. Includes interactive training, mentor-led projects, and placement support.
              </p>

              {/* Target Audience */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Target Audience</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">✓</span>
                    <span>Final-year graduates from any stream looking to enter the tech industry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">✓</span>
                    <span>IT professionals planning a career shift to DevOps roles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">✓</span>
                    <span>Freshers keen on breaking into Cloud & DevOps domains</span>
                  </li>
                </ul>
              </div>

              {/* Course Goals */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg mb-6 border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Course Goals & What You'll Achieve</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-3">•</span>
                    <span>Explore the Azure DevOps platform and its impact on Agile workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-3">•</span>
                    <span>Architect robust CI/CD workflows using Azure Pipelines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-3">•</span>
                    <span>Automate infrastructure with ARM Templates & Bicep</span>
                  </li>
                </ul>
              </div>

              {/* Core Skills */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Core Skills You'll Build</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">★</span>
                    <span>Azure DevOps (Repos, Pipelines, Boards, Artifacts)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">★</span>
                    <span>YAML pipelines, GitHub Actions, ARM & Bicep</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">★</span>
                    <span>Docker, Kubernetes (AKS) and monitoring with Azure Monitor</span>
                  </li>
                </ul>
              </div>

              {/* Syllabus */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Syllabus Breakdown</h3>
                <p className="text-gray-700 mb-6">
                  Below is a day-wise professional syllabus designed to take a learner from fundamentals to real-world DevOps projects. 
                  Each day includes hands-on tasks and interview-focused topics.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Accordion */}
                  <div className="space-y-3">
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold">
                          <span>Day 1 - Day 14: Fundamentals</span>
                          <span className="text-xl group-open:rotate-180 transition">►</span>
                        </summary>
                        <div className="p-4 text-sm text-gray-700 bg-gray-50">
                          <ol className="space-y-1 list-inside">
                            <li><strong>Day 1:</strong> What is DevOps? Why DevOps</li>
                            <li><strong>Day 2:</strong> What is SDLC — Phases of SDLC, How DevOps fits</li>
                            <li><strong>Day 3:</strong> Absolute prerequisites for learning DevOps</li>
                            <li><strong>Day 4:</strong> Create VMs — AWS & Azure; Intro to API testing</li>
                            <li><strong>Day 5:</strong> Login to VM and install essential tools</li>
                            <li><strong>Day 6:</strong> Linux basics — Linux vs Windows, Linux architecture</li>
                            <li><strong>Day 7:</strong> Shell scripting for DevOps — Part 1</li>
                            <li><strong>Day 8:</strong> Shell scripting for DevOps — Part 2</li>
                            <li><strong>Day 9:</strong> Shell scripting interview questions</li>
                            <li><strong>Day 10:</strong> Live AWS project using shell scripting</li>
                            <li><strong>Day 11:</strong> Real-time shell scripting project</li>
                            <li><strong>Day 12:</strong> Networking fundamentals</li>
                            <li><strong>Day 13:</strong> Git & GitHub — beginner's guide</li>
                            <li><strong>Day 14:</strong> Best branching strategy</li>
                          </ol>
                        </div>
                      </details>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer p-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold">
                          <span>Day 15 - Day 28: CI/CD & IaC</span>
                          <span className="text-xl group-open:rotate-180 transition">►</span>
                        </summary>
                        <div className="p-4 text-sm text-gray-700 bg-gray-50">
                          <ol className="space-y-1 list-inside" start={15}>
                            <li><strong>Day 15:</strong> Git commands, interview Q&A, Rebase vs Merge</li>
                            <li><strong>Day 16:</strong> Deploy your first application on AWS</li>
                            <li><strong>Day 17:</strong> Top 15 AWS services used by DevOps engineers</li>
                            <li><strong>Day 18:</strong> Configuration management using Ansible</li>
                            <li><strong>Day 19:</strong> Ansible beginner-level hands-on project</li>
                            <li><strong>Day 20:</strong> Infrastructure as Code using Terraform</li>
                            <li><strong>Day 21:</strong> Terraform crash course — hands-on</li>
                            <li><strong>Day 22:</strong> What is CI/CD? Detailed explanation</li>
                            <li><strong>Day 23:</strong> Jenkins — zero to hero</li>
                            <li><strong>Day 24:</strong> GitHub Actions in 20 mins + 3 real projects</li>
                            <li><strong>Day 25:</strong> GitHub Actions — self-hosted runners on AWS EC2</li>
                            <li><strong>Day 26:</strong> Most asked CI/CD interview questions</li>
                            <li><strong>Day 27:</strong> Project management tools for DevOps</li>
                            <li><strong>Day 28:</strong> JIRA workflow in real-time for DevOps projects</li>
                          </ol>
                        </div>
                      </details>
                    </div>
                  </div>

                  {/* Right Accordion */}
                  <div className="space-y-3">
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer p-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold">
                          <span>Day 29 - Day 44: Containers & K8s</span>
                          <span className="text-xl group-open:rotate-180 transition">►</span>
                        </summary>
                        <div className="p-4 text-sm text-gray-700 bg-gray-50">
                          <ol className="space-y-1 list-inside" start={29}>
                            <li><strong>Day 29:</strong> Introduction to containers</li>
                            <li><strong>Day 30:</strong> Docker fundamentals</li>
                            <li><strong>Day 31:</strong> Containerize a Django application</li>
                            <li><strong>Day 32:</strong> Docker multi-stage build</li>
                            <li><strong>Day 33:</strong> Docker volumes & bind mounts</li>
                            <li><strong>Day 34:</strong> Docker networking</li>
                            <li><strong>Day 35:</strong> Popular Docker interview Q&A</li>
                            <li><strong>Day 36:</strong> Docker Compose in one hour</li>
                            <li><strong>Day 37:</strong> Introduction to Kubernetes</li>
                            <li><strong>Day 38:</strong> Kubernetes architecture explained</li>
                            <li><strong>Day 39:</strong> How K8s clusters are managed in real time</li>
                            <li><strong>Day 40:</strong> Deploy your first pod in K8s</li>
                            <li><strong>Day 41:</strong> Kubernetes deployment</li>
                            <li><strong>Day 42:</strong> Kubernetes service in one video</li>
                          </ol>
                        </div>
                      </details>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer p-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white font-semibold">
                          <span>Day 43 - Day 54: Advanced & Projects</span>
                          <span className="text-xl group-open:rotate-180 transition">►</span>
                        </summary>
                        <div className="p-4 text-sm text-gray-700 bg-gray-50">
                          <ol className="space-y-1 list-inside" start={43}>
                            <li><strong>Day 43:</strong> Advanced topics</li>
                            <li><strong>Day 44:</strong> Beginners level Kubernetes interview questions</li>
                            <li><strong>Day 45:</strong> Kubernetes services deep dive</li>
                            <li><strong>Day 46:</strong> Kubernetes Ingress deep dive</li>
                            <li><strong>Day 47:</strong> Kubernetes RBAC deep dive</li>
                            <li><strong>Day 48:</strong> Kubernetes custom resources deep dive</li>
                            <li><strong>Day 49:</strong> Kubernetes ConfigMaps & Secrets</li>
                            <li><strong>Day 50:</strong> Kubernetes monitoring with Prometheus & Grafana</li>
                            <li><strong>Day 51:</strong> Deploy app & Apache HTTPD on AWS</li>
                            <li><strong>Day 52:</strong> OSI Model (networking deep-dive)</li>
                            <li><strong>Day 53:</strong> The ultimate real-time CI/CD pipeline</li>
                            <li><strong>Day 54:</strong> Next steps & certification guidance</li>
                          </ol>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>

                
              </div>

              {/* Internship */}
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg border-l-4 border-teal-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Internship & Capstone Experience</h3>
                <p className="text-gray-700">
                  Participate in a 4-week guided internship focused on Azure DevOps best practices. Internship certificate included to boost employability.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN - Sidebar */}
            <div className="lg:col-span-1">
              {/* Course Highlights Card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-6 shadow-lg mb-6">
                <h3 className="text-xl font-bold mb-4">Course Highlights</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-3 text-lg">▪</span>
                    <span>Live instructor-led training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-3 text-lg">▪</span>
                    <span>Real-time projects & placement support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-3 text-lg">▪</span>
                    <span>Flexible batch options</span>
                  </li>
                </ul>
                <button className="w-full bg-[#f9b817] text-black py-3 rounded-lg font-bold hover:bg-[#e0a615] transition">
                  Enroll Now
                </button>
              </div>

              {/* Duration Card */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md mb-6 hover:shadow-lg transition">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Course Duration</h4>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900">Length</p>
                    <p>10 to 12 Weeks</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Format</p>
                    <p>Live interactive online classes with recordings</p>
                  </div>
                </div>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition">
                  <h5 className="font-bold text-gray-900 mb-2">Student Support</h5>
                  <p className="text-sm text-gray-600 mb-3">Academic Assistance & Course Help Desk</p>
                  <button className="text-[#f9b817] font-semibold text-sm hover:underline">
                    Contact Now →
                  </button>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition">
                  <h5 className="font-bold text-gray-900 mb-2">Free Consultation</h5>
                  <p className="text-sm text-gray-600 mb-3">Schedule a free counselling call</p>
                  <button className="text-[#f9b817] font-semibold text-sm hover:underline">
                    Contact Now →
                  </button>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition">
                  <h5 className="font-bold text-gray-900 mb-2">Enroll with Us</h5>
                  <p className="text-sm text-gray-600 mb-3">Join our training programs now</p>
                  <button className="text-[#f9b817] font-semibold text-sm hover:underline">
                    Contact Now →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT CTA SECTION */}
      <div className="bg-gradient-to-r from-[#f9b817] to-[#e0a615] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              For More Information About SKILLUP.SPARCMINDS DevOps Training
            </p>
            <a 
              href="tel:+917997486159" 
              className="inline-block bg-gradient-to-r from-[#f9b817] to-[#e0a615] text-black font-bold py-4 px-8 rounded-lg hover:shadow-lg transition text-lg"
            >
              📞 +91 7997486159
            </a>
            <p className="text-gray-500 mt-6 text-sm">Available Monday to Friday, 9:00 AM - 6:00 PM IST</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#0d1326] text-[#cfd3e0] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={Logo} alt="Logo" className="w-10 h-10 rounded-lg" />
                <h5 className="text-white font-bold">SKILLUP.SPARCMINDS</h5>
              </div>
              <p className="text-sm text-gray-400">Professional skill development platform for industry-ready professionals.</p>
            </div>

            {/* Platform */}
            <div>
              <h6 className="text-white font-bold mb-4">Platform</h6>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-[#f9b817] cursor-pointer">Browse Skills</li>
                <li className="hover:text-[#f9b817] cursor-pointer">Courses</li>
                <li className="hover:text-[#f9b817] cursor-pointer">Blog</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h6 className="text-white font-bold mb-4">Support</h6>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-[#f9b817] cursor-pointer">Help Center</li>
                <li className="hover:text-[#f9b817] cursor-pointer">Contact Us</li>
                <li className="hover:text-[#f9b817] cursor-pointer">FAQs</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h6 className="text-white font-bold mb-4">Legal</h6>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-[#f9b817] cursor-pointer">Privacy Policy</li>
                <li className="hover:text-[#f9b817] cursor-pointer">Terms of Service</li>
                <li className="hover:text-[#f9b817] cursor-pointer">Cookie Policy</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-sm text-gray-400">
              © 2024 SKILLUP.SPARCMINDS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}