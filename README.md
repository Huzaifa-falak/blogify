🚀 BLOGIFY - Your Modern Blogging Platform


📝 Project Description
Blogify is a powerful, full-stack blogging platform built with cutting-edge web technologies. It's a complete solution for content creators who want to publish, manage, and share their blogs effortlessly. Whether you're a blogger, writer, or content creator, Blogify provides an intuitive interface with professional features to bring your ideas to life.



✨ Key Features

👨‍💻 For Authors
Create & Publish Blogs - Write rich-text blogs using an advanced editor
Dashboard - Manage all your content from a centralized hub
Blog Management - Edit, publish, unpublish, and delete blogs
Comment Moderation - View and manage reader comments
Image Upload - Upload images directly to cloud storage


👥 For Readers
Browse Blogs - Discover published blogs from all authors
Read Blog Details - View full blog posts with rich formatting
Comment & Engage - Leave comments and interact with content



🛠️ Tech Stack
Frontend (Client)
React 19 - Modern UI library with hooks
Vite - Lightning-fast build tool
Tailwind CSS - Utility-first styling
React Router - Client-side navigation
Quill Editor - Rich text editing
Axios - HTTP client
React Hot Toast - Notifications
Moment.js - Date/time formatting
Backend (Server)
Node.js - JavaScript runtime
Express.js - Web framework
MongoDB - NoSQL database
Mongoose - ODM for MongoDB
JWT - Secure authentication
Bcrypt.js - Password hashing
Cloudinary - Cloud image storage
Multer - File upload handling
CORS - Cross-origin support
📂 Project Structure
Code
blogify/
├── Blogify-FullStack/
│   ├── client/                 # React Frontend
│   │   ├── src/
│   │   │   ├── pages/         # Home, Blog, Author Pages
│   │   │   ├── components/    # Reusable Components
│   │   │   ├── context/       # Global State (AppContext)
│   │   │   └── App.jsx        # Main App Component
│   │   └── package.json
│   │
│   └── server/                # Node.js Backend
│       ├── routes/            # API Routes
│       │   ├── blogRoutes.js
│       │   ├── commentRoutes.js
│       │   └── userRoutes.js
│       ├── controllers/       # Business Logic
│       ├── middleware/        # Auth, File Upload
│       ├── configs/           # DB & Cloudinary Config
│       ├── server.js          # Entry Point
│       └── package.json
│
└── LICENSE
🚀 API Endpoints



Blog Endpoints


POST /api/blog/add - Create new blog (Protected)
GET /api/blog/all - Fetch all published blogs
GET /api/blog/published/:blogId - Get single blog details
DELETE /api/blog/delete/:blogId - Delete blog (Protected)
PUT /api/blog/toggle-publish/:blogId - Publish/Unpublish (Protected)
Comment Endpoints
POST /api/comment/add - Add comment (Protected)
GET /api/comment/:blogId - Fetch blog comments
DELETE /api/comment/delete/:commentId - Delete comment (Protected)
User Endpoints
POST /api/user/login - User login
POST /api/user/register - User registration
🔐 Security Features
✅ JWT Authentication - Secure token-based auth ✅ Protected Routes - Author-only endpoints ✅ Password Hashing - Bcrypt encryption ✅ CORS Protection - Cross-origin security ✅ Environment Variables - Secure config management

🎯 User Flow
Author Journey
Register/Login → Get JWT Token
Navigate to Dashboard
Create blog with rich editor & image upload
Preview & Publish
Manage comments & blogs
Reader Journey
Visit home page
Browse published blogs
Click to read full blog
Leave comments
Explore more content
🔧 Installation & Setup
Prerequisites
Node.js & npm
MongoDB
Cloudinary Account
Git
Backend Setup
bash
cd Blogify-FullStack/server
npm install
npm run server
Frontend Setup
bash
cd Blogify-FullStack/client
npm install
npm run dev
📋 Environment Variables
Server (.env)
Code
PORT=3000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_secret_key
CLOUDINARY_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
Client (.env.local)
Code

VITE_BASE_URL=http://localhost:3000


📊 Performance & Optimization
⚡ Vite for ultra-fast development
🎨 Tailwind CSS for optimized styling
🖼️ Cloudinary for efficient image delivery
🔄 Context API for state management
📱 Responsive design for all devices
💡 Future Enhancements
🔍 Search & Filter blogs
🏷️ Categories & Tags
❤️ Like/Bookmark functionality
👤 User Profiles
📧 Newsletter subscription
🌙 Dark mode
📱 Mobile app
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👤 Author
Huzaifa-falak - Full Stack Developer

🌐 GitHub | 💻 Portfolio

🤝 Contributing
Contributions are welcome! Feel free to fork, create issues, and submit pull requests.

💬 Support
For issues, questions, or suggestions, please create an issue on GitHub.

Blogify - Write. Share. Inspire. 🚀
