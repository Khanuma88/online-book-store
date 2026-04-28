import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import useLocalStorage from "./hooks/useLocalStorage";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import { getBooks, addBook as addBookAPI, deleteBook as deleteBookAPI } from "./services/bookService";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useLocalStorage("cart", []);

  // загружаем книги из API при старте
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const data = await getBooks();
        if (data.length === 0) {
          // если API пустой — добавляем начальные книги
          const initialBooks = [
            { title: "React Basics", author: "John Smith", genre: "Programming", price: 12.99, rating: 4.5, available: true },
            { title: "JavaScript Guide", author: "Anna Brown", genre: "Programming", price: 10.99, rating: 4.8, available: true },
            { title: "Web Development", author: "Mike Johnson", genre: "Programming", price: 11.99, rating: 4.2, available: true },
            { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", price: 8.99, rating: 4.6, available: true },
            { title: "1984", author: "George Orwell", genre: "Dystopia", price: 9.49, rating: 4.9, available: true },
            { title: "Dune", author: "Frank Herbert", genre: "Sci-Fi", price: 14.99, rating: 4.7, available: true },
          ];
          for (const book of initialBooks) {
            await addBookAPI(book);
          }
          const newData = await getBooks();
          setBooks(newData);
        } else {
          setBooks(data);
        }
      } catch (err) {
        setError("Failed to load books. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const addBook = async (newBook) => {
    try {
      const created = await addBookAPI(newBook);
      setBooks((prev) => [...prev, created]);
    } catch {
      setError("Failed to add book.");
    }
  };

  const deleteBook = async (id) => {
    try {
      await deleteBookAPI(id);
      setBooks((prev) => prev.filter((b) => b.id !== id));
      setCart((prev) => prev.filter((b) => b.id !== id));
    } catch {
      setError("Failed to delete book.");
    }
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

 if (loading) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="loading-screen">
          <div className="spinner"></div>
          <p className="loading-text">Loading books...</p>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

  if (error) {
    return (
      <AuthProvider>
        <ThemeProvider>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontSize: "18px", color: "#e74c3c" }}>
            ❌ {error}
          </div>
        </ThemeProvider>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <ThemeProvider>
        <div>
          <Header cartCount={cart.length} />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <Home books={books} cart={cart} onAddToCart={addToCart} onRemoveFromCart={removeFromCart} />
            } />
            <Route path="/books" element={
              <Books books={books} cart={cart} onAddToCart={addToCart} />
            } />
            <Route path="/books/:id" element={
              <BookDetail books={books} cart={cart} onAddToCart={addToCart} />
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <Home
                  books={books}
                  cart={cart}
                  onAddBook={addBook}
                  onDeleteBook={deleteBook}
                  onAddToCart={addToCart}
                  onRemoveFromCart={removeFromCart}
                  isAdmin={true}
                />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;