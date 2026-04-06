import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

const initialBooks = [
  { id: 1, title: "React Basics", author: "John Smith", genre: "Programming", price: 12.99, rating: 4.5, available: true },
  { id: 2, title: "JavaScript Guide", author: "Anna Brown", genre: "Programming", price: 10.99, rating: 4.8, available: true },
  { id: 3, title: "Web Development", author: "Mike Johnson", genre: "Programming", price: 11.99, rating: 4.2, available: true },
  { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", price: 8.99, rating: 4.6, available: true },
  { id: 5, title: "1984", author: "George Orwell", genre: "Dystopia", price: 9.49, rating: 4.9, available: true },
  { id: 6, title: "Dune", author: "Frank Herbert", genre: "Sci-Fi", price: 14.99, rating: 4.7, available: true },
];

function App() {
  const [books] = useState(initialBooks);
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((prev) => {
      const exists = prev.find((b) => b.id === book.id);
      return exists ? prev : [...prev, book];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div>
      <Header />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              books={books}
              cart={cart}
              onAddToCart={addToCart}
              onRemoveFromCart={removeFromCart}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books books={books} cart={cart} onAddToCart={addToCart} />}>
          <Route path="details" element={<h3>Book Details coming soon!</h3>} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;