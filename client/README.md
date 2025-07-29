# 🎨 AI Studio - Text-to-Image Generator

<div align="center">
  <img src="https://readme-typing-svg.demolab.com/?lines=Transform+Text+into+Stunning+Art;AI+Powered+Image+Generation;Professional+MERN+Stack+App;&font=Fira%20Code&center=true&width=500&height=75&color=f97316&vCenter=true&size=22" />
</div>

<div align="center">
  <img alt="AI Art Generation GIF" src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif" width="300px" />
</div>

<div align="center">


[![GitHub Stars](https://img.shields.io/github/stars/utkxrsh13/Text_to_Image?style=for-the-badge&color=yellow)](https://github.com/utkxrsh13/Text_to_Image/stargazers)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)

</div>

## 🚀 Overview

**AI Studio** is a cutting-edge web application that transforms text descriptions into stunning visual artwork using advanced AI technology. Built with the MERN stack, it offers a professional, user-friendly interface for creating, managing, and downloading AI-generated images.

### ✨ Key Features

- 🎨 **AI-Powered Image Generation** - Transform text prompts into high-quality images
- 🎭 **Multiple Art Styles** - Choose from 8+ artistic styles (Realistic, Anime, 3D, Watercolor, etc.)
- 🔐 **Secure Authentication** - JWT-based user authentication system
- 💳 **Credit-Based System** - Flexible pricing with starter credits
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 📚 **Complete History** - Track and manage all your generated images
- ⬇️ **High-Quality Downloads** - Download images in multiple resolutions
- 🌙 **Modern UI/UX** - Professional dark theme with smooth animations



## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Axios** - HTTP client for API calls
- **React Router DOM** - Client-side routing
- **React Toastify** - Beautiful notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing
- **ClipDrop API** - AI image generation service

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- ClipDrop API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/utkxrsh13/Text_to_Image.git
   cd Text_to_Image
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Configuration**
   
   Create `.env` file in the server directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLIPDROP_API=your_clipdrop_api_key
   PORT=8000
   ```

   Create `.env` file in the client directory:
   ```env
   VITE_BACKEND_URL=http://localhost:8000
   ```

5. **Start the Application**
   
   Backend (Terminal 1):
   ```bash
   cd server
   npm start
   ```

   Frontend (Terminal 2):
   ```bash
   cd client
   npm run dev
   ```

6. **Open your browser**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:8000`

## 🎯 Usage Guide

### 1. **Account Setup**
- Create an account or sign in
- Get 5 free credits to start

### 2. **Generate Images**
- Navigate to the generation page
- Choose your preferred art style
- Enter a descriptive prompt
- Click generate and wait for the magic!

### 3. **Manage Your Creations**
- View all generated images in History
- Download high-resolution versions
- Copy prompts for reuse
- Track your credit usage

### 4. **Upgrade Your Plan**
- Visit the pricing page
- Choose from flexible plans
- Get more credits and premium features

## 🎨 Available Art Styles

| Style | Description | Best For |
|-------|-------------|----------|
| **Realistic** | Photographic quality images | Portraits, landscapes |
| **Anime** | Japanese animation style | Characters, fantasy art |
| **Pixel Art** | Retro 8-bit graphics | Game assets, nostalgic art |
| **3D** | Three-dimensional rendered art | Modern designs, products |
| **Watercolor** | Traditional watercolor painting | Soft, artistic scenes |
| **Oil Painting** | Classic oil painting technique | Fine art, portraits |
| **Sketch** | Hand-drawn pencil sketches | Concepts, quick art |
| **Digital Art** | Modern digital artwork | Versatile, contemporary |

## 💰 Pricing Plans

| Plan | Credits | Price | Best For |
|------|---------|-------|----------|
| **Starter** | 100 | $9/month | Casual users |
| **Pro** ⭐ | 500 | $19/month | Regular creators |
| **Enterprise** | 2000 | $49/month | Professional use |

## 📁 Project Structure

```
Text_to_Image/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Main application pages
│   │   ├── context/       # Global state management
│   │   ├── assets/        # Images and static files
│   │   └── index.css      # Global styles
├── server/                # Backend Node.js application
│   ├── config/           # Database configuration
│   ├── controllers/      # Route handlers
│   ├── middlewares/      # Custom middleware
│   ├── models/           # Database schemas
│   ├── routes/           # API routes
│   └── server.js         # Main server file
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/users/credits` - Get user credits

### Image Generation
- `POST /api/image/generate-image` - Generate new image
- `GET /api/users/history` - Get user's generation history

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 🐛 Issues & Support

Found a bug or have a feature request?

- 🐛 [Report a Bug](https://github.com/utkxrsh13/Text_to_Image/issues/new?template=bug_report.md)
- ✨ [Request a Feature](https://github.com/utkxrsh13/Text_to_Image/issues/new?template=feature_request.md)
- 💬 [Join Discussions](https://github.com/utkxrsh13/Text_to_Image/discussions)

## 📈 Roadmap

### Short-term
- [ ] Image editing tools
- [ ] Social sharing features
- [ ] Favorites system
- [ ] Batch generation

### Long-term
- [ ] Mobile app (React Native)
- [ ] Custom AI model training
- [ ] Marketplace for AI art
- [ ] API for developers

## 📊 Stats

<div align="center">
  
[![GitHub Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=utkxrsh13&theme=react-dark&hide_border=true)](https://github.com/utkxrsh13/Text_to_Image)

</div>

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



## 🌟 Show Your Support

If you find this project helpful, please consider:

- ⭐ **Starring** the repository
- 🍴 **Forking** for your own use
- 📢 **Sharing** with others
- 🐛 **Contributing** to improve it

<div align="center">
  <h3>Made with ❤️ by <a href="https://github.com/utkxrsh13">Utkarsh</a></h3>
  <p><em>Transform your imagination into visual reality with AI Studio</em></p>
</div>

---

<div align="center">
  <sub>Built with ❤️ using MERN Stack • © 2025 InspiraPIX</sub>
</div>