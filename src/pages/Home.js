import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import AddBookForm from "../components/AddBookForm";
import StatsBlock from "../components/StatsBlock";
import CartPanel from "../components/CartPanel";

function Home({ books, cart, onAddBook, onDeleteBook, onAddToCart, onRemoveFromCart }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [showForm, setShowForm] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const genres = books.reduce((acc, book) => {
    if (!acc.includes(book.genre)) {
      return [...acc, book.genre];
    }
    return acc;
  }, []);

  let filteredBooks = books.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    const matchGenre = genre ? book.genre === genre : true;
    return matchSearch && matchGenre;
  });

  if (sortBy === "price-asc") {
    filteredBooks = [...filteredBooks].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredBooks = [...filteredBooks].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredBooks = [...filteredBooks].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "title") {
    filteredBooks = [...filteredBooks].sort((a, b) => a.title.localeCompare(b.title));
  }

  const handleAddBook = (newBook) => {
    onAddBook(newBook);
    setShowForm(false);
  };

  return (
    <div className="container">
      <div className="hero">
        <h2>Welcome to our Book Store</h2>
        <p>Browse our collection of amazing books.</p>
        <div className="hero-actions">
          <button onClick={() => setShowForm(!showForm)}>
            {showForm ? "✕ Close" : "Add Book"}
          </button>
          <button className="btn-secondary" onClick={() => setShowCart(!showCart)}>
            {showCart ? "✕ Close Cart" : `Cart (${cart.length})`}
          </button>
        </div>
      </div>

      <StatsBlock books={books} cart={cart} />

      {showForm && <AddBookForm onAddBook={handleAddBook} />}
      {showCart && <CartPanel cart={cart} onRemove={onRemoveFromCart} />}

      <SearchBar
        search={search}
        onSearch={setSearch}
        genre={genre}
        onGenreChange={setGenre}
        sortBy={sortBy}
        onSortChange={setSortBy}
        genres={genres}
      />

      <p className="results-count">
        Showing <strong>{filteredBooks.length}</strong> of <strong>{books.length}</strong> books
      </p>

      <BookList
        books={filteredBooks}
        cart={cart}
        onAddToCart={onAddToCart}
        onDelete={onDeleteBook}
      />
    </div>
  );
}

export default Home;