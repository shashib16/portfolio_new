import React, { MouseEventHandler } from 'react';
import {
  PanelLeft,
  File,
  Search,
  GitBranch,
} from 'lucide-react';

interface HeaderProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isExplorerOpen: boolean;
}


function Header({ onClick, isExplorerOpen }: HeaderProps) {
  return (
    <div className="bg-gray-900 border-b border-gray-800 p-2 flex items-center">
      <div className="flex items-center gap-2">
        <button
          onClick={onClick}
          className={`p-2 rounded transition-colors ${isExplorerOpen ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
        >
          <PanelLeft size={20} className="text-blue-400" />
        </button>
        <File className="text-blue-400" size={20} />
        <Search className="text-blue-400" size={20} />
        <GitBranch className="text-blue-400" size={20} />
      </div>
    </div>
  )
}
export default Header;