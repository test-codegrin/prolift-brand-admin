"use client";

import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Moon, 
  Sun,
  LogOut,
  User,
  ChevronDown,
  Cog
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { 
  Dropdown, 
  DropdownTrigger, 
  DropdownMenu, 
  DropdownItem 
} from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

const Header = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    // Handle logout logic here
    router.push('/login');
  };

  const userMenuItems = [
    { key: 'profile', label: 'My Profile', icon: User },
    { key: 'settings', label: 'Settings', icon: Cog },
    { key: 'logout', label: 'Logout', icon: LogOut, color: 'danger' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Left side - Search */}
        <div className="flex items-center flex-1">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              size="sm"
            />
          </div>
        </div>

        {/* Right side - Icons and User */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <Button
            isIconOnly
            variant="light"
            onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>

          {/* Notifications */}
          <Button
            isIconOnly
            variant="light"
            className="relative"
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>

          {/* User Dropdown */}
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button variant="light" className="flex items-center space-x-2">
                <Avatar
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  className="cursor-pointer"
                />
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
                <ChevronDown size={16} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="User actions" onAction={(key) => {
              if (key === 'logout') {
                handleLogout();
              } else if (key === 'profile') {
                router.push('/profile');
              } else if (key === 'settings') {
                router.push('/settings');
              }
            }}>
              {userMenuItems.map((item) => (
                <DropdownItem
                  key={item.key}
                  startContent={<item.icon size={18} />}
                  color={item.color as any}
                >
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;