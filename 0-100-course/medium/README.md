# Medium Clone

[Vercel Deployment Link](https://mediumfrontend.vercel.app/)

## Description

A full-stack Medium-inspired blogging platform built with React, TypeScript, and Node.js. This project allows users to create accounts, publish articles, and engage with content in a clean, modern interface similar to Medium.com.

## Features

- **User Authentication**
  - Secure signup and signin functionality
  - JWT-based authentication
  - Protected routes for authenticated users

- **Blog Management**
  - Create and publish blog posts
  - Rich text editing capabilities
  - View all published blogs
  - Read individual blog posts
  - Author information display

- **Modern UI/UX**
  - Responsive design using Tailwind CSS
  - Clean and intuitive interface
  - Loading states and error handling
  - Navigation between different sections

## Demo

Experience the live application: [Medium Clone](https://mediumfrontend.vercel.app/)

## Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express
- PostgreSQL
- JWT Authentication

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL

### Frontend Setup

1. Clone the repository:
   ```bash
   cd medium-clone/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```env
   VITE_BACKEND_URL=your_backend_url
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd ../backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```env
   DATABASE_URL=your_postgresql_url
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### User Routes
- `POST /api/user/signup` - Register a new user
- `POST /api/user/signin` - Authenticate user

### Blog Routes
- `GET /api/blog` - Get all blogs
- `GET /api/blog/:id` - Get specific blog
- `POST /api/blog` - Create new blog
- `PUT /api/blog/:id` - Update blog
- `DELETE /api/blog/:id` - Delete blog

## Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── config/
│   │   └── App.tsx
│   └── package.json
│
└── backend/
    ├── src/
    │   ├── routes/
    │   ├── controllers/
    │   └── middleware/
    └── package.json
```