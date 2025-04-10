# InspiraPix
<h2 align="center">
<img alt="GIF" src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif" width="180px" />
  
<img src="https://readme-typing-svg.demolab.com/?lines=Welcome+to+AI+Image+Generator!;A+MERN+Stack+Application;Generate+Images+from+Text;&font=Fira%20Code&center=true&width=500&height=105&color=00f5d4&vCenter=true&size=26" />
</h2>

# 🎨 AI Image Generator - MERN Stack

<!-- ![Project Screenshot](screenshot.png) Replace with your actual screenshot -->

A full-stack application that transforms text prompts into stunning AI-generated artwork. Users can sign up, generate images, and download their creations.

## ✨ Features

- 🔐 User authentication (Sign up & Login)
- ✍️ Text-to-image generation using AI
- 💾 Image download functionality
- 📱 Responsive design
- 🔒 Secure API endpoints
- 📜 Generation history dashboard

## 🛠️ Technologies Used

### Frontend
- React.js
- Redux Toolkit
- Axios
- Tailwind CSS
- React Icons

### Backend
- Node.js & Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Cloudinary (Image Storage)

### AI Integration
- Stable Diffusion API / DALL-E API

## 🚀 Installation

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas account
- AI API key

### Setup

1. Clone the repository:
```bash
git clone https://github.com/utkxrsh13/Text_to_Image
cd text_to_Image
```

2. Install the dependencies for both client and server:
```bash
cd client
npm install
cd ../server
npm install
```

3. Create a `.env` file in the `server` directory and add your environment variables:
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLIPDROP_API=your_clipdrop_api_key
PORT=your_port
```

### Usage

4. Start the development servers:
```bash
# In the client directory
npm run dev

# In the server directory
npm run server
```

5. Open your browser and navigate to `http://localhost:3000` to see the application in action.


## 🙏 Acknowledgements

- Thanks to the developers of the libraries and tools used in this project.
- Special thanks to the AI API providers for their amazing services.

---

Happy coding! 🚀
