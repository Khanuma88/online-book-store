import { useState, useMemo } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import AddBookForm from "../components/AddBookForm";
import StatsBlock from "../components/StatsBlock";
import CartPanel from "../components/CartPanel";

function Home({ books, cart, onAddToCart, onRemoveFromCart, onAddBook, onDeleteBook, isAdmin }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [showCart, setShowCart] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // useMemo — пересчитывает только когда меняется books
  const genres = useMemo(() => {
    return books.reduce((acc, book) => {
      if (!acc.includes(book.genre)) return [...acc, book.genre];
      return acc;
    }, []);
  }, [books]);

  const filteredBooks = useMemo(() => {
    let result = books.filter((book) => {
      const matchSearch =
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase());
      const matchGenre = genre ? book.genre === genre : true;
      return matchSearch && matchGenre;
    });

    if (sortBy === "price-asc") result = [...result].sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") result = [...result].sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") result = [...result].sort((a, b) => b.rating - a.rating);
    else if (sortBy === "title") result = [...result].sort((a, b) => a.title.localeCompare(b.title));

    return result;
  }, [books, search, genre, sortBy]);

  return (
    <div className="container">
      <div className="hero">
        <h2>{isAdmin ? "⚙️ Admin Panel" : "Welcome to our Book Store"}</h2>
        <p>{isAdmin ? "Manage your book collection" : "Browse our collection of amazing books."}</p>
        <div className="hero-actions">
          {isAdmin && (
            <button onClick={() => setShowForm(!showForm)}>
              {showForm ? "✕ Close" : "➕ Add Book"}
            </button>
          )}
          <button className="btn-secondary" onClick={() => setShowCart(!showCart)}>
            {showCart ? "✕ Close Cart" : `Cart (${cart.length})`}
          </button>
        </div>
      </div>

      <StatsBlock books={books} cart={cart} />

      {isAdmin && showForm && (
        <AddBookForm onAddBook={(book) => { onAddBook(book); setShowForm(false); }} />
      )}

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
        onDelete={isAdmin ? onDeleteBook : null}
        isAdmin={isAdmin}
      />
    </div>
  );
}

export default Home;