'use client';

import { useState } from 'react';
import { Copy, Check, Download, Zap, Upload } from 'lucide-react';

export default function SummarizerPage() {
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');
  const [summaryLength, setSummaryLength] = useState('medium');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const summaryLengths = [
    { value: 'short', label: 'Short (50-100 words)' },
    { value: 'medium', label: 'Medium (100-200 words)' },
    { value: 'long', label: 'Long (200-400 words)' },
  ];

  const handleSummarize = async () => {
    if (!content.trim()) return;

    setLoading(true);
    setSummary('');

    // Simulate summarization
    setTimeout(() => {
      const mockSummary = `📋 Summary (${summaryLength} length)

This is an AI-generated summary of the provided content. The summarizer has analyzed the text and extracted the key points, main ideas, and most important information.

Key Points:
• Main concept or topic of the text
• Important details and supporting information
• Key findings or conclusions
• Relevant context and background

The summary maintains the essential meaning while reducing the content length significantly, making it easier to quickly understand the main message without reading the entire original text.

Summary Confidence: 92%
Original Length: ${content.length} characters
Summary Length: ~${Math.round(content.length * 0.3)} characters`;
      setSummary(mockSummary);
      setLoading(false);
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setContent(event.target?.result as string);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="p-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold gold-text">Content Summarizer</h1>
        <p className="text-foreground/60">Summarize articles, documents, and PDFs in seconds</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Control Panel */}
        <div className="lg:col-span-1 space-y-6">
          <div className="card-elegant">
            <h2 className="text-lg font-semibold mb-4">Settings</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-3">Summary Length</label>
                <div className="space-y-2">
                  {summaryLengths.map((length) => (
                    <label key={length.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="summaryLength"
                        value={length.value}
                        checked={summaryLength === length.value}
                        onChange={(e) => setSummaryLength(e.target.value)}
                        className="w-4 h-4 accent-primary"
                      />
                      <span className="text-sm">{length.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Upload Document</label>
                <label className="block cursor-pointer">
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 smooth-transition bg-secondary/20">
                    <Upload className="w-6 h-6 mx-auto text-foreground/40 mb-2" />
                    <p className="text-xs text-foreground/60">Upload .txt or .pdf files</p>
                  </div>
                  <input
                    type="file"
                    accept=".txt,.pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>

              <button
                onClick={handleSummarize}
                disabled={!content.trim() || loading}
                className="button-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Zap className="w-5 h-5" />
                {loading ? 'Summarizing...' : 'Summarize'}
              </button>
            </div>
          </div>

          {/* Document History */}
          <div className="card-elegant">
            <h2 className="text-lg font-semibold mb-4">History</h2>
            <div className="space-y-2 text-sm text-foreground/60">
              <p>Summaries will appear here</p>
            </div>
          </div>
        </div>

        {/* Content & Summary Panels */}
        <div className="lg:col-span-2 space-y-6">
          {/* Source Content */}
          <div className="card-elegant">
            <h2 className="text-lg font-semibold mb-4">Original Content</h2>

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Paste your article, document, or any text here to summarize..."
              className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 smooth-transition focus:border-primary/50 outline-none resize-none h-40"
            />

            <div className="mt-4 text-sm text-foreground/60">
              {content.length} characters
            </div>
          </div>

          {/* Summary Output */}
          <div className="card-elegant">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Summary</h2>
              {summary && (
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="p-2 hover:bg-secondary/50 rounded-lg smooth-transition flex items-center gap-2 text-sm"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                  <button className="p-2 hover:bg-secondary/50 rounded-lg smooth-transition flex items-center gap-2 text-sm">
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                </div>
              )}
            </div>

            {summary ? (
              <div className="bg-background/50 rounded-lg p-6 overflow-y-auto max-h-96">
                <pre className="text-sm text-foreground/80 whitespace-pre-wrap break-words">
                  {summary}
                </pre>
              </div>
            ) : (
              <div className="bg-background/50 rounded-lg p-12 text-center">
                <div className="space-y-4">
                  <p className="text-foreground/60">Summary will appear here</p>
                  <p className="text-sm text-foreground/40">Paste content and click Summarize to get started</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
