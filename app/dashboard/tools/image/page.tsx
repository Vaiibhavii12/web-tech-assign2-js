'use client';

import { useState } from 'react';
import { Upload, Zap, Copy, Check, Download, X } from 'lucide-react';
import Image from 'next/image';

export default function ImageAnalyzerPage() {
  const [image, setImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        analyzeImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = (imageData: string) => {
    setLoading(true);
    setAnalysis('');

    // Simulate AI analysis
    setTimeout(() => {
      const mockAnalysis = `Image Analysis Results:

📊 Content Overview:
- Primary subject: Complex digital artwork
- Color palette: Gold, navy, and neutral tones
- Style: Modern, minimalist design

🔍 Detailed Analysis:
- The image contains sophisticated visual elements with elegant styling
- Golden accents create a premium aesthetic
- Layout demonstrates professional design principles
- Multiple layers suggest depth and visual hierarchy

📝 Detected Text:
- Various text elements with clear typography
- Font appears to be modern sans-serif
- Text hierarchy well-established

💡 Insights:
- Image suitable for luxury/premium branding
- Professional and sophisticated appearance
- Well-balanced color composition
- High visual appeal for contemporary design`;
      setAnalysis(mockAnalysis);
      setLoading(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(analysis);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClearImage = () => {
    setImage(null);
    setAnalysis('');
  };

  return (
    <div className="p-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold gold-text">Image Analyzer</h1>
        <p className="text-foreground/60">Upload images to analyze content, extract text, and get insights</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upload Panel */}
        <div className="lg:col-span-1 space-y-6">
          <div className="card-elegant">
            <h2 className="text-lg font-semibold mb-4">Upload Image</h2>

            <label className="block cursor-pointer mb-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-all duration-300 ease-out bg-secondary/20">
                <Upload className="w-12 h-12 mx-auto text-foreground/40 mb-3" />
                <p className="text-sm font-medium mb-1">Drop image here or click to upload</p>
                <p className="text-xs text-foreground/40">PNG, JPG, GIF up to 10MB</p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>

            {image && (
              <div className="space-y-4">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-secondary/20">
                  <img
                    src={image}
                    alt="Uploaded"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={handleClearImage}
                    className="absolute top-2 right-2 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-all duration-300 ease-out"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <button
                  disabled={loading}
                  className="button-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Zap className="w-5 h-5" />
                  {loading ? 'Analyzing...' : 'Analyze Image'}
                </button>
              </div>
            )}
          </div>

          {/* Image Gallery */}
          <div className="card-elegant">
            <h2 className="text-lg font-semibold mb-4">Recent Uploads</h2>
            <div className="text-sm text-foreground/60">
              <p>Your recent uploads will appear here</p>
            </div>
          </div>
        </div>

        {/* Analysis Panel */}
        <div className="lg:col-span-2">
          <div className="card-elegant">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Analysis Results</h2>
              {analysis && (
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
                    Export
                  </button>
                </div>
              )}
            </div>

            {analysis ? (
              <div className="bg-background/50 rounded-lg p-6 overflow-y-auto max-h-96">
                <pre className="text-sm text-foreground/80 whitespace-pre-wrap break-words">
                  {analysis}
                </pre>
              </div>
            ) : (
              <div className="bg-background/50 rounded-lg p-12 text-center">
                <div className="space-y-4">
                  <p className="text-foreground/60">Analysis results will appear here</p>
                  <p className="text-sm text-foreground/40">Upload an image to get started</p>
                </div>
              </div>
            )}
          </div>

          {/* Analysis Options */}
          <div className="card-elegant mt-6">
            <h2 className="text-lg font-semibold mb-4">Analysis Options</h2>
            <div className="space-y-3">
              {[
                { label: 'Extract Text (OCR)', checked: true },
                { label: 'Detect Objects', checked: true },
                { label: 'Analyze Colors', checked: true },
                { label: 'Scene Description', checked: false },
              ].map((option, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={option.checked}
                    className="w-4 h-4 rounded accent-primary"
                  />
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
