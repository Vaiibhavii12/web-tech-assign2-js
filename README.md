# NEXUS-AI - Premium AI Workspace Platform

An elegant, sophisticated SaaS platform providing AI-powered tools for content creation, code generation, translation, and more.

## ✨ Features

### AI Tools
- **Code Generator** - Generate, debug, and refactor code in multiple programming languages
- **Image Analyzer** - Upload images to extract text, analyze content, and get insights
- **Translator** - Real-time translation between 50+ languages with context awareness
- **Content Summarizer** - Summarize documents, articles, and PDFs instantly
- **Content Writer** - Generate essays, blog posts, marketing copy, and creative content

### Platform Features
- 🎨 **Elegant Dark Theme** - Premium aesthetic with gold accents and glass-morphism effects
- ⚡ **Real-time AI Processing** - Streaming responses with instant results
- 📊 **Usage Analytics** - Track API calls, document processing, and time saved
- 🔐 **Secure & Private** - Your data is encrypted and never shared
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🎯 **Intuitive Interface** - Clean, modern UI with smooth animations

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Next.js 15 with React 19
- **Styling**: Tailwind CSS with custom elegant color palette
- **Design System**: Custom glass-morphism components with smooth transitions
- **Architecture**: Server Components + Client Components pattern

### Color Palette
- **Primary**: Deep Navy (#0f0f1e) background with Gold (#d4af37) accents
- **Neutrals**: Slate grays for secondary elements
- **Accent**: Rose gold for premium feel
- **Typography**: Modern sans-serif (Geist font)

## 📁 Project Structure

```
app/
├── page.tsx                          # Landing page
├── pricing/
│   └── page.tsx                      # Pricing page
└── dashboard/
    ├── layout.tsx                    # Dashboard layout with sidebar
    ├── page.tsx                      # Dashboard home
    ├── settings/
    │   └── page.tsx                  # User settings
    └── tools/
        ├── code/
        │   └── page.tsx              # Code Generator
        ├── image/
        │   └── page.tsx              # Image Analyzer
        ├── translate/
        │   └── page.tsx              # Translator
        ├── summarize/
        │   └── page.tsx              # Content Summarizer
        └── write/
            └── page.tsx              # Content Writer

lib/
├── hooks.ts                          # Custom React hooks
└── utils.ts                          # Utility functions

components/
└── ui/                               # shadcn/ui components

app/
├── globals.css                       # Global styles & design tokens
├── layout.tsx                        # Root layout
└── [other page routes]
```

## 🎨 Design System

### Color Tokens
```css
--background: #0f0f1e (Deep Navy)
--foreground: #f5f5f7 (Off White)
--primary: #d4af37 (Gold)
--secondary: #2d2d44 (Slate)
--accent: #d4af37 (Gold)
--border: #2d2d44 (Slate)
--card: #1a1a2e (Dark Card)
```

### Component Classes
- `.card-elegant` - Premium card styling
- `.button-primary` - Primary action buttons
- `.button-secondary` - Secondary actions
- `.glass-effect` - Glass-morphism effect
- `.smooth-transition` - Smooth transitions
- `.gold-text` - Gold accent text
- `.gold-glow` - Gold glow effect

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm/pnpm/yarn

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd nexus-ai

# Install dependencies
pnpm install

# Run the development server
pnpm dev

# Open browser to http://localhost:3000
```

### Build for Production
```bash
pnpm run build
pnpm start
```

## 📝 Pages Overview

### Landing Page (`/`)
- Hero section with compelling CTA
- Tools showcase grid
- Features overview
- Testimonials & FAQ
- Call-to-action section
- Elegant footer

### Dashboard (`/dashboard`)
- Main dashboard with stats overview
- Quick access to recent tools
- All tools grid
- Premium upgrade prompt
- Real-time usage analytics

### AI Tools
Each tool features:
- Elegant input panel
- Real-time processing
- Copy/Export functionality
- History management
- Advanced options

### Settings (`/dashboard/settings`)
- Profile management
- Preferences & theme
- API key management
- Subscription status
- Danger zone actions

### Pricing (`/pricing`)
- Three-tier pricing model
- Feature comparison
- FAQ section
- Free trial CTA

## 🎯 Key Design Features

### Aesthetic
- **Dark Theme**: Reduces eye strain, modern look
- **Gold Accents**: Premium, luxury feel
- **Glass-morphism**: Frosted glass effects on cards
- **Smooth Animations**: Subtle transitions for interactivity
- **Careful Spacing**: Breathing room between elements

### Interactions
- Hover states on all interactive elements
- Loading states with animations
- Success/error feedback
- Smooth page transitions
- Responsive touch targets

### Typography
- Bold headings for hierarchy
- Clear body text for readability
- Monospace for code display
- Semantic HTML structure

## 🔄 AI Integration Points

Currently using mock data. Ready to integrate:
- Vercel AI SDK for streaming responses
- OpenAI, Anthropic, or other LLM providers
- Real-time updates with Supabase
- File uploads with Vercel Blob
- Database operations with Supabase

## 📊 Future Enhancements

- [ ] Real AI model integration
- [ ] User authentication system
- [ ] Database for history storage
- [ ] File upload & processing
- [ ] Subscription payments (Stripe)
- [ ] Email notifications
- [ ] Advanced analytics dashboard
- [ ] API rate limiting & usage tracking
- [ ] Team collaboration features
- [ ] Custom model fine-tuning

## 🤝 Contributing

Contributions welcome! Please follow the existing code style and design system.

## 📄 License

MIT License - feel free to use this project commercially.

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Documentation](https://react.dev)
- [Vercel AI SDK](https://sdk.vercel.ai)

---

Built with ❤️ using Next.js, React, and Tailwind CSS
