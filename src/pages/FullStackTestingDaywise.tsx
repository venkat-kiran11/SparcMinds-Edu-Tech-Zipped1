import { useState, useEffect } from 'react';
import { Search, Play, Check, ChevronRight, Menu, ChevronDown, Lock, X } from 'lucide-react';
import Logo from '../assets/logo.jpg';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

const supabase = createClient(
  "https://dummy-project.supabase.co", // dummy URL
  "public-anon-key-12345" // dummy key
);

const testingDays = [
  { day: 1, title: 'SDLC Models – Waterfall, Agile, V-Model' },
  { day: 2, title: 'STLC Phases – Requirement, Planning, Execution' },
  { day: 3, title: 'QA Roles & Responsibilities' },
  { day: 4, title: 'Types of Testing – Functional & Non-functional' },
  { day: 5, title: 'Black Box Testing Techniques' },
  { day: 6, title: 'White Box Testing Concepts' },
  { day: 7, title: 'Test Case Writing – Real Scenarios' },
  { day: 8, title: 'Test Scenario Creation – Web Apps' },
  { day: 9, title: 'Bug Life Cycle, Severity & Priority' },
  { day: 10, title: 'Bug Reporting in JIRA' },
  { day: 11, title: 'Requirement Traceability Matrix' },
  { day: 12, title: 'Test Plan Document Preparation' },
  { day: 13, title: 'Mobile Testing Basics' },
  { day: 14, title: 'Web Application Testing Checklist' },
  { day: 15, title: 'Manual Testing Project – CRM App' },
  { day: 16, title: 'DBMS Introduction – Tables, Keys' },
  { day: 17, title: 'Basic SQL Queries' },
  { day: 18, title: 'Joins – Inner, Left, Right, Full' },
  { day: 19, title: 'SQL Functions – Aggregate & Scalar' },
  { day: 20, title: 'Subqueries & Nested Queries' },
  { day: 21, title: 'CRUD Operations' },
  { day: 22, title: 'SQL Practical Exercises' },
  { day: 23, title: 'API Concepts – REST, JSON, XML' },
  { day: 24, title: 'Postman Introduction' },
  { day: 25, title: 'GET, POST, PUT, DELETE in Postman' },
  { day: 26, title: 'Postman Assertions' },
  { day: 27, title: 'Chaining Requests in Postman' },
  { day: 28, title: 'Postman Runner Execution' },
  { day: 29, title: 'Newman CLI Automation' },
  { day: 30, title: 'API Testing Project' },
  { day: 31, title: 'Java Basics – Syntax, Variables' },
  { day: 32, title: 'Java OOPs Concepts' },
  { day: 33, title: 'Java Collections Framework' },
  { day: 34, title: 'Exception Handling in Java' },
  { day: 35, title: 'Java File Handling' },
  { day: 36, title: 'Selenium WebDriver Introduction' },
  { day: 37, title: 'Locators – XPath, CSS, ID, Name' },
  { day: 38, title: 'WebDriver Methods' },
  { day: 39, title: 'Waits – Implicit, Explicit, Fluent' },
  { day: 40, title: 'Handling Alerts, Frames, Windows' },
  { day: 41, title: 'Handling WebTables' },
  { day: 42, title: 'Dynamic Elements Handling' },
  { day: 43, title: 'Actions Class – Mouse, Keyboard' },
  { day: 44, title: 'Select Class, File Upload' },
  { day: 45, title: 'TestNG Introduction' },
  { day: 46, title: 'TestNG Annotations, Assertions' },
  { day: 47, title: 'Data Providers, Parallel Execution' },
  { day: 48, title: 'Page Object Model (POM)' },
  { day: 49, title: 'Page Factory' },
  { day: 50, title: 'Framework Utilities Development' },
  { day: 51, title: 'Log4j2 Implementation' },
  { day: 52, title: 'Extent Reports Integration' },
  { day: 53, title: 'Allure Reports Setup' },
  { day: 54, title: 'BDD Basics – Cucumber' },
  { day: 55, title: 'Gherkin Syntax – Feature Files' },
  { day: 56, title: 'Step Definitions – Java' },
  { day: 57, title: 'Hooks & Tags' },
  { day: 58, title: 'Cucumber Framework Integration' },
  { day: 59, title: 'Mini Automation Framework Review' },
  { day: 60, title: 'Git – Installation & Commands' },
  { day: 61, title: 'GitHub – Repo, Branch, Push' },
  { day: 62, title: 'Git Merge, Pull Requests' },
  { day: 63, title: 'Git Conflict Handling' },
  { day: 64, title: 'Jenkins Introduction' },
  { day: 65, title: 'Jenkins Freestyle Jobs' },
  { day: 66, title: 'Pipeline Jobs – Scripted/Declarative' },
  { day: 67, title: 'Git + Jenkins CI Integration' },
  { day: 68, title: 'Selenium + Jenkins Job Setup' },
  { day: 69, title: 'Nightly Build Setup' },
  { day: 70, title: 'Cloud Basics – AWS Intro' },
  { day: 71, title: 'EC2 for Test Environments' },
  { day: 72, title: 'S3 – Storing Reports' },
  { day: 73, title: 'Lambda for Automation Tasks' },
  { day: 74, title: 'API Gateway Basics' },
  { day: 75, title: 'Docker Basics – Containers' },
  { day: 76, title: 'Dockerizing Automation' },
  { day: 77, title: 'Docker Compose' },
  { day: 78, title: 'Selenium Grid with Docker' },
  { day: 79, title: 'Kubernetes Basics' },
  { day: 80, title: 'Jenkins + Docker + Git CI Pipeline' },
  { day: 81, title: 'End-to-End Test Automation Project – Planning' },
  { day: 82, title: 'Designing Page Objects' },
  { day: 83, title: 'Integration of All Modules' },
  { day: 84, title: 'Enhancing Framework Utilities' },
  { day: 85, title: 'Execution & Parallel Runs' },
  { day: 86, title: 'Bug Fixing & Optimization' },
  { day: 87, title: 'Final Framework Deployment' },
  { day: 88, title: 'Reporting & CI Integration' },
  { day: 89, title: 'Resume Preparation + Portfolio' },
  { day: 90, title: 'Mock Interview + Final Review' }
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
          <h2 className="text-yellow-400 font-bold text-xl mb-1 tracking-tight">Full Stack Testing — 90 Days</h2>
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
          <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-3">
            Full Stack Testing · Day {selectedDay.day}
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
  const [selectedDay, setSelectedDay] = useState(testingDays[0]);
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
          <Sidebar key={completedCount} days={testingDays} selectedDay={selectedDay} onSelect={(d)=>{ setSelectedDay(d); if (typeof window !== 'undefined' && window.innerWidth < 1024) setSidebarOpen(false); }} completedDays={completedCount} />
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