# NewsBytes - Modern News Platform

<div align="center"> 
  <h3>Your Gateway to Modern News</h3>
  
  [![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-38B2AC)](https://tailwindcss.com/)
  [![Redux](https://img.shields.io/badge/Redux-5.0.1-764ABC)](https://redux.js.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47A248)](https://www.mongodb.com/)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
  
  [![Stars](https://img.shields.io/github/stars/yourusername/Web-Application-NewsBytes?style=social)](https://github.com/yourusername/Web-Application-NewsBytes/stargazers)
  [![Forks](https://img.shields.io/github/forks/yourusername/Web-Application-NewsBytes?style=social)](https://github.com/yourusername/Web-Application-NewsBytes/network/members)
  [![Issues](https://img.shields.io/github/issues/yourusername/Web-Application-NewsBytes)](https://github.com/yourusername/Web-Application-NewsBytes/issues)
  [![PRs](https://img.shields.io/github/issues-pr/yourusername/Web-Application-NewsBytes)](https://github.com/yourusername/Web-Application-NewsBytes/pulls)
</div>

---

## 📝 Description

> NewsBytes is a modern, responsive news platform built with Next.js and React. It provides a seamless experience for reading and managing news content with features like user authentication, news management, and a beautiful user interface.

### 🌟 Key Highlights

- **Modern Architecture**: Built with the latest web technologies
- **Scalable Design**: Ready for growth and expansion
- **User-Friendly**: Intuitive interface for both readers and administrators
- **Performance Optimized**: Fast loading times and smooth interactions

## 🚀 Features

<table>
<tr>
<td width="100%%">

### 👤 User Features

- 🔐 Secure Authentication
- 👤 User Profiles
- 📱 Responsive Design
- 🌙 Dark/Light Mode
- 🔍 Advanced Search
- 📰 News Categories
- 💬 Comments System

</td>
</tr>
</table>

## 🛠️ Tech Stack

<table>
<tr>
<td width="50%">

### Frontend

- ⚡ Next.js 14
- ⚛️ React 18
- 🔄 Redux & Redux Toolkit
- 🎨 Tailwind CSS
- 📝 CKEditor 5
- 🔌 Axios
- 🔄 SWR for data fetching

</td>
<td width="50%">

### Backend

- 🚀 Node.js
- 🌐 Express.js
- 🔐 JWT Authentication
- 💾 MongoDB
- 📊 Mongoose ODM
- 🔒 Security Middleware
- 📨 API Rate Limiting

</td>
</tr>
</table>

## 🚀 Getting Started

### Prerequisites

<table>
<tr>
<td>

```bash
node -v  # Should be v18 or higher
npm -v   # Should be 6.x or higher
```

</td>
<td>

- Node.js (v18 or higher)
- npm or yarn
- MongoDB
- Git

</td>
</tr>
</table>

### Installation

<details>
<summary>Click to expand installation steps</summary>

1. Clone the repository

```bash
git clone https://github.com/yourusername/Web-Application-NewsBytes.git
cd Web-Application-NewsBytes
```

2. Install Frontend Dependencies

```bash
cd client/src
npm install
```

3. Install Backend Dependencies

```bash
cd ../../server/src
npm install
```

4. Set up environment variables
   Create `.env` files in both client and server directories:

```env
# Client (.env)
NEXT_PUBLIC_API_URL=http://localhost:3001

# Server (.env)
PORT=3001
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

5. Start the Development Servers

Frontend:

```bash
cd client/src
npm run dev
```

Backend:

```bash
cd server/src
npm run dev
```

The application will be available at `http://localhost:3000`

</details>

## 📁 Project Structure

```
Web-Application-NewsBytes/
├── client/
│   └── src/
│       ├── components/     # Reusable UI components
│       ├── pages/         # Next.js pages
│       ├── store/         # Redux store configuration
│       ├── styles/        # Global styles and Tailwind config
│       ├── utils/         # Utility functions
│       └── hooks/         # Custom React hooks
└── server/
    └── src/
        ├── controllers/   # Route controllers
        ├── models/        # Database models
        ├── routes/        # API routes
        ├── middleware/    # Custom middleware
        ├── config/        # Configuration files
        └── utils/         # Utility functions
```

## 👥 Authors

<table>
<tr>
<td align="center">
<a href="https://github.com/NgnPhamGiaHuy">
<img src="https://avatars.githubusercontent.com/NgnPhamGiaHuy" width="100px;" style="border-radius: 4px" alt="NgnPhamGiaHuy"/>
<br />
<sub><b>NgnPhamGiaHuy</b></sub>
</a>
</td>
</tr>
</table>

## 🙏 Acknowledgments

<table>
<tr>
<td>

### 🛠️ Tools & Libraries

- Next.js team for the amazing framework
- React team for the UI library
- Tailwind CSS for the styling system
- MongoDB team for the database

</td>
<td>

### 👥 Community

- The open-source community
- Stack Overflow community
- GitHub community

</td>
</tr>
</table>

---

<div align="center">
  <sub>Built with ❤️ by NgnPhamGiaHuy</sub>
  <br/>
  <sub>© 2024 NewsBytes. All rights reserved.</sub>
</div>
