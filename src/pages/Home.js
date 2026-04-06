import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import StatsBlock from "../components/StatsBlock";
import CartPanel from "../components/CartPanel";

function Home({ books, cart, onAddToCart, onRemoveFromCart }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [showCart, setShowCart] = useState(false);  // ← добавила сюда

  const genres = books.reduce((acc, book) => {
    if (!acc.includes(book.genre)) return [...acc, book.genre];
    return acc;
  }, []);

  let filteredBooks = books.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    const matchGenre = genre ? book.genre === genre : true;
    return matchSearch && matchGenre;
  });

  if (sortBy === "price-asc") filteredBooks = [...filteredBooks].sort((a, b) => a.price - b.price);
  else if (sortBy === "price-desc") filteredBooks = [...filteredBooks].sort((a, b) => b.price - a.price);
  else if (sortBy === "rating") filteredBooks = [...filteredBooks].sort((a, b) => b.rating - a.rating);
  else if (sortBy === "title") filteredBooks = [...filteredBooks].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="container">
      <div className="hero">                        {/* ← только один hero */}
        <h2>Welcome to our Book Store</h2>
        <p>Browse our collection of amazing books.</p>
        <div className="hero-actions">
          <button className="btn-secondary" onClick={() => setShowCart(!showCart)}>
            {showCart ? "✕ Close Cart" : `Cart (${cart.length})`}
          </button>
        </div>
      </div>

      {showCart && <CartPanel cart={cart} onRemove={onRemoveFromCart} />}

      <StatsBlock books={books} cart={cart} />

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
      />
    </div>
  );
}

export default Home;