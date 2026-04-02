'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Code2, Image, Languages, BookOpen, PenTool, Github, Twitter } from 'lucide-react';

export default function Home() {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const tools = [
    {
      id: 'code',
      name: 'Code Generator',
      description: 'Generate, debug, and refactor code in any language with AI assistance',
      icon: Code2,
    },
    {
      id: 'image',
      name: 'Image Analyzer',
      description: 'Upload images to extract text, analyze content, and get insights',
      icon: Image,
    },
    {
      id: 'translate',
      name: 'Translator',
      description: 'Translate between 50+ languages with context-aware precision',
      icon: Languages,
    },
    {
      id: 'summarize',
      name: 'Content Summarizer',
      description: 'Summarize articles, documents, and PDFs in seconds',
      icon: BookOpen,
    },
    {
      id: 'write',
      name: 'Content Writer',
      description: 'Generate essays, blog posts, and marketing copy with ease',
      icon: PenTool,
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-border/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 gold-text" />
            <span className="text-2xl font-bold gold-text">NEXUS-AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/70 hover:text-primary transition-colors duration-300">Features</a>
            <a href="#tools" className="text-foreground/70 hover:text-primary transition-colors duration-300">Tools</a>
            <a href="#pricing" className="text-foreground/70 hover:text-primary transition-colors duration-300">Pricing</a>
          </div>
          <Link href="/dashboard" className="button-primary">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gold-text">Unlock Your AI</span>
            <br />
            <span className="text-foreground">Superpowers</span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            NEXUS-AI is your premium AI workspace featuring code generation, image analysis, translation, content writing, and more. All in one elegant platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="button-primary flex items-center justify-center gap-2">
              Start Free <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="button-secondary flex items-center justify-center gap-2">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center gold-text">Powerful AI Tools</h2>
          <p className="text-center text-foreground/60 mb-16 text-lg">Everything you need to supercharge your productivity</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={tool.id}
                  onMouseEnter={() => setIsHovered(tool.id)}
                  onMouseLeave={() => setIsHovered(null)}
                  className="card-elegant group cursor-pointer"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300">
                      <IconComponent className="w-6 h-6 gold-text" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{tool.name}</h3>
                  <p className="text-foreground/60 mb-4">{tool.description}</p>
                  <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center gold-text">Why Choose NEXUS-AI?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Lightning Fast', desc: 'Real-time AI processing with instant results' },
              { title: 'Secure & Private', desc: 'Your data is encrypted and never shared' },
              { title: 'Easy Integration', desc: 'Seamlessly integrate with your workflow' },
              { title: 'Always Learning', desc: 'Constantly updated with latest AI models' },
            ].map((feature, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                <p className="text-foreground/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center card-elegant">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
          <p className="text-foreground/70 mb-8 text-lg">Join thousands of users already using NEXUS-AI to unlock their potential</p>
          <Link href="/dashboard" className="button-primary inline-flex items-center gap-2">
            Start Your Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-6 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 gold-text" />
                <span className="font-bold text-lg gold-text">NEXUS-AI</span>
              </div>
              <p className="text-foreground/60 text-sm">Premium AI workspace for modern creators</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary">Features</a></li>
                <li><a href="#" className="hover:text-primary">Pricing</a></li>
                <li><a href="#" className="hover:text-primary">Updates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary">Privacy</a></li>
                <li><a href="#" className="hover:text-primary">Terms</a></li>
                <li><a href="#" className="hover:text-primary">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-foreground/60 text-sm mb-4 md:mb-0">&copy; 2024 NEXUS-AI. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
