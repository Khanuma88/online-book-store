# Online Book Store

A React Single Page Application (SPA) for browsing and managing an online book collection.

## Features

- View a list of books with title, author, genre, price, rating, and availability
- Search books by title or author in real time
- Filter by genre
- Sort by price, rating, or title (A–Z)
- Add new books via a validated form
- Delete books from the list
- Add/remove books from cart with live total
- Live statistics panel (total, available, avg. price, cart total)
- Responsive design

## Tech Stack

- React (useState)
- JavaScript ES6+: destructuring, spread, arrow functions, map/filter/reduce
- CSS (Poppins font, gradient theme, flexbox/grid)

## How to Run
npm install
npm start

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
│   └── CartPanel.js
├── pages/
│   └── Home.js
├── App.js
└── App.css