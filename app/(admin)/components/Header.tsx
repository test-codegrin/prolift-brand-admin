"use client";

import { Menu, X } from "lucide-react";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="hidden lg:block">
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* User profile, notifications, etc. */}
          <div className="flex items-center justify-center w-8 h-8 text-white bg-blue-500 rounded-full">
            U
          </div>
        </div>
      </div>
    </header>
  );
}