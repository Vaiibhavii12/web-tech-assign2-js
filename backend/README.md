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
