import React from 'react';
import {
    File,
    FolderOpen,
    Folder,
    ChevronRight,
    ChevronDown,
} from 'lucide-react';

interface itemProps {
    name: string;
    type: string;
    children: itemProps[];
    content: string;
    [key: string]: any;
}

function FileTreeStructure({ item, depth = 0, toggleFolder, openFolders, setActiveTab, activeTab }: {
    toggleFolder: any,
    openFolders: any,
    setActiveTab: any,
    activeTab: any,
    depth: number,
    item: itemProps
}) {
    console.log({ item })
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
                    {item.children.map((child: any, index: number) => (
                        <FileTreeStructure
                            key={index}
                            item={child}
                            toggleFolder={toggleFolder}
                            openFolders={openFolders}
                            setActiveTab={setActiveTab}
                            activeTab={activeTab}
                            depth={depth + 1}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
export default FileTreeStructure;