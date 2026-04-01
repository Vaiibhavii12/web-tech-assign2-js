'use client';

import { useState } from 'react';
import { Copy, Check, Download, ArrowRightLeft, Volume2 } from 'lucide-react';

export default function TranslatorPage() {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('english');
  const [targetLang, setTargetLang] = useState('spanish');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const languages = [
    'english', 'spanish', 'french', 'german', 'italian', 'portuguese',
    'russian', 'japanese', 'korean', 'chinese', 'arabic', 'hindi',
    'turkish', 'dutch', 'swedish', 'polish', 'thai', 'vietnamese'
  ];

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;

    setLoading(true);
    setTranslatedText('');

    // Simulate translation
    setTimeout(() => {
      const mockTranslation = `[${targetLang.charAt(0).toUpperCase() + targetLang.slice(1)} Translation]

${sourceText}

---
This is a simulated translation. In production, this would be translated to ${targetLang} using advanced AI models with context awareness and natural language understanding.`;
      setTranslatedText(mockTranslation);
      setLoading(false);
    }, 1200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSwap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText('');
  };

  return (
    <div className="p-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold gold-text">Translator</h1>
        <p className="text-foreground/60">Translate between 50+ languages with context-aware precision</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Source Panel */}
        <div className="space-y-4">
          <div className="card-elegant">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Source Language</h2>
              <button className="p-2 hover:bg-secondary/50 rounded-lg transition-all duration-300 ease-out">
                <Volume2 className="w-5 h-5 text-foreground/60" />
              </button>
            </div>

            <select
              value={sourceLang}
              onChange={(e) => setSourceLang(e.target.value)}
              className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground transition-all duration-300 ease-out focus:border-primary/50 outline-none mb-4"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang} className="bg-card text-foreground">
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </option>
              ))}
            </select>

            <textarea
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
              placeholder="Enter text to translate..."
              className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 transition-all duration-300 ease-out focus:border-primary/50 outline-none resize-none h-64"
            />

            <div className="mt-4 text-sm text-foreground/60">
              {sourceText.length} characters
            </div>
          </div>
        </div>

        {/* Target Panel */}
        <div className="space-y-4">
          <div className="card-elegant">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Target Language</h2>
              <div className="flex gap-2">
                <button
                  onClick={handleSwap}
                  className="p-2 hover:bg-secondary/50 rounded-lg transition-all duration-300 ease-out"
                  title="Swap languages"
                >
                  <ArrowRightLeft className="w-5 h-5 text-foreground/60" />
                </button>
                <button className="p-2 hover:bg-secondary/50 rounded-lg transition-all duration-300 ease-out">
                  <Volume2 className="w-5 h-5 text-foreground/60" />
                </button>
              </div>
            </div>

            <select
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
              className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground transition-all duration-300 ease-out focus:border-primary/50 outline-none mb-4"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang} className="bg-card text-foreground">
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </option>
              ))}
            </select>

            <div
              className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground min-h-64 resize-none overflow-y-auto"
            >
              {translatedText ? translatedText : <span className="text-foreground/40">Translation will appear here</span>}
            </div>

            {translatedText && (
              <div className="mt-4 flex gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-secondary/50 rounded-lg transition-all duration-300 ease-out text-sm"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-secondary/50 rounded-lg transition-all duration-300 ease-out text-sm">
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Translate Button */}
      <button
        onClick={handleTranslate}
        disabled={!sourceText.trim() || loading}
        className="button-primary w-full py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Translating...' : 'Translate'}
      </button>

      {/* Language Pairs Info */}
      <div className="card-elegant">
        <h3 className="font-semibold mb-4">Supported Languages</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm text-foreground/70">
          {languages.map((lang) => (
            <div key={lang}>{lang.charAt(0).toUpperCase() + lang.slice(1)}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
