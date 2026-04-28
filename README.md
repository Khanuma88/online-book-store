# 📚 Online Book Store

A full-featured React SPA (Single Page Application) for browsing and managing an online book collection. Built as an endterm project for Frontend Development & React course.

## Features

- 🔐 Authentication — login/logout with protected admin route
- 📖 Browse books loaded from MockAPI (real API integration)
- 🔍 Search by title or author in real time
- 🏷️ Filter by genre
- 📊 Sort by price, rating, or title
- ➕ Add new books via validated form (admin only)
- 🗑️ Delete books (admin only)
- 🛒 Cart with localStorage persistence
- 📈 Live statistics panel
- 🌙 Dark/Light mode toggle
- 📱 Responsive design
- 🔗 Dynamic routes — detail page for each book

## Tech Stack

- React (useState, useEffect, useMemo, custom hooks)
- React Router v6 (nested routes, dynamic routes, protected routes)
- Context API (AuthContext, ThemeContext)
- MockAPI — real REST API (GET, POST, DELETE)
- localStorage — cart and theme persistence
- CSS (Poppins font, gradient theme, flexbox/grid)
- JavaScript ES6+: destructuring, spread, arrow functions, map/filter/reduce

## Pages

- `/` — Home page with book list and cart
- `/books` — All books with search and filter
- `/books/:id` — Book detail page (dynamic route)
- `/about` — About page
- `/contact` — Contact form
- `/login` — Login page
- `/admin` — Admin panel (protected route)
- `*` — 404 Not Found page

## How to Run
npm install
npm start

Open [http://localhost:3000](http://localhost:3000)

**Demo login:** username `admin` / password `1234`


## Project Structure

src/
├── components/
│   ├── Header.js
│   ├── Navbar.js
│   ├── Footer.js
│   ├── SearchBar.js
│   ├── BookCard.js
│   ├── BookList.js
│   ├── Button.js
│   ├── AddBookForm.js
│   ├── StatsBlock.js
│   ├── CartPanel.js
│   └── ProtectedRoute.js
├── context/
│   ├── AuthContext.js
│   └── ThemeContext.js
├── hooks/
│   └── useLocalStorage.js
├── pages/
│   ├── Home.js
│   ├── Books.js
│   ├── BookDetail.js
│   ├── About.js
│   ├── Contact.js
│   ├── Login.js
│   └── NotFound.js
├── services/
│   └── bookService.js
├── App.js
└── App.css