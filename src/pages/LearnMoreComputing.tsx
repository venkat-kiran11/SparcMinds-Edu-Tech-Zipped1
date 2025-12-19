import "bootstrap/dist/css/bootstrap.min.css";
import cloud from "../assets/cloud.png"
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.jpg';


export default function LearnMoreComputing() {
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
      

    
    <div>
      


      {/* HERO using the provided full-width screenshot image to match exactly */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <img src={cloud} alt="Azure Course" className=" w-100 " height={600} style={{ borderRadius: 6, objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      {/* CONTENT: replicate column widths and heading styles seen in the screenshot */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="fw-bold" style={{ fontSize: 20 }}>CLOUD COMPUTING TRAINING PROGRAM &amp; INDUSTRY CERTIFICATION</h2>
            <p style={{ lineHeight: 1.6 }}>



              Transform into an industry-ready Cloud Computing professional by mastering end-to-end cloud infrastructure and application deployment across modern cloud platforms.
              This hands-on program builds strong expertise in cloud architecture, resource provisioning, scalability, security, and performance monitoring.
              You will gain practical experience with core cloud services, networking, virtual machines, storage solutions, application hosting, and infrastructure automation.
              The course includes instructor-led sessions, real-time cloud projects, hands-on labs, interview preparation, and placement support.
            </p>


            <h5 className="mt-4">Target Audience</h5>
            <ul>
              <li>Final-year graduates from any stream looking to start a career in Cloud Computing</li>
              <li>Freshers eager to enter the Cloud & IT infrastructure domain</li>
              <li>IT professionals planning a transition to Cloud Engineer roles</li>
              <li>Software developers aiming to move into cloud-based application deployment</li>
            </ul>

            <h5 className="mt-4">Course Goals &amp; What You'll Achieve</h5>
            <ul>
              <li> Understand core Cloud Computing concepts, including IaaS, PaaS, and SaaS</li>
              <li> Gain hands-on experience with essential cloud platforms and services</li>
              <li> Design, deploy, and manage scalable cloud infrastructure</li>

            </ul>


            <h5 className="mt-4">Core Cloud Skills You’ll Build</h5>
            <ul>
              <li>Cloud Computing Fundamentals (IaaS, PaaS, SaaS)</li>
              <li>Cloud Infrastructure & Virtualization Concepts</li>
              <li>Deploying and Managing Applications in the Cloud</li>
            </ul>


            <h5 className="mt-4">Syllabus Breakdown</h5>
            <p>Below is a day-wise professional syllabus designed to take learners from cloud fundamentals to real-world projects.
              Each day includes hands-on labs, practical assignments, and interview-focused topics.</p>

            <div className="row mt-3">
              <div className="col-md-6">
                <div className="accordion" id="syllabusLeft">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="day1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDay1">Day 1 - Day 22</button>
                    </h2>
                    <div id="collapseDay1" className="accordion-collapse collapse" data-bs-parent="#syllabusLeft">
                      <div className="accordion-body">
                        <ol>
                          <li><strong>Day 1:</strong> Introduction to Cloud Computing</li>
                          <li><strong>Day 2:</strong> Cloud Service Models — IaaS, PaaS, SaaS</li>
                          <li><strong>Day 3:</strong> Cloud Deployment Models</li>
                          <li><strong>Day 4:</strong> Virtualization Basics</li>
                          <li><strong>Day 5:</strong> Cloud Architecture Overview</li>
                          <li><strong>Day 6:</strong> Networking Basics</li>
                          <li><strong>Day 7:</strong> IP Addressing & DNS</li>
                          <li><strong>Day 8:</strong> Linux Introduction</li>
                          <li><strong>Day 9:</strong> Linux File System</li>
                          <li><strong>Day 10:</strong> Linux Commands</li>
                          <li><strong>Day 11:</strong> Linux Users & Permissions</li>
                          <li><strong>Day 12:</strong> Shell Scripting Basics</li>
                          <li><strong>Day 13:</strong> Version Control Introduction</li>
                          <li><strong>Day 14:</strong> Git Basics</li>
                          <li><strong>Day 15:</strong> GitHub Workflow</li>
                          <li><strong>Day 16:</strong> Cloud Providers Overview</li>
                          <li><strong>Day 17:</strong> AWS Account Setup</li>
                          <li><strong>Day 18:</strong> AWS Global Infrastructure</li>
                          <li><strong>Day 19:</strong> IAM Users & Roles</li>
                          <li><strong>Day 20:</strong> IAM Policies</li>
                          <li><strong>Day 21:</strong> EC2 Introduction</li>
                          <li><strong>Day 22:</strong> EC2 Instance Types</li>

                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="day15">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDay15">Day 23 - Day 45</button>
                    </h2>
                    <div id="collapseDay15" className="accordion-collapse collapse" data-bs-parent="#syllabusLeft">
                      <div className="accordion-body">
                        <ol start={23}>
                          <li><strong>Day 23:</strong> AMI & Key Pairs</li>
                          <li><strong>Day 24:</strong> Security Groups</li>
                          <li><strong>Day 25:</strong> Elastic IPs</li>
                          <li><strong>Day 26:</strong> EBS Volumes</li>
                          <li><strong>Day 27:</strong> Snapshots & Backup</li>
                          <li><strong>Day 28:</strong> Auto Scaling</li>
                          <li><strong>Day 29:</strong> Load Balancer</li>
                          <li><strong>Day 30:</strong> EC2 Hands-on Lab</li>
                          <li><strong>Day 31:</strong> S3 Introduction</li>
                          <li><strong>Day 32:</strong> Buckets & Objects</li>
                          <li><strong>Day 33:</strong> S3 Versioning & Lifecycle</li>
                          <li><strong>Day 34:</strong> S3 Security & Policies</li>
                          <li><strong>Day 35:</strong> Static Website Hosting</li>
                          <li><strong>Day 36:</strong> CloudFront CDN</li>
                          <li><strong>Day 37:</strong> RDS Introduction</li>
                          <li><strong>Day 38:</strong> RDS Engines</li>
                          <li><strong>Day 39:</strong> Backup & Recovery</li>
                          <li><strong>Day 40:</strong> DynamoDB Basics</li>
                          <li><strong>Day 41:</strong> NoSQL Concepts</li>
                          <li><strong>Day 42:</strong> VPC Introduction</li>
                          <li><strong>Day 43:</strong> Subnets & Route Tables</li>
                          <li><strong>Day 44:</strong> Internet & NAT Gateways</li>
                          <li><strong>Day 45:</strong> VPC Peering</li>
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
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDay29">Day 46 - Day 68</button>
                    </h2>
                    <div id="collapseDay29" className="accordion-collapse collapse" data-bs-parent="#syllabusRight">
                      <div className="accordion-body">
                        <ol start={46}>
                          <li><strong>Day 46:</strong> Cloud Monitoring Overview</li>
                          <li><strong>Day 47:</strong> CloudWatch Metrics</li>
                          <li><strong>Day 48:</strong> CloudWatch Logs</li>
                          <li><strong>Day 49:</strong> CloudTrail</li>
                          <li><strong>Day 50:</strong> AWS Config</li>
                          <li><strong>Day 51:</strong> Serverless Computing</li>
                          <li><strong>Day 52:</strong> AWS Lambda</li>
                          <li><strong>Day 53:</strong> API Gateway</li>
                          <li><strong>Day 54:</strong> Step Functions</li>
                          <li><strong>Day 55:</strong> EventBridge</li>
                          <li><strong>Day 56:</strong> Container Basics</li>
                          <li><strong>Day 57:</strong> Docker Introduction</li>
                          <li><strong>Day 58:</strong> Docker Images & Containers</li>
                          <li><strong>Day 59:</strong> Docker Compose</li>
                          <li><strong>Day 60:</strong> ECR & ECS</li>
                          <li><strong>Day 61:</strong> Kubernetes Introduction</li>
                          <li><strong>Day 62:</strong> Pods & Services</li>
                          <li><strong>Day 63:</strong> Deployments & Scaling</li>
                          <li><strong>Day 64:</strong> CI/CD Concepts</li>
                          <li><strong>Day 65:</strong> Jenkins Introduction</li>
                          <li><strong>Day 66:</strong> Jenkins Pipelines</li>
                          <li><strong>Day 67:</strong> CI/CD with AWS</li>
                          <li><strong>Day 68:</strong> Infrastructure as Code</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="day43">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDay43">Day 69 - Day 90</button>
                    </h2>
                    <div id="collapseDay43" className="accordion-collapse collapse" data-bs-parent="#syllabusRight">
                      <div className="accordion-body">
                        <ol start={69}>
                          <li><strong>Day 69:</strong> Terraform Basics</li>
                          <li><strong>Day 70:</strong> Cloud Security Overview</li>
                          <li><strong>Day 71:</strong> AWS Shared Responsibility Model</li>
                          <li><strong>Day 72:</strong> Encryption & KMS</li>
                          <li><strong>Day 73:</strong> Security Best Practices</li>
                          <li><strong>Day 74:</strong> Cost Management Tools</li>
                          <li><strong>Day 75:</strong> AWS Billing & Pricing</li>
                          <li><strong>Day 76:</strong> High Availability Design</li>
                          <li><strong>Day 77:</strong> Disaster Recovery</li>
                          <li><strong>Day 78:</strong> Performance Optimization</li>
                          <li><strong>Day 79:</strong> Cloud Migration Strategies</li>
                          <li><strong>Day 80:</strong> Hybrid Cloud Concepts</li>
                          <li><strong>Day 81:</strong> Cloud Project Planning</li>
                          <li><strong>Day 82:</strong> Architecture Design</li>
                          <li><strong>Day 83:</strong> Resource Provisioning</li>
                          <li><strong>Day 84:</strong> Application Deployment</li>
                          <li><strong>Day 85:</strong> Monitoring & Logging</li>
                          <li><strong>Day 86:</strong> Security Hardening</li>
                          <li><strong>Day 87:</strong> Cost Optimization</li>
                          <li><strong>Day 88:</strong> Final Project Testing</li>
                          <li><strong>Day 89:</strong> Documentation & Review</li>
                          <li><strong>Day 90:</strong> Interview Preparation & Wrap-up</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>

           
          </div>

          <div className="col-lg-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h6 className="card-title fw-bold">Course Highlights</h6>
                <ul className="mb-3">
                  <li>Live instructor-led training</li>
                  <li>Real-time projects &amp; placement support</li>
                  <li>Flexible batch options</li>
                </ul>
                <a href="#contact" className="btn btn-warning w-100">Enroll Now</a>
              </div>
            </div>

            <div className="card shadow-sm">
              <div className="card-body">
                <h6 className="mb-2">Course Duration</h6>
                <p>Length: 10 to 12 Weeks</p>
                <p>Format: Live interactive online classes with recordings</p>
              </div>
            </div>
          </div>
        </div>

        

      </div>

      {/* CONTACT CTA: large rounded green block like screenshot */}
      <div className="container py-5">
        <div
          style={{
            background: "#fff",     // BLACK BACKGROUND
            color: "black",
            borderRadius: 28,
            padding: "3.5rem 1.5rem",
            marginTop: "2rem",
            textAlign: "center",
            border: "2px solid black",

          }}
          className="text-center mt-5"
        >
          <h2 style={{ fontWeight: 700 }}>Contact</h2>
          <p style={{ marginTop: 6 }}>For More Info About SKILLUP.SPARCMINDS</p>
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