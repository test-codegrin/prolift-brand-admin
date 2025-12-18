"use client";

import React, { useState } from 'react';
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/table";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Search, Filter, MoreVertical, Edit, Trash2, UserPlus } from 'lucide-react';

export default function UsersPage() {
  const [search, setSearch] = useState('');
  
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', joinDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', joinDate: '2024-01-20' },
    { id: 3, name: 'Robert Johnson', email: 'robert@example.com', role: 'Editor', status: 'Inactive', joinDate: '2024-01-10' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: 'User', status: 'Active', joinDate: '2024-01-25' },
    { id: 5, name: 'Mike Brown', email: 'mike@example.com', role: 'Viewer', status: 'Active', joinDate: '2024-01-30' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Users</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your users and their permissions</p>
        </div>
        <Button color="primary" startContent={<UserPlus size={18} />} className="mt-4 sm:mt-0">
          Add New User
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="border border-gray-200 dark:border-gray-700">
        <CardBody>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search users..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 w-full md:w-64"
                />
              </div>
              <Button variant="bordered" startContent={<Filter size={18} />}>
                Filter
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Users Table */}
      <Card className="border border-gray-200 dark:border-gray-700">
        <CardHeader className="border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">All Users</h2>
        </CardHeader>
        <CardBody>
          <Table aria-label="Users table">
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>EMAIL</TableColumn>
              <TableColumn>ROLE</TableColumn>
              <TableColumn>STATUS</TableColumn>
              <TableColumn>JOIN DATE</TableColumn>
              <TableColumn>ACTIONS</TableColumn>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">
                          {user.name.charAt(0)}
                        </span>
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.role === 'Admin' 
                        ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                        : user.role === 'Editor'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {user.role}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button isIconOnly size="sm" variant="light">
                        <Edit size={16} />
                      </Button>
                      <Button isIconOnly size="sm" variant="light" color="danger">
                        <Trash2 size={16} />
                      </Button>
                      <Button isIconOnly size="sm" variant="light">
                        <MoreVertical size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}