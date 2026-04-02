'use client';

import { useState } from 'react';
import { Copy, Download, Zap, Check } from 'lucide-react';

export default function CodeGeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const languages = [
    'javascript', 'python', 'typescript', 'java', 'csharp', 'cpp', 'rust', 'go', 'php', 'ruby'
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setCode('');

    // Simulate AI generation
    setTimeout(() => {
      const mockCode = `// ${prompt}
function solution() {
  // Generated code for: ${prompt}
  return "AI-generated code implementation";
}

// Example usage:
console.log(solution());`;
      setCode(mockCode);
      setLoading(false);
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold gold-text">Code Generator</h1>
        <p className="text-foreground/60">Generate, debug, and refactor code with AI assistance</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Input Panel */}
        <div className="lg:col-span-1 space-y-6">
          <div className="card-elegant">
            <h2 className="text-lg font-semibold mb-4">Settings</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Language</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground transition-all duration-300 ease-out focus:border-primary/50 outline-none"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang} className="bg-card text-foreground">
                      {lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">What do you want to code?</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., Write a function that checks if a number is prime"
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 transition-all duration-300 ease-out focus:border-primary/50 outline-none resize-none h-32"
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={!prompt.trim() || loading}
                className={`button-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <Zap className="w-5 h-5" />
                {loading ? 'Generating...' : 'Generate Code'}
              </button>
            </div>
          </div>

          {/* History */}
          <div className="card-elegant">
            <h2 className="text-lg font-semibold mb-4">Recent</h2>
            <div className="space-y-2 text-sm text-foreground/60">
              <p>Your recent generations will appear here</p>
            </div>
          </div>
        </div>

        {/* Output Panel */}
        <div className="lg:col-span-2">
          <div className="card-elegant">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Generated Code</h2>
              {code && (
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="p-2 hover:bg-secondary/50 rounded-lg transition-all duration-300 ease-out flex items-center gap-2 text-sm"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                  <button className="p-2 hover:bg-secondary/50 rounded-lg transition-all duration-300 ease-out flex items-center gap-2 text-sm">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              )}
            </div>

            {code ? (
              <div className="bg-background/50 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm font-mono text-foreground/80 whitespace-pre-wrap break-words">
                  {code}
                </pre>
              </div>
            ) : (
              <div className="bg-background/50 rounded-lg p-12 text-center">
                <div className="space-y-4">
                  <p className="text-foreground/60">Generated code will appear here</p>
                  <p className="text-sm text-foreground/40">Describe what you want to code and click Generate</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
