import React, { MouseEventHandler } from 'react';
import {
  File,
  GitBranch,
  Search,
  Settings,
  X,
  FolderOpen,
} from 'lucide-react';
import FileTreeStructure from './FileTreeStructure';

interface SideNavProps {
  onclick: MouseEventHandler<HTMLButtonElement>;
  isExplorerOpen: boolean;
  toggleExplorer: any;
  openFolders: any;
  setActiveTab: any;
  activeTab: any;
  fileStructure: any;
}

function SideNav({ onclick, isExplorerOpen, toggleExplorer, openFolders, setActiveTab, activeTab, fileStructure }: SideNavProps) {
  console.log({ isExplorerOpen })
  return (
    <>
      <div className="w-16 bg-gray-900 border-r border-gray-800 flex flex-col  justify-between items-center py-4">
        <div className='flex flex-col  items-center'>
          <button
            type='button'
            onClick={onclick}
            className={`p-2 rounded transition-colors ${isExplorerOpen ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
          >
            <File size={24} />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded mb-2 transition-colors">
            <Search size={24} />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded mb-2 transition-colors">
            <GitBranch size={24} />
          </button>
        </div>
        <div>
          <button className="p-2 hover:bg-gray-800 rounded transition-colors">
            <Settings size={24} />
          </button>

        </div>

      </div>

      <div
        className={`
            transition-all duration-300 ease-in-out
            ${isExplorerOpen ? 'w-64 opacity-100' : 'w-0 opacity-0'}
            bg-gray-900 border-r border-gray-800 overflow-hidden
          `}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold">EXPLORER</span>
            <button
              onClick={toggleExplorer}
              className="p-1 hover:bg-gray-800 rounded transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          <div className="space-y-2">
            <FileTreeStructure
              depth={0}
              item={fileStructure}
              toggleFolder={toggleExplorer}
              openFolders={openFolders}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          </div>
        </div>
      </div>


    </>

  );
}

export default SideNav;