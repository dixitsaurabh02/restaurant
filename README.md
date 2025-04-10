# Restaurant Management System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for restaurant management with features like menu management, cart functionality, and online ordering.

## Features

- User Authentication (Login/Signup)
- Menu Management
- Shopping Cart
- Order Processing
- Payment Integration
- Admin Dashboard
- Responsive Design

## Tech Stack

- **Frontend:**
  - React.js
  - Redux Toolkit for state management
  - Tailwind CSS for styling
  - React Router for navigation

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for database
  - JWT for authentication

## Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd Mern-Stack-Restaurant-Management-System-Using
```

2. Install dependencies for backend
```bash
cd backend
npm install
```

3. Install dependencies for frontend
```bash
cd ../frontend
npm install
```

4. Create .env files

Backend (.env):
```
MONGODB_USERNAME=your_username
MONGODB_PASSWORD=your_password
MONGODB_URL="mongodb://localhost:27017/rms"
JWT_SECRET=your_secret
```

Frontend (.env):
```
REACT_APP_SERVER_DOMIN=http://localhost:8090
REACT_APP_ADMIN_EMAIL=your_admin_email
JWT_SECRET=your_secret
```

5. Run the application

Backend:
```bash
cd backend
npm start
```

Frontend:
```bash
cd frontend
npm start
```

## Usage

1. Access the application at `http://localhost:3000`
2. Create an account or login
3. Browse the menu
4. Add items to cart
5. Proceed to checkout
6. Enter delivery address
7. Complete payment

## Admin Features

1. Access admin dashboard
2. Manage menu items
3. View orders
4. Manage users
5. Track sales











