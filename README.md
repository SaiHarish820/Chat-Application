# Chat Application

This project is a real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js) along with Socket.io for real-time communication, TailwindCSS, and Daisy UI for styling. The app features JWT-based authentication, real-time messaging, online user status, global state management, and more.

## Features

- **Tech Stack:** MERN (MongoDB, Express, React, Node.js) + Socket.io + TailwindCSS + Daisy UI
- **Authentication & Authorization:** Managed with JWT (JSON Web Tokens)
- **Real-Time Messaging:** Powered by Socket.io for instant communication
- **Online User Status:** Implemented using Socket.io and React Context API
- **Global State Management:** Using Zustand for efficient state management
- **Error Handling:** Comprehensive error handling on both server and client sides
- **Deployment:** Deploy the application for free with professional-grade setup
- **And Much More:** Explore additional features and enhancements as you build and use the app

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SaiHarish820/Chat-Application.git
   cd Chat-Application
   ```

2. **Install dependencies:**
   ```bash
   npm install
   cd frontend
   npm install
   cd ..
   ```

3. **Setup the `.env` file:**
   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   PORT=your-port
   MONGO_DB_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   NODE_ENV=development
   ```

## Running the App

### Development

1. **Start the backend:**
   ```bash
   npm run server
   ```

2. **Start the frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

   The app will be accessible at `http://localhost:3000`.

### Production

1. **Build the app:**
   ```bash
   npm run build
   ```

2. **Start the app:**
   ```bash
   npm start
   ```

   The app will be accessible at `https://chat-application-ctoy.onrender.com/`.

## Deployment

This application can be deployed for free using services like Heroku, Render, Vercel, or Netlify.

[Deployment Link](https://chat-application-ctoy.onrender.com/)

## Tech Stack

- **Frontend:** React, TailwindCSS, Daisy UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-Time Communication:** Socket.io
- **State Management:** Zustand
- **Authentication:** JWT (JSON Web Tokens)


## License

This project is licensed under the MIT License.
