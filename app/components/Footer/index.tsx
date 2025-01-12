'use client'
import React from "react";
import { GitBranch } from "lucide-react";
export default function Footer() {
    return (
        <div className="bg-blue-600 text-white px-4 py-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <GitBranch size={16} />
                <span>main</span>
            </div>
            <div>Ln 1, Col 1</div>
        </div>
    )
}