"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/app/(admin)/components/Sidebar";
import { Header } from "@/app/(admin)/components/Header";

// Pages where sidebar and header should NOT be shown
const noLayoutPages = ["/login", "/signup", "/register", "/auth"];

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Check if current page should have sidebar and header
  const showLayout = !noLayoutPages.some(page => 
    pathname?.startsWith(page)
  );

  if (!showLayout) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <Header />
        
        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}