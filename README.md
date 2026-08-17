# 🚀 Blogify — Modern Full-Stack Blogging Platform

> **Write. Share. Inspire.**

Blogify is a modern **full-stack blogging platform** built with the MERN stack. It provides content creators with a complete platform to create, manage, publish, and share engaging blog content through a clean, intuitive, and responsive interface.

The application includes secure authentication, author dashboards, rich-text blog editing, image uploads, blog management, comments, and RESTful APIs — demonstrating real-world full-stack web development practices.

---

## ✨ Key Features

### 👨‍💻 Author Features

* 🔐 Secure user registration and authentication
* 📝 Create and publish blog posts
* ✍️ Rich-text editing with Quill Editor
* 📊 Centralized author dashboard
* ✏️ Edit existing blog posts
* 📤 Publish and unpublish blogs
* 🗑️ Delete blog posts
* 💬 View and manage comments
* 🖼️ Upload blog images to Cloudinary
* 🔒 Protected author-only routes

### 👥 Reader Features

* 🏠 Browse published blogs
* 📖 Read complete blog posts
* 🖼️ View rich blog content and images
* 💬 Leave comments
* 🔎 Explore content from different authors
* 📱 Responsive experience across devices

---

## 🛠️ Tech Stack

### Frontend

* **React 19** — Component-based UI development
* **Vite** — Fast development and optimized builds
* **Tailwind CSS** — Modern responsive styling
* **React Router** — Client-side navigation
* **Quill Editor** — Rich-text blog editing
* **Axios** — HTTP/API communication
* **React Hot Toast** — User notifications
* **Moment.js** — Date and time formatting

### Backend

* **Node.js** — JavaScript runtime
* **Express.js** — Backend and REST API framework
* **MongoDB** — NoSQL database
* **Mongoose** — MongoDB object modeling
* **JWT** — Authentication and authorization
* **Bcrypt.js** — Secure password hashing
* **Cloudinary** — Cloud image storage
* **Multer** — File upload handling
* **CORS** — Cross-origin request handling

---

## 🏗️ Application Architecture

Blogify follows a client-server architecture where the React frontend communicates with a Node.js/Express backend through RESTful APIs.

```text
                    ┌──────────────────────┐
                    │       BLOGIFY        │
                    │  Blogging Platform   │
                    └──────────┬───────────┘
                               │
                 ┌─────────────┴─────────────┐
                 │                           │
        ┌────────▼────────┐        ┌────────▼────────┐
        │    FRONTEND     │        │     BACKEND     │
        │     React       │◄──────►│ Node + Express  │
        │     Vite        │  REST  │      API        │
        └─────────────────┘        └────────┬────────┘
                                            │
                              ┌─────────────┴─────────────┐
                              │                           │
                     ┌────────▼────────┐       ┌────────▼────────┐
                     │    MongoDB      │       │   Cloudinary    │
                     │    Database     │       │ Image Storage   │
                     └─────────────────┘       └─────────────────┘
```

---

## 📂 Project Structure

```text
Blogify/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   └── Reusable UI Components
│   │   │
│   │   ├── pages/
│   │   │   ├── Home
│   │   │   ├── Blog
│   │   │   └── Author
│   │   │
│   │   ├── context/
│   │   │   └── AppContext
│   │   │
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── configs/
│   │   ├── Database Configuration
│   │   └── Cloudinary Configuration
│   │
│   ├── controllers/
│   │   └── Business Logic
│   │
│   ├── middleware/
│   │   ├── Authentication
│   │   └── File Upload
│   │
│   ├── routes/
│   │   ├── blogRoutes.js
│   │   ├── commentRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── LICENSE
└── README.md
```

---

# 🚀 API Endpoints

## 📝 Blog Endpoints

| Method | Endpoint                           | Description               | Authentication |
| ------ | ---------------------------------- | ------------------------- | -------------- |
| POST   | `/api/blog/add`                    | Create a new blog         | 🔒 Protected   |
| GET    | `/api/blog/all`                    | Fetch all published blogs | Public         |
| GET    | `/api/blog/published/:blogId`      | Get blog details          | Public         |
| DELETE | `/api/blog/delete/:blogId`         | Delete a blog             | 🔒 Protected   |
| PUT    | `/api/blog/toggle-publish/:blogId` | Publish / unpublish blog  | 🔒 Protected   |

