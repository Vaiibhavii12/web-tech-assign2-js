'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Code2, Image, Languages, BookOpen, PenTool, TrendingUp, Clock, Star } from 'lucide-react';

export default function DashboardPage() {
  const recentTools = [
    { id: 'code', name: 'Code Generator', icon: Code2, color: 'from-blue-600 to-blue-400' },
    { id: 'summarize', name: 'Content Summarizer', icon: BookOpen, color: 'from-orange-600 to-orange-400' },
    { id: 'write', name: 'Content Writer', icon: PenTool, color: 'from-pink-600 to-pink-400' },
  ];

  const stats = [
    { label: 'API Calls', value: '2,847', trend: '+12.5%' },
    { label: 'Documents Processed', value: '143', trend: '+8.2%' },
    { label: 'Time Saved', value: '47.5 hrs', trend: '+23.1%' },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold gold-text">Welcome back</h1>
        <p className="text-foreground/60">Choose a tool or continue with your recent work</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="card-elegant">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-foreground/60 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold gold-text">{stat.value}</p>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
            </div>
            <p className="text-sm text-green-400">{stat.trend} this month</p>
          </div>
        ))}
      </div>

      {/* Quick Access */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Recent Tools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {recentTools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Link
                key={tool.id}
                href={`/dashboard/tools/${tool.id}`}
                className="card-elegant group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-br ${tool.color} rounded-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <Clock className="w-4 h-4 text-foreground/40" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <span className="text-sm">Open</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* All Tools */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">All Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 'code', name: 'Code Generator', icon: Code2, desc: 'Generate and debug code' },
            { id: 'image', name: 'Image Analyzer', icon: Image, desc: 'Analyze images and extract text' },
            { id: 'translate', name: 'Translator', icon: Languages, desc: 'Translate to 50+ languages' },
            { id: 'summarize', name: 'Summarizer', icon: BookOpen, desc: 'Summarize documents' },
            { id: 'write', name: 'Content Writer', icon: PenTool, desc: 'Generate written content' },
          ].map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Link
                key={tool.id}
                href={`/dashboard/tools/${tool.id}`}
                className="card-elegant group"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-all duration-300 ease-out">
                  <IconComponent className="w-6 h-6 gold-text" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
                <p className="text-foreground/60 text-sm mb-4">{tool.desc}</p>
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <span className="text-sm">Launch</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Upgrade Prompt */}
      <div className="card-elegant bg-gradient-to-r from-primary/20 to-accent/10 border-primary/30">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/20 rounded-lg">
            <Star className="w-6 h-6 gold-text" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Unlock Premium Features</h3>
            <p className="text-foreground/70 mb-4">Get unlimited API calls, priority support, and advanced features</p>
            <button className="button-primary text-sm">Upgrade to Pro</button>
          </div>
        </div>
      </div>
    </div>
  );
}
