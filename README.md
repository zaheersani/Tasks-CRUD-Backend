# Backend API - CRUD Application

This is the backend API for a CRUD application with authentication, built using Node.js, Express, and MongoDB. The API provides endpoints for user authentication (login and signup) and managing tasks.

## Features

- User authentication with JWT (JSON Web Tokens)
- Password hashing using bcrypt
- CRUD operations for tasks
- Middleware for protected routes
- Modular structure for scalability

---

## Requirements

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Cloud)
- A package manager: [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zaheersani/Tasks-CRUD-Backend.git
   cd Tasks-CRUD-Backend
   ```

2. Install dependencies:
```
npm install
```

3. Create a ```.env``` file in the root directory and configure the following environment variables:
```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>?retryWrites=true&w=majority
JWT_SECRET=your_secret_key
```

4. Start the server:
```
npm start
```

## Project Structure
```
backend/
├── server.js               # Entry point for the application
├── .env                    # Environment variables
├── models/
│   ├── User.js             # User schema
│   ├── Task.js             # Task schema
├── routes/
│   ├── auth.js             # Authentication routes
│   ├── tasks.js            # Task routes
└── middleware/
    └── authMiddleware.js   # Middleware for route protection
```