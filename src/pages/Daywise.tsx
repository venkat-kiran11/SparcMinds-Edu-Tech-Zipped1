import { useState, useEffect } from 'react';
import { Search, Play, Check, ChevronRight, Menu, ChevronDown, Lock } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

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
    <aside className="w-80 bg-gradient-to-b from-[#0a1929] to-[#0d2438] flex flex-col border-r border-gray-700">
      <div className="p-6 border-b border-gray-700 flex-shrink-0 bg-gradient-to-br from-[#0a1929] to-[#0d2438]">
        <h2 className="text-white font-bold text-xl mb-1 tracking-tight">SparcMinds</h2>
        <p className="text-gray-400 text-xs mb-4 font-medium">DevOps Mastery Program</p>
        <p className="text-gray-200 text-sm font-semibold mb-2">{completedDays} of {totalDays} Complete ({progressPercentage}%)</p>
        <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden shadow-inner border border-gray-700">
          <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <p className="text-gray-500 text-xs mt-3 leading-relaxed">Progress updates instantly.</p>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col">
        <div className="border-b border-gray-700 flex-shrink-0">
          <button
            onClick={() => setShowDays(!showDays)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
          >
            <span className="text-gray-200 font-semibold text-sm">Day-wise Curriculum</span>
            <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${showDays ? 'rotate-0' : '-rotate-90'}`} />
          </button>
        </div>

        {showDays && (
          <div className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-900/50">
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
                    item.day === selectedDay.day ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                  }`} />
                  <div className="min-w-0">
                    <div className="font-semibold">Day {item.day}</div>
                    <div className={`line-clamp-1 truncate text-xs ${
                      item.day === selectedDay.day ? 'text-blue-100' : 'text-gray-400'
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
  );
}

interface CourseContentProps {
  selectedDay: { day: number; title: string };
  onMarkComplete: (day: number) => Promise<void>;
  completedDays: Set<number>;
}

function CourseContent({ selectedDay, onMarkComplete, completedDays }: CourseContentProps) {
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

        <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center mb-6 relative group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-lg"></div>
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors">
              <Play size={32} className="text-gray-900 ml-1" fill="currentColor" />
            </div>
            <p className="text-white text-lg font-medium">Video for Day {selectedDay.day}</p>
            <p className="text-gray-300 text-sm mt-1">(Click to play)</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          In this lesson you will understand <strong>{selectedDay.title}</strong>. Focus on the core concepts, note
          down commands and diagrams, and try the given exercises.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Topics</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <ChevronRight size={20} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>Concept overview and real-time use cases</span>
            </li>
            <li className="flex items-start">
              <ChevronRight size={20} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>Important commands / tools for this day</span>
            </li>
            <li className="flex items-start">
              <ChevronRight size={20} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>Common mistakes and interview points</span>
            </li>
            <li className="flex items-start">
              <ChevronRight size={20} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>Hands-on mini task to practice</span>
            </li>
          </ul>
        </div>

        <div className="border-2 border-emerald-200 rounded-lg p-6 bg-emerald-50">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Lesson Progress</h3>
          <p className="text-gray-700 mb-4">
            Mark this day as completed to track your progress in the DevOps Mastery Program.
          </p>
          <button
            onClick={handleMarkComplete}
            disabled={isLoading}
            className={`px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 ${
              isCompleted
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
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
  const [selectedDay, setSelectedDay] = useState(devopsDays[0]);
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProgress();
  }, []);

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
    try {
      const isCompleted = completedDays.has(day);

      if (isCompleted) {
        const { error } = await supabase
          .from('course_progress')
          .delete()
          .eq('day', day);

        if (error) throw error;
        const newCompleted = new Set(completedDays);
        newCompleted.delete(day);
        setCompletedDays(newCompleted);
      } else {
        const { error } = await supabase
          .from('course_progress')
          .upsert({ day, completed: true }, { onConflict: 'day' });

        if (error) throw error;
        const newCompleted = new Set(completedDays);
        newCompleted.add(day);
        setCompletedDays(newCompleted);
      }
    } catch (error) {
      console.error('Error updating progress:', error);
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
      <header className="bg-[#0a1929] text-white h-14 flex items-center px-6 flex-shrink-0">
        <div className="flex items-center gap-4 flex-1">
          <button className="text-gray-400 hover:text-white transition-colors lg:hidden">
            <Menu size={24} />
          </button>
          <span className="text-xl font-bold">SparcMinds</span>
        </div>
        <div className="flex-1 max-w-2xl mx-8 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-full bg-white text-gray-900 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <select className="bg-transparent border border-gray-600 rounded px-3 py-1 text-sm focus:outline-none focus:border-cyan-400">
            <option value="EN">EN</option>
            <option value="HI">HI</option>
          </select>
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center font-semibold text-sm">
            K
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar days={devopsDays} selectedDay={selectedDay} onSelect={setSelectedDay} completedDays={completedDays.size} />
        <CourseContent selectedDay={selectedDay} onMarkComplete={handleMarkComplete} completedDays={completedDays} />
      </div>
    </div>
  );
}

export default Daywise;
