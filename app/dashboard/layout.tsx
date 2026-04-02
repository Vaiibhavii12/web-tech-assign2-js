'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Zap, Code2, Image, Languages, BookOpen, PenTool, Menu, X, Settings, User, LogOut } from 'lucide-react';
import { auth } from '@/lib/api';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentUser, setCurrentUser] = useState<{ name?: string; email?: string } | null>(null);

  // ── Auth check ─────────────────────────────────────────────────────────
  useEffect(() => {
    // If no token, redirect to login immediately
    if (!auth.isLoggedIn()) {
      router.push('/login');
      return;
    }

    // Show the saved user right away (no loading flash)
    const saved = auth.getUser<{ name?: string; email?: string }>();
    setCurrentUser(saved);

    // Then verify the token is still valid on the backend
    auth.me()
      .then((freshUser) => {
        setCurrentUser(freshUser as { name?: string; email?: string });
      })
      .catch(() => {
        // Token expired or invalid — log out
        auth.logout();
        router.push('/login');
      });
  }, [router]);

  const handleLogout = () => {
    auth.logout();
    router.push('/login');
  };

  // ── Sidebar tools ───────────────────────────────────────────────────────
  const tools = [
    { id: 'code',      name: 'Code Generator',   icon: Code2,     color: 'bg-blue-500/20' },
    { id: 'image',     name: 'Image Analyzer',    icon: Image,     color: 'bg-purple-500/20' },
    { id: 'translate', name: 'Translator',         icon: Languages, color: 'bg-green-500/20' },
    { id: 'summarize', name: 'Summarizer',          icon: BookOpen,  color: 'bg-orange-500/20' },
    { id: 'write',     name: 'Content Writer',     icon: PenTool,   color: 'bg-pink-500/20' },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* ── Sidebar ──────────────────────────────────────────────────── */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} glass-effect border-r border-border/50 transition-all duration-300 ease-out flex flex-col`}>
        {/* Logo */}
        <div className="p-6 border-b border-border/50">
          <Link href="/" className="flex items-center gap-3">
            <Zap className="w-8 h-8 gold-text shrink-0" />
            {sidebarOpen && <span className="text-xl font-bold gold-text">NEXUS-AI</span>}
          </Link>
        </div>

        {/* Tool links */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Link key={tool.id} href={`/dashboard/tools/${tool.id}`} className="group block">
                <div className={`flex items-center gap-3 px-4 py-3 rounded-lg
                                 hover:bg-primary/10 transition-all duration-300 ease-out
                                 ${sidebarOpen ? '' : 'justify-center'}`}>
                  <div className={`p-2 rounded-lg ${tool.color}`}>
                    <IconComponent className="w-5 h-5 text-foreground" />
                  </div>
                  {sidebarOpen && <span className="text-sm font-medium">{tool.name}</span>}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom: user info + settings + logout */}
        <div className="border-t border-border/50 p-4 space-y-1">
          {/* User name */}
          {sidebarOpen && currentUser?.name && (
            <div className="px-4 py-2 mb-2">
              <p className="text-xs text-foreground/40 uppercase tracking-wide">Signed in as</p>
              <p className="text-sm font-medium text-foreground truncate">{currentUser.name}</p>
            </div>
          )}

          <Link href="/dashboard/settings" className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg
                          hover:bg-secondary/50 transition-all duration-300 ease-out
                          ${sidebarOpen ? 'justify-start' : 'justify-center'}`}>
            <Settings className="w-5 h-5" />
            {sidebarOpen && <span className="text-sm">Settings</span>}
          </Link>

          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-red-400
                        hover:bg-red-500/10 transition-all duration-300 ease-out
                        ${sidebarOpen ? 'justify-start' : 'justify-center'}`}
          >
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="glass-effect border-b border-border/50 px-6 py-4 sticky top-0 z-40
                           flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-secondary/50 rounded-lg transition-all duration-300 ease-out"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="flex items-center gap-3">
            {currentUser?.name && (
              <span className="text-sm text-foreground/60 hidden sm:block">
                Hi, {currentUser.name.split(' ')[0]}
              </span>
            )}
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <User className="w-4 h-4 gold-text" />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
