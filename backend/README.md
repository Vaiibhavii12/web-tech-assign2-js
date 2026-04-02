<<<<<<< HEAD
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
=======
# NEXUS-AI Backend

Backend API for NEXUS-AI - Premium AI Workspace Platform built with Node.js, Express.js, and MongoDB.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **File Upload**: Multer
- **CORS**: Enabled for frontend integration

## Project Structure

```
backend/
├── models/           # MongoDB schemas
│   ├── User.js      # User schema with authentication
│   └── History.js   # Tool usage history
├── routes/          # API endpoints
│   ├── auth.js      # Authentication routes
│   ├── tools.js     # AI tools routes
│   ├── history.js   # History management
│   └── user.js      # User profile routes
├── middleware/      # Custom middleware
│   └── auth.js      # JWT authentication
├── server.js        # Express server setup
├── package.json     # Dependencies
└── .env.example     # Environment variables template
```

## Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/nexus-ai
JWT_SECRET=your_super_secret_key_here
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

4. **Start MongoDB**
```bash
# Make sure MongoDB is running locally or use cloud MongoDB
mongod
```

5. **Run the server**
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication

#### Register
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "passwordConfirm": "password123"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>
```

### Tools

All tool endpoints require authentication (JWT token in Authorization header).

#### Code Generator
```http
POST /api/tools/code-generator
Authorization: Bearer <token>
Content-Type: application/json

{
  "language": "javascript",
  "prompt": "create a function to add two numbers"
}
```

#### Image Analyzer
```http
POST /api/tools/image-analyzer
Authorization: Bearer <token>
Content-Type: application/json

{
  "imageUrl": "https://example.com/image.jpg",
  "imageName": "my-image"
}
```

#### Translator
```http
POST /api/tools/translator
Authorization: Bearer <token>
Content-Type: application/json

{
  "text": "Hello, World!",
  "targetLanguage": "spanish"
}
```

#### Summarizer
```http
POST /api/tools/summarizer
Authorization: Bearer <token>
Content-Type: application/json

{
  "text": "Long text to summarize..."
}
```

#### Content Writer
```http
POST /api/tools/content-writer
Authorization: Bearer <token>
Content-Type: application/json

{
  "topic": "Artificial Intelligence",
  "tone": "professional",
  "format": "blog"
}
```

### History

#### Get History
```http
GET /api/history?toolName=codeGenerator&limit=20&skip=0
Authorization: Bearer <token>
```

#### Get Single Item
```http
GET /api/history/:id
Authorization: Bearer <token>
```

#### Update History Item
```http
PUT /api/history/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "My Custom Title",
  "isFavorite": true,
  "tags": ["important", "code"]
}
```

#### Delete History Item
```http
DELETE /api/history/:id
Authorization: Bearer <token>
```

#### Toggle Favorite
```http
PATCH /api/history/:id/favorite
Authorization: Bearer <token>
```

### User Profile

#### Get Profile
```http
GET /api/user/profile
Authorization: Bearer <token>
```

#### Update Profile
```http
PUT /api/user/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "New Name",
  "avatar": "https://example.com/avatar.jpg"
}
```

#### Get API Usage Stats
```http
GET /api/user/stats
Authorization: Bearer <token>
```

#### Change Password
```http
PUT /api/user/change-password
Authorization: Bearer <token>
Content-Type: application/json

{
  "currentPassword": "old123",
  "newPassword": "new123",
  "confirmPassword": "new123"
}
```

#### Upgrade Subscription
```http
POST /api/user/upgrade-subscription
Authorization: Bearer <token>
Content-Type: application/json

{
  "plan": "pro"
}
```

## Database Models

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  avatar: String,
  subscription: String (free/pro/enterprise),
  subscriptionExpiry: Date,
  apiUsage: {
    codeGenerator: Number,
    imageAnalyzer: Number,
    translator: Number,
    summarizer: Number,
    contentWriter: Number
  },
  apiLimits: {
    daily: Number,
    monthly: Number
  },
  createdAt: Date,
  updatedAt: Date
}
```

### History Model
```javascript
{
  userId: ObjectId (ref: User),
  toolName: String (enum),
  input: Mixed,
  output: Mixed,
  metadata: Object,
  fileUrl: String,
  title: String,
  isFavorite: Boolean,
  tags: [String],
  createdAt: Date,
  updatedAt: Date
}
```

## Deployment on Render

1. **Push code to GitHub**
2. **Connect Render to your GitHub repo**
3. **Create new Web Service on Render**
4. **Set Build Command**: `npm install`
5. **Set Start Command**: `npm start`
6. **Add Environment Variables** in Render dashboard:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your secret key
   - `CORS_ORIGIN`: Your frontend URL on Vercel
   - `NODE_ENV`: production

## Mock AI Responses

The backend uses intelligent mock responses for AI tools. To integrate real AI APIs:

1. **OpenAI Integration**:
   ```javascript
   import axios from 'axios';
   const response = await axios.post('https://api.openai.com/v1/chat/completions', {
     // API request
   });
   ```

2. **Update tools.js** with real API calls when needed

## Error Handling

- **400 Bad Request**: Missing or invalid fields
- **401 Unauthorized**: Missing or invalid token
- **403 Forbidden**: Token expired
- **404 Not Found**: Resource not found
- **500 Server Error**: Internal server error

## Best Practices

- Always validate user input
- Use environment variables for sensitive data
- Implement rate limiting for production
- Use HTTPS in production
- Keep JWT secret secure
- Regular database backups
- Monitor server logs

## Testing

Use Postman or cURL to test endpoints:

```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","password":"123456"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"123456"}'
```

## Future Enhancements

- Real AI API integration
- File upload with cloud storage
- Webhooks for automation
- Advanced analytics
- Team collaboration features
- API rate limiting
- Payment processing

## Support

For issues or questions, please create an issue in the GitHub repository.
>>>>>>> fdb9346 (initial commit)
