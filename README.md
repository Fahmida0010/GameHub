# GameHub - React Authentication Project

## Purpose

GameHub is a responsive React-based web application where users can explore different games, register or log in securely using Firebase authentication, and manage their profiles. The project demonstrates routing, authentication, and conditional rendering in React.

---

# Project Overview

GameHub is designed as a simple gaming platform interface where users can explore game-related content and manage their accounts through a secure authentication system.

The application focuses on implementing **React routing, Firebase authentication, protected routes, and responsive UI design**. It allows users to register, log in, update their profiles, and navigate through different pages smoothly while maintaining a secure and user-friendly experience.

---

## Live URL

https://nimble-pixie-211fc7.netlify.app/

---

# Repository Link

GitHub Repository
https://github.com/Fahmida0010/GameHub.git

---

## Key Features

### User Authentication

Register with email and password
Login and Logout functionality
Google authentication
Password reset via email
Update user profile information

### Routing System

Implemented using `react-router`
Protected routes for logged-in users
404 Error page with custom layout

### Layouts

`MainLayout`: Includes Header (Navbar) + Footer + `<Outlet />`
`ErrorLayout`: Displays custom 404 page

### Responsive Design

Fully responsive across all devices
Clean and minimal UI using Tailwind CSS

### User Experience

Conditional Navbar (shows profile image if logged in)
Profile management page
Logout instantly updates UI state

---

# Main Technologies Used

* React
* Firebase Authentication
* React Router
* Tailwind CSS
* Vite

---

# npm Packages Used

| Package Name   | Purpose                                        |
| -------------- | ---------------------------------------------- |
| `react`        | Core library for building the UI               |
| `react-dom`    | For DOM rendering                              |
| `react-router` | Routing and navigation between pages           |
| `firebase`     | For user authentication and profile management |
| `tailwindcss`  | For styling and responsiveness                 |
| `vite`         | Development and build tool                     |

---

# Dependencies Installation

Install all dependencies with:

```bash
npm install
```

---

# How to Run the Project Locally

### Step 1: Clone the repository

```bash
git clone https://github.com/Fahmida0010/GameHub.git
```

### Step 2: Navigate to the project folder

```bash
cd GameHub
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Create Environment Variables

Create a `.env.local` file and add Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Step 5: Run the development server

```bash
npm run dev
```

Then open:

```
http://localhost:5173
```

