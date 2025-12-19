"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/app/Components/Sidebar";
import Header from "@/app/Components/Header";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayoutRoutes = ["/login", "/signup"];
  const hideLayout = hideLayoutRoutes.includes(pathname);

  if (hideLayout) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black ">
        {children}
      </main>
    );
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
