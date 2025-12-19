"use client";

import React from 'react';
import { 
  Home,  
  Users, 
  Settings, 
  LogOut
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

const Sidebar = () => {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Users', href: '/users', icon: Users },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-black border-r border-gray-800 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <img src="/logo/logo.png" alt="Logo" />
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname?.startsWith(item.href);
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'text-white border-l-4 border-red-600'
                  : 'text-gray-300  hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      
      {/* Sidebar Footer */}
      <div className="p-4 border-t border-gray-800">
        <Button
          className="w-full mt-4 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white"
          startContent={<LogOut size={18} />}
          variant="light"
        >
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;