'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Zap, Code2, Image, Languages, BookOpen, PenTool, Menu, X, LogOut, Settings, User } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const tools = [
    { id: 'code', name: 'Code Generator', icon: Code2, color: 'bg-blue-500/20' },
    { id: 'image', name: 'Image Analyzer', icon: Image, color: 'bg-purple-500/20' },
    { id: 'translate', name: 'Translator', icon: Languages, color: 'bg-green-500/20' },
    { id: 'summarize', name: 'Summarizer', icon: BookOpen, color: 'bg-orange-500/20' },
    { id: 'write', name: 'Content Writer', icon: PenTool, color: 'bg-pink-500/20' },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} glass-effect border-r border-border/50 smooth-transition flex flex-col`}>
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 gold-text shrink-0" />
            {sidebarOpen && <span className="text-xl font-bold gold-text">NEXUS-AI</span>}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className={sidebarOpen ? 'space-y-2' : ''}>
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <Link
                  key={tool.id}
                  href={`/dashboard/tools/${tool.id}`}
                  className="group block"
                >
                  <div className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 smooth-transition ${sidebarOpen ? '' : 'justify-center'}`}>
                    <div className={`p-2 rounded-lg ${tool.color}`}>
                      <IconComponent className="w-5 h-5 text-foreground" />
                    </div>
                    {sidebarOpen && <span className="text-sm font-medium">{tool.name}</span>}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="border-t border-border/50 p-4 space-y-2">
          <button className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-secondary/50 smooth-transition ${sidebarOpen ? 'justify-start' : 'justify-center'}`}>
            <Settings className="w-5 h-5" />
            {sidebarOpen && <span className="text-sm">Settings</span>}
          </button>
          <button className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-red-400 hover:bg-red-500/10 smooth-transition ${sidebarOpen ? 'justify-start' : 'justify-center'}`}>
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="glass-effect border-b border-border/50 px-6 py-4 sticky top-0 z-40 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-secondary/50 rounded-lg smooth-transition"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-secondary/50 rounded-lg smooth-transition">
              <User className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
