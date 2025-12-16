import { useState, useEffect } from 'react';
import { Search, Play, Check, ChevronRight, Menu, ChevronDown, Lock, X } from 'lucide-react';
import Logo from '../assets/logo.jpg';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

const supabase = createClient(
  "https://dummy-project.supabase.co", // dummy URL
  "public-anon-key-12345" // dummy key
);

const devopsDays = [
  { day: 1, title: "What is DevOps? Why DevOps" },
  { day: 2, title: "What is SDLC, Phases of SDLC, How DevOps fits" },
  { day: 3, title: "Absolute prerequisite for learning DevOps" },
  { day: 4, title: "Create VM in AWS & Azure, What is API testing" },
  { day: 5, title: "Login to a VM & install tools" },
  { day: 6, title: "Basics of Linux, Linux vs Windows, Linux Architecture" },
  { day: 7, title: "Shell scripting for DevOps Part-1" },
  { day: 8, title: "Shell scripting for DevOps Part-2" },
  { day: 9, title: "Shell scripting interview questions" },
  { day: 10, title: "Live AWS project using shell scripting" },
  { day: 11, title: "Real-time shell scripting project" },
  { day: 12, title: "Networking fundamentals" },
  { day: 13, title: "Git & GitHub beginner's guide" },
  { day: 14, title: "Best branching strategy" },
  { day: 15, title: "Git commands, Git interview Q&A, Rebase vs Merge demo" },
  { day: 16, title: "Deploy your first application on AWS" },
  { day: 17, title: "Top 15 AWS services used by DevOps engineers" },
  { day: 18, title: "Configuration management using Ansible" },
  { day: 19, title: "Ansible beginners level project hands-on" },
  { day: 20, title: "Infrastructure as Code (IaC) using Terraform" },
  { day: 21, title: "Terraform crash course" },
  { day: 22, title: "What is CI/CD? Very detailed explanation" },
  { day: 23, title: "Jenkins zero to hero in one video" },
  { day: 24, title: "GitHub Actions in 20 mins (3 real-time projects)" },
  { day: 25, title: "GitHub Actions (Self-hosted runners on AWS EC2)" },
  { day: 26, title: "Most asked CI/CD interview questions" },
  { day: 27, title: "Project management tools for DevOps" },
  { day: 28, title: "JIRA workflow in real-time for DevOps projects" },
  { day: 29, title: "Introduction to containers" },
  { day: 30, title: "Docker fundamentals" },
  { day: 31, title: "Containerize Django application" },
  { day: 32, title: "Docker multi-stage build (Reduce image size)" },
  { day: 33, title: "Docker volumes & bind mounts" },
  { day: 34, title: "Docker networking" },
  { day: 35, title: "Popular Docker interview Q&A" },
  { day: 36, title: "Docker Compose in one hour" },
  { day: 37, title: "Introduction to Kubernetes" },
  { day: 38, title: "Kubernetes architecture explained" },
  { day: 39, title: "How K8s clusters are managed in real time" },
  { day: 40, title: "Deploy your first pod in K8s" },
  { day: 41, title: "Kubernetes deployment" },
  { day: 42, title: "Kubernetes service in one video" },
  { day: 44, title: "Beginners level Kubernetes interview questions" },
  { day: 45, title: "Kubernetes services deep dive" },
  { day: 46, title: "Kubernetes ingress deep dive" },
  { day: 47, title: "Kubernetes RBAC deep dive" },
  { day: 48, title: "Kubernetes custom resources deep dive" },
  { day: 49, title: "Kubernetes configmaps & secrets" },
  { day: 50, title: "Kubernetes monitoring using Prometheus & Grafana" },
  { day: 51, title: "Deploy app & Apache HTTPD on AWS" },
  { day: 52, title: "OSI Model" },
  { day: 53, title: "The ultimate real-time CI/CD pipeline" },
  { day: 54, title: "End of free DevOps course" }
];

interface SidebarProps {
  days: { day: number; title: string }[];
  selectedDay: { day: number; title: string };
  onSelect: (day: { day: number; title: string }) => void;
  completedDays: number;
}

const sidebarSections = [
  {
    title: "Course Content",
    items: [
      { label: "Video Lectures", count: 54, locked: false },
      { label: "Reading Materials", count: 42, locked: false },
      { label: "Code Snippets", count: 128, locked: false }
    ]
  },
  {
    title: "Learning Resources",
    items: [
      { label: "Guided Projects", count: 12, locked: true },
      { label: "Coding Exercises", count: 34, locked: true },
      { label: "Mock Interview", count: 8, locked: true }
    ]
  },
  {
    title: "Assessments",
    items: [
      { label: "Quizzes", count: 15, locked: false },
      { label: "Assignments", count: 20, locked: true },
      { label: "Final Project", count: 1, locked: true }
    ]
  },
  {
    title: "Certification",
    items: [
      { label: "Certificate", count: 1, locked: true }
    ]
  }
];

interface CollapsibleSectionProps {
  title: string;
  items: Array<{ label: string; count: number; locked: boolean }>;
}