## 💬 Comment Endpoints

| Method | Endpoint                         | Description         | Authentication |
| ------ | -------------------------------- | ------------------- | -------------- |
| POST   | `/api/comment/add`               | Add a comment       | 🔒 Protected   |
| GET    | `/api/comment/:blogId`           | Fetch blog comments | Public         |
| DELETE | `/api/comment/delete/:commentId` | Delete a comment    | 🔒 Protected   |

## 👤 User Endpoints

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/user/register` | Register a new user |
| POST   | `/api/user/login`    | Authenticate user   |

---

# 🔐 Security Features

Blogify implements several security-focused practices:

* ✅ JWT-based authentication
* ✅ Protected API routes
* ✅ Authentication middleware
* ✅ Password hashing with Bcrypt.js
* ✅ Environment-based configuration
* ✅ CORS configuration
* ✅ Server-side validation
* ✅ Secure separation of frontend and backend configuration

> Sensitive credentials such as MongoDB connection strings, JWT secrets, and Cloudinary API credentials are stored in environment variables and are not committed to the repository.

---

# 🔄 User Flow

## Author Journey

```text
Register / Login
       ↓
Receive Authentication Token
       ↓
Access Author Dashboard
       ↓
Create Blog
       ↓
Add Rich Content + Image
       ↓
Preview Blog
       ↓
Publish
       ↓
Manage Blogs & Comments
```

## Reader Journey

```text
Visit Blogify
      ↓
Browse Published Blogs
      ↓
Open Blog
      ↓
Read Full Content
      ↓
Leave Comment
      ↓
Explore More Blogs
```

---

# ⚙️ Installation & Setup

## Prerequisites

Make sure the following are installed on your system:

* Node.js
* npm
* MongoDB
* Git
* Cloudinary Account

---

## 1. Clone the Repository

```bash
git clone https://github.com/huzaifafalak/blogify.git
cd blogify
```

---

## 2. Backend Setup

Navigate to the server directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `server` directory:

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Start the backend server:

```bash
npm run server
```

---

## 3. Frontend Setup

Open a new terminal and navigate to the client directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file:

```env
VITE_BASE_URL=http://localhost:3000
```

Start the development server:

```bash
npm run dev
```

---

# 📊 Performance & Optimization

Blogify uses modern development tools and practices to provide a fast and efficient experience:

* ⚡ Vite for fast development and optimized production builds
* 🎨 Tailwind CSS for efficient responsive styling
* 🖼️ Cloudinary for cloud-based image management
* 🔄 React Context API for global state management
* 📦 Modular component architecture
* 📱 Responsive design for different screen sizes
* 🔌 RESTful API architecture

---

# 🧠 What I Learned

Building Blogify provided hands-on experience with real-world full-stack development concepts, including:

* MERN stack application architecture
* RESTful API development
* JWT authentication and authorization
* Protected routes
* MongoDB database management
* Mongoose data modeling
* React component architecture
* API integration with Axios
* File upload handling
* Cloudinary integration
* Rich-text content management
* Environment variable management
* Express middleware
* Error handling
* Git and GitHub workflow

---

# 🔮 Future Improvements

Planned improvements for future versions include:

* 🔍 Advanced blog search and filtering
* 🏷️ Categories and tags
* ❤️ Like and bookmark functionality
* 👤 User profiles
* 💬 Advanced comment system
* 📧 Newsletter subscriptions
* 🔔 Notifications
* 🌙 Dark mode
* 📊 Author analytics dashboard
* 📱 Mobile application

---

# 🤝 Contributing

Contributions are welcome.

If you'd like to improve Blogify:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit your changes
5. Push your branch
6. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for more information.

---

# 👨‍💻 Author

## Huzaifa Falak

**MERN Stack Developer**

Passionate about building modern, scalable, and user-focused web applications using JavaScript and the MERN stack.

* 🌐 GitHub: https://github.com/huzaifafalak
* 💼 Portfolio: Add your portfolio URL here
* 🔗 LinkedIn: Add your LinkedIn URL here

---

# ⭐ Support

If you found this project useful or interesting, consider giving the repository a **⭐ Star**.

<div align="center">

## Blogify

### Write. Share. Inspire. 🚀

**Built with ❤️ using the MERN Stack**

</div>
