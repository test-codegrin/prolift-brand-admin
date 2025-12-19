"use client";

import { siteConfig } from "@/config/site";
import { Home, Settings, Users, BarChart, FileText } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const navItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Analytics", icon: BarChart, href: "/analytics" },
  { name: "Users", icon: Users, href: "/users" },
  { name: "Documents", icon: FileText, href: "/documents" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-64 transform border-r border-gray-200 
          bg-white dark:border-gray-800 dark:bg-gray-900 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:h-auto
        `}
      >
        <div className="flex items-center h-16 px-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold">{siteConfig.name}</h2>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 text-gray-700 transition-colors rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}