function CollapsibleSection({ title, items }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(title === "Course Content");

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-800 transition-colors text-left"
      >
        <span className="text-gray-300 font-medium text-sm">{title}</span>
        <ChevronDown size={18} className={`text-gray-500 transition-transform ${isOpen ? 'rotate-0' : '-rotate-90'}`} />
      </button>
      {isOpen && (
        <div className="bg-gray-900">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="px-4 py-3 border-b border-gray-800 hover:bg-gray-800 transition-colors cursor-pointer flex items-center justify-between"
            >
              <div>
                <div className="text-gray-300 text-sm font-medium">{item.label}</div>
                <div className="text-gray-500 text-xs mt-0.5">{item.count} Resources</div>
              </div>
              {item.locked && <Lock size={16} className="text-gray-500" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Sidebar({ days, selectedDay, onSelect, completedDays }: SidebarProps) {
  const [showDays, setShowDays] = useState(true);
  const totalDays = days.length;
  const progressPercentage = Math.round((completedDays / totalDays) * 100);

  return (
    <>
    <aside className="w-80 bg-black flex flex-col border-r border-yellow-600">
      <div className="p-6 border-b border-yellow-600 flex-shrink-0 bg-black">
        <h2 className="text-yellow-400 font-bold text-xl mb-1 tracking-tight">DevOps Mastery Program</h2>
        <p className="text-white text-sm font-semibold mb-2">{completedDays} of {totalDays} Complete ({progressPercentage}%)</p>
          <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden shadow-inner border border-yellow-600">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-full rounded-full transition-all duration-500" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <p className="text-yellow-300 text-xs mt-3 leading-relaxed">Progress updates instantly.</p>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col">
        <div className="border-b border-yellow-600 flex-shrink-0">
          <button
            onClick={() => setShowDays(!showDays)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
          >
            <span className="text-gray-200 font-semibold text-sm">Day-wise Curriculum</span>
            <ChevronDown size={18} className={`text-yellow-300 transition-transform duration-300 ${showDays ? 'rotate-0' : '-rotate-90'}`} />
          </button>
        </div>

        {showDays && (
          <div className="flex-1 overflow-y-auto overflow-x-hidden bg-black/60">
            {days.map((item) => (
              <button
                key={item.day}
                className={`w-full p-3 px-4 text-left hover:bg-gray-700 transition-all duration-200 text-xs border-b border-gray-800 group flex-shrink-0 ${
                  item.day === selectedDay.day ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => onSelect(item)}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Play size={14} className={`transition-all flex-shrink-0 ${
                    item.day === selectedDay.day ? 'text-yellow-400' : 'text-gray-500 group-hover:text-yellow-300'
                  }`} />
                  <div className="min-w-0">
                    <div className="font-semibold">Day {item.day}</div>
                    <div className={`line-clamp-1 truncate text-xs ${
                      item.day === selectedDay.day ? 'text-yellow-200' : 'text-gray-400'
                    }`}>{item.title}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {!showDays && (
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
              {sidebarSections.map((section, idx) => (
                <CollapsibleSection key={idx} title={section.title} items={section.items} />
              ))}
            </div>
        )}
      </div>

    </aside>
    </>
  );
}

interface CourseContentProps {
  selectedDay: { day: number; title: string };
  onMarkComplete: (day: number) => Promise<void>;
  completedDays: Set<number>;
  onOpenVideo?: () => void;
}

function CourseContent({ selectedDay, onMarkComplete, completedDays, onOpenVideo }: CourseContentProps) {
  const [isLoading, setIsLoading] = useState(false);
  const isCompleted = completedDays.has(selectedDay.day);

  const handleMarkComplete = async () => {
    setIsLoading(true);
    await onMarkComplete(selectedDay.day);
    setIsLoading(false);
  };

  return (
    <section className="flex-1 bg-white overflow-y-auto">
      <div className="max-w-4xl mx-auto p-8">
        <header className="mb-6">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
            DevOps · Day {selectedDay.day}
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedDay.title}</h1>
        </header>

        <button onClick={() => onOpenVideo && onOpenVideo()} className="bg-gray-900 rounded-lg aspect-video mb-6 relative group cursor-pointer w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-lg"></div>
          <div className="relative z-10 text-center flex flex-col items-center justify-center h-full p-4">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center mx-auto group-hover:bg-white transition-colors">
              <Play size={36} className="text-gray-900 ml-1" fill="currentColor" />
            </div>
            <p className="text-white text-lg font-medium mt-3">Video for Day {selectedDay.day}</p>
            <p className="text-gray-300 text-sm mt-1">(Click to play)</p>
          </div>
        </button>

        <p className="text-gray-700 leading-relaxed mb-6">
          In this lesson you will understand <strong>{selectedDay.title}</strong>. Focus on the core concepts, note
          down commands and diagrams, and try the given exercises.
        </p>

      

        <div className="border-2 border-yellow-300 rounded-lg p-6 bg-black text-yellow-100">
          <h3 className="text-xl font-semibold text-yellow-300 mb-3">Lesson Progress</h3>
          <p className="text-yellow-200 mb-4">
            Mark this day as completed to track your progress in the DevOps Mastery Program.
          </p>
          <button
            onClick={handleMarkComplete}
            disabled={isLoading}
            className={`px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 ${
              isCompleted
                ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                : 'bg-yellow-400 text-black hover:bg-yellow-500'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <Check size={18} />
            {isLoading ? 'Saving...' : isCompleted ? 'Completed' : 'Mark as Completed'}
          </button>
        </div>
      </div>
    </section>
  );
}

function Daywise() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(devopsDays[0]);
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [completedCount, setCompletedCount] = useState<number>(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    fetchProgress();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSidebarOpen(window.innerWidth >= 1024);
    }
  }, []);

  // keep numeric count in sync for Sidebar rendering
  useEffect(() => {
    setCompletedCount(completedDays.size);
  }, [completedDays]);

  const fetchProgress = async () => {
    try {
      const { data, error } = await supabase
        .from('course_progress')
        .select('day')
        .eq('completed', true);

      if (error) throw error;

      const completed = new Set(data?.map((item) => item.day) || []);
      setCompletedDays(completed);
    } catch (error) {
      console.error('Error fetching progress:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMarkComplete = async (day: number) => {
    // Optimistic UI update: update local state immediately, then persist.
    const isCompleted = completedDays.has(day);
    const newCompleted = new Set(completedDays);
    console.log('handleMarkComplete start - day:', day, 'wasCompleted:', isCompleted, 'currentSize:', completedDays.size);
    if (isCompleted) {
      newCompleted.delete(day);
      setCompletedDays(newCompleted);
      console.log('optimistic remove set size:', newCompleted.size);

      try {
        const { error } = await supabase
          .from('course_progress')
          .delete()
          .eq('day', day);

        if (error) {
          // revert on error
          const revert = new Set(newCompleted);
          revert.add(day);
          setCompletedDays(revert);
          console.error('Error removing progress:', error);
        }
      } catch (err) {
        const revert = new Set(newCompleted);
        revert.add(day);
        setCompletedDays(revert);
        console.error('Error removing progress:', err);
      }
    } else {
      newCompleted.add(day);
      setCompletedDays(newCompleted);
      console.log('optimistic add set size:', newCompleted.size);

      try {
        const { error } = await supabase
          .from('course_progress')
          .upsert({ day, completed: true }, { onConflict: 'day' });

        if (error) {
          // revert on error
          const revert = new Set(newCompleted);
          revert.delete(day);
          setCompletedDays(revert);
          console.error('Error adding progress:', error);
        }
      } catch (err) {
        const revert = new Set(newCompleted);
        revert.delete(day);
        setCompletedDays(revert);
        console.error('Error adding progress:', err);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-600 rounded-full animate-spin mb-4 mx-auto"></div>
          <p className="text-gray-600 font-medium">Loading your progress...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="bg-black py-4 text-white flex items-center px-6 flex-shrink-0 border-b border-yellow-600">
        <div className="flex items-center gap-3 flex-1">
          <button onClick={() => setSidebarOpen(s => !s)} className="text-gray-400 hover:text-white transition-colors lg:hidden">
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Sparcminds logo" className="h-10 w-10 rounded-lg" />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-[17px] tracking-wider">
                Skillup.SPARCMINDS
              </span>
              <span className="text-white text-[10px] opacity-80">
                Building Trust & Careers
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-2xl mx-8 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-300" size={18} />
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-full bg-white text-gray-900 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/')} className="hidden sm:inline-block text-white hover:text-yellow-400 transition font-semibold">
            Home
          </button>
          <button
            onClick={() => navigate('/courses')}
            className="hidden sm:inline-block bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Back to Courses
          </button>
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center font-semibold text-sm text-black">
            U
          </div>
        </div>
      </header>

      <div className="flex flex-1 min-h-0">
        <div className={`${sidebarOpen ? 'block' : 'hidden'} lg:block min-h-0`}> 
          <Sidebar key={completedCount} days={devopsDays} selectedDay={selectedDay} onSelect={(d)=>{ setSelectedDay(d); if (typeof window !== 'undefined' && window.innerWidth < 1024) setSidebarOpen(false); }} completedDays={completedCount} />
        </div>
        <div className="flex-1 min-w-0 min-h-0">
          <CourseContent selectedDay={selectedDay} onMarkComplete={handleMarkComplete} completedDays={completedDays} onOpenVideo={() => setVideoOpen(true)} />
        </div>
      </div>

      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-5xl bg-white rounded-lg overflow-hidden">
            <div className="p-3 flex justify-end">
              <button onClick={() => setVideoOpen(false)} className="text-gray-700 px-2 py-1">Close</button>
            </div>
            <div className="p-4">
              <video
                controls
                playsInline
                // @ts-ignore - iOS attribute
                webkit-playsinline
                className="w-full h-auto max-h-[85vh] bg-black"
              >
                <track kind="captions" />
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Daywise;