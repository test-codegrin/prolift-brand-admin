"use client";

import React, { useState } from 'react';
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Switch } from "@heroui/switch";
import { Select, SelectItem } from "@heroui/select";
import { Save, Bell, Lock, Globe, Palette } from 'lucide-react';

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    siteName: 'Admin Panel',
    siteUrl: 'https://adminpanel.com',
    adminEmail: 'admin@example.com',
    timezone: 'UTC',
    language: 'en',
    notifications: true,
    emailNotifications: true,
    darkMode: true,
    maintenanceMode: false,
  });

  const timezones = [
    { key: 'utc', label: 'UTC' },
    { key: 'est', label: 'Eastern Time (EST)' },
    { key: 'pst', label: 'Pacific Time (PST)' },
    { key: 'gmt', label: 'Greenwich Mean Time (GMT)' },
  ];

  const languages = [
    { key: 'en', label: 'English' },
    { key: 'es', label: 'Spanish' },
    { key: 'fr', label: 'French' },
    { key: 'de', label: 'German' },
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Save settings logic here
    console.log('Saving settings:', formData);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your application settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* General Settings */}
          <Card className="border border-gray-200 dark:border-gray-700">
            <CardHeader className="border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">General Settings</h2>
              </div>
            </CardHeader>
            <CardBody className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Site Name"
                  value={formData.siteName}
                  onChange={(e) => handleInputChange('siteName', e.target.value)}
                />
                <Input
                  label="Site URL"
                  value={formData.siteUrl}
                  onChange={(e) => handleInputChange('siteUrl', e.target.value)}
                />
                <Input
                  label="Admin Email"
                  type="email"
                  value={formData.adminEmail}
                  onChange={(e) => handleInputChange('adminEmail', e.target.value)}
                />
                <Select
                  label="Timezone"
                  selectedKeys={[formData.timezone]}
                  onChange={(e) => handleInputChange('timezone', e.target.value)}
                >
                  {timezones.map((tz) => (
                    <SelectItem key={tz.key}>{tz.label}</SelectItem>
                  ))}
                </Select>
                <Select
                  label="Language"
                  selectedKeys={[formData.language]}
                  onChange={(e) => handleInputChange('language', e.target.value)}
                >
                  {languages.map((lang) => (
                    <SelectItem key={lang.key}>{lang.label}</SelectItem>
                  ))}
                </Select>
              </div>
            </CardBody>
          </Card>

          {/* Notification Settings */}
          <Card className="border border-gray-200 dark:border-gray-700">
            <CardHeader className="border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Notification Settings</h2>
              </div>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Push Notifications</p>
                  <p className="text-sm text-gray-500">Receive push notifications for important updates</p>
                </div>
                <Switch
                  isSelected={formData.notifications}
                  onValueChange={(value) => handleInputChange('notifications', value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive email notifications for system updates</p>
                </div>
                <Switch
                  isSelected={formData.emailNotifications}
                  onValueChange={(value) => handleInputChange('emailNotifications', value)}
                />
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Appearance */}
          <Card className="border border-gray-200 dark:border-gray-700">
            <CardHeader className="border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <Palette className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Appearance</h2>
              </div>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Dark Mode</p>
                  <p className="text-sm text-gray-500">Toggle dark mode theme</p>
                </div>
                <Switch
                  isSelected={formData.darkMode}
                  onValueChange={(value) => handleInputChange('darkMode', value)}
                />
              </div>
            </CardBody>
          </Card>

          {/* System */}
          <Card className="border border-gray-200 dark:border-gray-700">
            <CardHeader className="border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <Lock className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">System</h2>
              </div>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Maintenance Mode</p>
                  <p className="text-sm text-gray-500">Put the system in maintenance mode</p>
                </div>
                <Switch
                  isSelected={formData.maintenanceMode}
                  onValueChange={(value) => handleInputChange('maintenanceMode', value)}
                />
              </div>
            </CardBody>
          </Card>

          {/* Save Button */}
          <Button
            color="primary"
            startContent={<Save size={18} />}
            className="w-full"
            onPress={handleSave}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}