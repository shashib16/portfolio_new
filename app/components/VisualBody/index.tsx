import Body from "./Body";
import React from "react";
import { File } from "lucide-react";
interface filesProps {
  [key: string]: {
    name: string;
    content: React.ReactNode;
  };
}

interface VisualBodyProps {
  activeTab: string;
  isExplorerOpen: boolean;
  files: filesProps;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

function VisualBody({ setActiveTab, activeTab, isExplorerOpen, files }: VisualBodyProps) {
  console.log({ activeTab, isExplorerOpen, files })
  return (
    <>
      <div className="bg-gray-900 border-b border-gray-800 flex">
        {Object.entries(files).map(([key, file]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 flex items-center gap-2 transition-colors ${activeTab === key
              ? 'bg-gray-900 border-t-2 border-blue-400'
              : 'bg-gray-800 hover:bg-gray-700'
              }`}
          >
            <File size={16} />
            <span className="transition-all duration-200">{file.name}</span>
          </button>
        ))}
      </div>
      <div className="w-full">
        <div className={`h-full transition-all duration-300 ${isExplorerOpen ? 'pl-0' : 'pl-0'}`}>
          {files[activeTab].content}
        </div>
      </div>
    </>
  );
}

export default VisualBody;