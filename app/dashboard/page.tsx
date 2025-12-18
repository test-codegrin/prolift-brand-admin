"use client";

import React from 'react';
import { Card, CardBody, CardHeader } from "@heroui/card";
import { BarChart3, Users, DollarSign, Package, TrendingUp, TrendingDown } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$54,239",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      title: "Total Users",
      value: "3,248",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Total Products",
      value: "1,682",
      change: "-2.1%",
      trend: "down",
      icon: Package,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      title: "Conversion Rate",
      value: "24.7%",
      change: "+5.3%",
      trend: "up",
      icon: BarChart3,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    }
  ];

  const recentActivities = [
    { user: "John Doe", action: "placed a new order", time: "5 min ago" },
    { user: "Jane Smith", action: "registered as new user", time: "1 hour ago" },
    { user: "Robert Johnson", action: "updated profile information", time: "2 hours ago" },
    { user: "Sarah Williams", action: "completed payment", time: "3 hours ago" },
    { user: "Mike Brown", action: "requested support", time: "5 hours ago" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Welcome back! Here's what's happening with your store today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border border-gray-200 dark:border-gray-700">
              <CardBody className={`p-6 ${stat.bgColor}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                    <h3 className="text-2xl font-bold mt-2 dark:text-white">{stat.value}</h3>
                    <div className="flex items-center mt-2">
                      {stat.trend === "up" ? (
                        <TrendingUp className={`w-4 h-4 ${stat.color} mr-1`} />
                      ) : (
                        <TrendingDown className={`w-4 h-4 ${stat.color} mr-1`} />
                      )}
                      <span className={`text-sm font-medium ${stat.color}`}>
                        {stat.change}
                      </span>
                      <span className="text-sm text-gray-500 ml-2">from last month</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card className="border border-gray-200 dark:border-gray-700">
        <CardHeader className="border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Recent Activity</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {activity.user.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">
                      <span className="font-semibold">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}