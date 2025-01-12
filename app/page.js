'use client';
import React ,{useState} from 'react';
import SideBarNav from './components/SideBar';
import { 
  File, 
  FolderOpen, 
  Mail,
  Github,
  Linkedin,
  Code,
  Terminal,
  Monitor,
  ChevronRight,
  ChevronDown,
  Folder,
  PanelLeft,
  X,
} from 'lucide-react';
import Footer from './components/Footer';
import VisualBody from './components/VisualBody';
import Header from './components/Header';

function Home() {

  const [activeTab, setActiveTab] = useState('about');
  const [openFolders, setOpenFolders] = useState(['portfolio', 'components']);
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);
  
  const toggleFolder = (folderName) => {
    setOpenFolders(prev => 
      prev.includes(folderName)
        ? prev.filter(f => f !== folderName)
        : [...prev, folderName]
    );
  };

  const toggleExplorer = () => {
    setIsExplorerOpen(prev => !prev);
  };

  const fileStructure = {
    name: 'portfolio',
    type: 'folder',
    children: [
      {
        name: 'components',
        type: 'folder',
        children: [
          { name: 'about.js', type: 'file', content: 'about' },
          { name: 'projects.js', type: 'file', content: 'projects' },
          { name: 'contact.js', type: 'file', content: 'contact' }
        ]
      },
      {
        name: 'styles',
        type: 'folder',
        children: [
          { name: 'globals.css', type: 'file' }
        ]
      }
    ]
  };

  const FileTreeItem = ({ item, depth = 0 }) => {
    const isFolder = item.type === 'folder';
    const isOpen = openFolders.includes(item.name);
    
    return (
      <div>
        <button
          onClick={() => {
            if (isFolder) {
              toggleFolder(item.name);
            } else if (item.content) {
              setActiveTab(item.content);
            }
          }}
          className={`flex items-center gap-2 w-full p-1 rounded text-left hover:bg-gray-800 transition-colors
            ${!isFolder && item.content === activeTab ? 'bg-gray-800' : ''}
          `}
          style={{ paddingLeft: `${depth * 16}px` }}
        >
          {isFolder ? (
            <>
              {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              {isOpen ? <FolderOpen size={16} className="text-blue-400" /> : <Folder size={16} className="text-blue-400" />}
            </>
          ) : (
            <File size={16} className="text-gray-400" />
          )}
          <span className="text-sm transition-all duration-200 ease-in-out hover:text-blue-400">
            {item.name}
          </span>
        </button>
        {isFolder && isOpen && item.children && (
          <div className="animate-fade-in">
            {item.children.map((child, index) => (
              <FileTreeItem key={index} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  const files = {
    about: {
      name: 'about.js',
      content: (
        <div className="p-6  h-screen animate-fade-in">
          <h1 className="text-2xl font-bold mb-4 animate-slide-in">John Doe</h1>
          <p className="text-gray-300 mb-4 animate-slide-in">
            Full Stack Developer with 5 years of experience building web applications.
            Passionate about clean code and modern technologies.
          </p>
          <div className="flex gap-4 mb-6 animate-slide-in">
            <a href="#" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              <Github size={20} /> Github
            </a>
            <a href="#" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              <Mail size={20} /> Email
            </a>
          </div>
          <h2 className="text-xl font-semibold mb-3 animate-slide-in">Skills</h2>
          <div className="grid grid-cols-2 gap-4 mb-6 animate-slide-in">
            <div className="flex items-center gap-2">
              <Code size={16} />
              React, Next.js, Vue
            </div>
            <div className="flex items-center gap-2">
              <Terminal size={16} />
              Node.js, Python, PHP
            </div>
            <div className="flex items-center gap-2">
              <Monitor size={16} />
              HTML, CSS, JavaScript
            </div>
          </div>
        </div>
      )
    },
    projects: {
      name: 'projects.js',
      content: (
        <div className="p-6 h-screen animate-fade-in">
          <h2 className="text-xl font-bold mb-4 animate-slide-in">Projects</h2>
          <div className="space-y-6">
            <div className="border border-gray-700 rounded p-4 animate-slide-in hover:border-blue-400 transition-colors">
              <h3 className="text-lg font-semibold mb-2">E-commerce Platform</h3>
              <p className="text-gray-300 mb-2">
                Built a full-featured e-commerce platform using Next.js, Tailwind CSS, and Stripe.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-blue-900 rounded text-sm">Next.js</span>
                <span className="px-2 py-1 bg-blue-900 rounded text-sm">Tailwind</span>
                <span className="px-2 py-1 bg-blue-900 rounded text-sm">Stripe</span>
              </div>
            </div>
            <div className="border border-gray-700 rounded p-4 animate-slide-in hover:border-blue-400 transition-colors">
              <h3 className="text-lg font-semibold mb-2">Task Management App</h3>
              <p className="text-gray-300 mb-2">
                Developed a real-time task management application with React and Firebase.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-blue-900 rounded text-sm">React</span>
                <span className="px-2 py-1 bg-blue-900 rounded text-sm">Firebase</span>
                <span className="px-2 py-1 bg-blue-900 rounded text-sm">Material-UI</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    contact: {
      name: 'contact.js',
      content: (
        <div className="p-6 h-screen animate-fade-in">
          <h2 className="text-xl font-bold mb-4 animate-slide-in">Contact Me</h2>
          <form className="space-y-4">
            <div className="animate-slide-in">
              <label className="block text-sm mb-2">Name</label>
              <input 
                type="text" 
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:border-blue-400 transition-colors"
              />
            </div>
            <div className="animate-slide-in">
              <label className="block text-sm mb-2">Email</label>
              <input 
                type="email" 
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:border-blue-400 transition-colors"
              />
            </div>
            <div className="animate-slide-in">
              <label className="block text-sm mb-2">Message</label>
              <textarea 
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded h-32 focus:border-blue-400 transition-colors"
              ></textarea>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors animate-slide-in">
              Send Message
            </button>
          </form>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen h-screen bg-gray-900 text-gray-100">
      {/* Top Bar */}
       
       <Header {...{
        onclick: toggleExplorer,
        isExplorerOpen
      }} />

      <div className="flex">
        <SideBarNav  {...{
          onclick: toggleExplorer,
          isExplorerOpen,
          toggleExplorer,
          openFolders,
          setActiveTab,
          activeTab,
          fileStructure

        }} />

        {/* Main Content */}
        <div className="flex-1 bg-gray-900">
          {/* Tab Bar */}
          

          {/* Content Area */}
         <VisualBody {...{
          activeTab,
          isExplorerOpen,
          files,
          setActiveTab
         }} />
        </div>
      </div>

      {/* footer Bar */}
      <Footer />

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { 
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        .animate-slide-in {
          animation: slideIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default Home;