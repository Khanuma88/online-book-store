import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const initialBooks = [
  { id: 1, title: "React Basics", author: "John Smith", genre: "Programming", price: 12.99, rating: 4.5, available: true },
  { id: 2, title: "JavaScript Guide", author: "Anna Brown", genre: "Programming", price: 10.99, rating: 4.8, available: true },
  { id: 3, title: "Web Development", author: "Mike Johnson", genre: "Programming", price: 11.99, rating: 4.2, available: true },
  { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", price: 8.99, rating: 4.6, available: true },
  { id: 5, title: "1984", author: "George Orwell", genre: "Dystopia", price: 9.49, rating: 4.9, available: true },
  { id: 6, title: "Dune", author: "Frank Herbert", genre: "Sci-Fi", price: 14.99, rating: 4.7, available: true },
];

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [cart, setCart] = useState([]);

  const addBook = (newBook) => {
    const book = { ...newBook, id: Date.now() };
    setBooks((prev) => [...prev, book]);
  };

  const deleteBook = (id) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
    setCart((prev) => prev.filter((b) => b.id !== id));
  };

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
      <Header cartCount={cart.length} />
      <Navbar />
      <Home
        books={books}
        cart={cart}
        onAddBook={addBook}
        onDeleteBook={deleteBook}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
      />
      <Footer />
    </div>
  );
}

export default App;