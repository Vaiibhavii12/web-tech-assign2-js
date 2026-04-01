'use client';

import { useState } from 'react';
import { Copy, Check, Download, Zap, RefreshCw } from 'lucide-react';

export default function ContentWriterPage() {
  const [topic, setTopic] = useState('');
  const [contentType, setContentType] = useState('blog');
  const [tone, setTone] = useState('professional');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const contentTypes = [
    'blog-post',
    'essay',
    'social-media',
    'product-description',
    'email',
    'ad-copy',
    'story',
    'poem'
  ];

  const tones = [
    'professional',
    'casual',
    'formal',
    'humorous',
    'inspiring',
    'informative',
    'persuasive'
  ];

  const handleGenerate = async () => {
    if (!topic.trim()) return;

    setLoading(true);
    setContent('');

    // Simulate content generation
    setTimeout(() => {
      const mockContent = `# ${topic}

${getContentHeader(contentType)}

## Introduction
This is an AI-generated ${contentType} about "${topic}". The content has been tailored to match a ${tone} tone and is designed to engage and inform your audience effectively.

## Main Section
The core of this content explores various aspects of ${topic}, providing valuable insights and practical information. Each paragraph is carefully crafted to maintain reader engagement while delivering meaningful value.

## Key Points
• Well-researched and factual information
• Clear and concise writing style
• Engaging narrative structure
• Actionable insights and takeaways
• Relevant examples and case studies

## Conclusion
This ${contentType} effectively communicates the importance of ${topic} while maintaining a ${tone} and professional approach throughout. The content is optimized for readability and engagement across different platforms and audiences.

---
Generated with NEXUS-AI • Content Quality: Excellent • Readability Score: 92/100`;
      setContent(mockContent);
      setLoading(false);
    }, 2000);
  };

  const getContentHeader = (type: string) => {
    const headers: Record<string, string> = {
      'blog-post': 'A comprehensive blog post exploring insights and best practices',
      'essay': 'A well-structured essay with thesis, arguments, and conclusion',
      'social-media': 'An engaging social media post crafted for maximum impact',
      'product-description': 'A compelling product description highlighting key features and benefits',
      'email': 'A professional email with clear messaging and call-to-action',
      'ad-copy': 'Marketing copy designed to convert and engage your audience',
      'story': 'A creative narrative story with engaging plot and characters',
      'poem': 'A thoughtfully crafted poem with rhythm and emotion'
    };
    return headers[type] || '';
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRegenerate = () => {
    handleGenerate();
  };

  return (
    <div className="p-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold gold-text">Content Writer</h1>
        <p className="text-foreground/60">Generate essays, blog posts, marketing copy, and more with AI assistance</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Configuration Panel */}
        <div className="lg:col-span-1 space-y-6">
          <div className="card-elegant">
            <h2 className="text-lg font-semibold mb-4">Settings</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Topic or Title</label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., The Future of AI in Education"
                  className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground placeholder-foreground/40 transition-all duration-300 ease-out focus:border-primary/50 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Content Type</label>
                <select
                  value={contentType}
                  onChange={(e) => setContentType(e.target.value)}
                  className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground transition-all duration-300 ease-out focus:border-primary/50 outline-none"
                >
                  {contentTypes.map((type) => (
                    <option key={type} value={type} className="bg-card">
                      {type.replace('-', ' ').charAt(0).toUpperCase() + type.replace('-', ' ').slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tone</label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground transition-all duration-300 ease-out focus:border-primary/50 outline-none"
                >
                  {tones.map((t) => (
                    <option key={t} value={t} className="bg-card">
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Advanced Options</label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-primary" defaultChecked />
                  <span className="text-sm">Include SEO keywords</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-primary" defaultChecked />
                  <span className="text-sm">Add call-to-action</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-primary" />
                  <span className="text-sm">Include statistics</span>
                </label>
              </div>

              <button
                onClick={handleGenerate}
                disabled={!topic.trim() || loading}
                className="button-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Zap className="w-5 h-5" />
                {loading ? 'Generating...' : 'Generate Content'}
              </button>
            </div>
          </div>

          {/* Content History */}
          <div className="card-elegant">
            <h2 className="text-lg font-semibold mb-4">Templates</h2>
            <div className="space-y-2 text-sm text-foreground/60">
              <p>Quick templates for common content types</p>
            </div>
          </div>
        </div>

        {/* Content Output */}
        <div className="lg:col-span-2">
          <div className="card-elegant">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Generated Content</h2>
              {content && (
                <div className="flex gap-2">
                  <button
                    onClick={handleRegenerate}
                    disabled={loading}
                    className="p-2 hover:bg-secondary/50 rounded-lg transition-all duration-300 ease-out flex items-center gap-2 text-sm disabled:opacity-50"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Regenerate
                  </button>
                  <button
                    onClick={handleCopy}
                    className="p-2 hover:bg-secondary/50 rounded-lg transition-all duration-300 ease-out flex items-center gap-2 text-sm"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                  <button className="p-2 hover:bg-secondary/50 rounded-lg transition-all duration-300 ease-out flex items-center gap-2 text-sm">
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                </div>
              )}
            </div>

            {content ? (
              <div className="bg-background/50 rounded-lg p-6 overflow-y-auto max-h-96">
                <pre className="text-sm text-foreground/80 whitespace-pre-wrap break-words font-sans">
                  {content}
                </pre>
              </div>
            ) : (
              <div className="bg-background/50 rounded-lg p-12 text-center">
                <div className="space-y-4">
                  <p className="text-foreground/60">Your generated content will appear here</p>
                  <p className="text-sm text-foreground/40">Fill in the topic and click Generate to get started</p>
                </div>
              </div>
            )}
          </div>

          {/* Content Stats */}
          {content && (
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="card-elegant">
                <p className="text-foreground/60 text-sm mb-1">Word Count</p>
                <p className="text-2xl font-bold gold-text">{content.split(/\s+/).length}</p>
              </div>
              <div className="card-elegant">
                <p className="text-foreground/60 text-sm mb-1">Readability</p>
                <p className="text-2xl font-bold gold-text">92%</p>
              </div>
              <div className="card-elegant">
                <p className="text-foreground/60 text-sm mb-1">Generation Time</p>
                <p className="text-2xl font-bold gold-text">2.0s</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
