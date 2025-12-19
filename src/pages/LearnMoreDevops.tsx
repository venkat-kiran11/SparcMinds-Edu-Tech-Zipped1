import "bootstrap/dist/css/bootstrap.min.css";
import devops from "../assets/devops.png"
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.jpg';


export default function LearnMoreDevops() {
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
    
    <div>
      

      {/* HERO IMAGE */}
      <div className="container mt-4">
        <img
          src={devops}
          alt="DevOps with AWS Training"
          className=" w-100"
          height={600}
          style={{ borderRadius: 6 }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="fw-bold" style={{ fontSize: 20 }}>
              DEVOPS WITH AWS TRAINING PROGRAM WITH REAL-TIME PROJECTS & INDUSTRY
              CERTIFICATION
            </h2>

            <p style={{ lineHeight: 1.6 }}>
              Become a job-ready DevOps Engineer by learning industry-standard
              DevOps practices and AWS cloud services. This hands-on program
              focuses on automation, CI/CD pipelines, infrastructure management,
              and scalable application deployment on AWS. You will gain
              practical experience with Linux, Git, Docker, Kubernetes,
              Jenkins, Terraform, and core AWS services through real-time
              projects, labs, and guided exercises. The course includes live
              instructor-led training, interview preparation, and placement
              support.
            </p>

            <h5 className="mt-4">Target Audience</h5>
            <ul>
              <li>Graduates and freshers starting a DevOps career</li>
              <li>System Administrators and IT professionals</li>
              <li>Developers moving toward DevOps roles</li>
              <li>Cloud professionals specializing in AWS DevOps</li>
            </ul>

            <h5 className="mt-4">Course Goals & Outcomes</h5>
            <ul>
              <li>Understand DevOps culture, tools, and workflows</li>
              <li>Build CI/CD pipelines for real applications</li>
              <li>Deploy, monitor, and scale workloads on AWS</li>
            </ul>

            <h5 className="mt-4">Core DevOps Skills You’ll Build</h5>
            <ul>
              <li>Linux administration & shell scripting</li>
              <li>Git & GitHub for source control</li>
              <li>CI/CD using Jenkins & GitHub Actions</li>
              <li>Docker & Kubernetes container orchestration</li>
              <li>AWS DevOps services (EC2, S3, IAM, VPC, CloudWatch)</li>
              <li>Infrastructure as Code using Terraform</li>
            </ul>


            <h5 className="mt-4">Syllabus Breakdown</h5>
            <p>
              This structured DevOps with AWS syllabus is designed to take learners from DevOps fundamentals
              to real-time AWS deployment and automation projects.
              Each phase includes hands-on labs, real-world scenarios, and interview-oriented practice.
            </p>

            <div className="row mt-3">
              <div className="col-md-6">
                <div className="accordion" id="syllabusLeft">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="day1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDay1">Day 1 - Day 14</button>
                    </h2>
                    <div id="collapseDay1" className="accordion-collapse collapse" data-bs-parent="#syllabusLeft">
                      <div className="accordion-body">
                        <ol>
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
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="day15">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDay15">Day 15 - Day 28</button>
                    </h2>
                    <div id="collapseDay15" className="accordion-collapse collapse" data-bs-parent="#syllabusLeft">
                      <div className="accordion-body">
                        <ol start={15}>
                          <li><strong>Day 15:</strong> Git commands, interview Q&A, Rebase vs Merge (demo)</li>
                          <li><strong>Day 16:</strong> Deploy your first application on AWS</li>
                          <li><strong>Day 17:</strong> Top 15 AWS services used by DevOps engineers</li>
                          <li><strong>Day 18:</strong> Configuration management using Ansible</li>
                          <li><strong>Day 19:</strong> Ansible beginner-level hands-on project</li>
                          <li><strong>Day 20:</strong> Infrastructure as Code using Terraform — concepts</li>
                          <li><strong>Day 21:</strong> Terraform crash course — hands-on</li>
                          <li><strong>Day 22:</strong> What is CI/CD? Detailed explanation</li>
                          <li><strong>Day 23:</strong> Jenkins — zero to hero (setup & pipelines)</li>
                          <li><strong>Day 24:</strong> GitHub Actions in 20 mins — comparison with Jenkins + 3 real projects</li>
                          <li><strong>Day 25:</strong> GitHub Actions — self-hosted runners on AWS EC2</li>
                          <li><strong>Day 26:</strong> Most asked CI/CD interview questions</li>
                          <li><strong>Day 27:</strong> Project management tools for DevOps</li>
                          <li><strong>Day 28:</strong> JIRA workflow in real-time for DevOps projects</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="accordion" id="syllabusRight">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="day29">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDay29">Day 29 - Day 44</button>
                    </h2>
                    <div id="collapseDay29" className="accordion-collapse collapse" data-bs-parent="#syllabusRight">
                      <div className="accordion-body">
                        <ol start={29}>
                          <li><strong>Day 29:</strong> Introduction to containers</li>
                          <li><strong>Day 30:</strong> Docker fundamentals — installation & basic usage</li>
                          <li><strong>Day 31:</strong> Containerize a Django application</li>
                          <li><strong>Day 32:</strong> Docker multi-stage build (reduce image size)</li>
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
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="day43">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDay43">Day 43 - Day 54</button>
                    </h2>
                    <div id="collapseDay43" className="accordion-collapse collapse" data-bs-parent="#syllabusRight">
                      <div className="accordion-body">
                        <ol start={43}>
                          <li><strong>Day 43:</strong> (Reserved / advanced topics)</li>
                          <li><strong>Day 44:</strong> Beginners level Kubernetes interview questions</li>
                          <li><strong>Day 45:</strong> Kubernetes services deep dive</li>
                          <li><strong>Day 46:</strong> Kubernetes Ingress deep dive</li>
                          <li><strong>Day 47:</strong> Kubernetes RBAC deep dive</li>
                          <li><strong>Day 48:</strong> Kubernetes custom resources deep dive</li>
                          <li><strong>Day 49:</strong> Kubernetes ConfigMaps & Secrets</li>
                          <li><strong>Day 50:</strong> Kubernetes monitoring using Prometheus & Grafana</li>
                          <li><strong>Day 51:</strong> Deploy app & Apache HTTPD on AWS</li>
                          <li><strong>Day 52:</strong> OSI Model (networking deep-dive)</li>
                          <li><strong>Day 53:</strong> The ultimate real-time CI/CD pipeline (end-to-end project)</li>
                          <li><strong>Day 54:</strong> The end of free DevOps course — next steps & certification guidance</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>


            
          </div>

          {/* SIDEBAR */}
          <div className="col-lg-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h6 className="fw-bold">Course Highlights</h6>
                <ul>
                  <li>Live DevOps & AWS training</li>
                  <li>Hands-on real-time projects</li>
                  <li>Mock interviews & placement support</li>
                </ul>
                <a href="#contact" className="btn btn-warning w-100">
                  Enroll Now
                </a>
              </div>
            </div>

            <div className="card shadow-sm">
              <div className="card-body">
                <h6>Course Duration</h6>
                <p>Length: 10 to 12 Weeks</p>
                <p>Format: Live interactive online classes with recordings</p>
              </div>
            </div>
          </div>
        </div>

        {/* INFO CARDS */}
        
      </div>

      {/* CONTACT */}
      <div className="container mt-5 py-5">
        <div
          className="text-center"
          style={{
            borderRadius: 28,
            padding: "3.5rem 1.5rem",
            border: "2px solid black",
          }}
        >
          <h2 style={{ fontWeight: 700 }}>Contact</h2>
          <p>For more information about SKILLUP.SPARCMINDS</p>
          <a className="btn btn-warning btn-sm" href="tel:+917997486159">
            +91 7997486159
          </a>
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