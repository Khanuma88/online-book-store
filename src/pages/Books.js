import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

function Books({ books, cart, onAddToCart }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const navigate = useNavigate();

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
      <div className="hero">
        <h2>All Books</h2>
        <p>Browse our full collection.</p>
      </div>

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

      {filteredBooks.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📭</div>
          <p>No books found.</p>
        </div>
      ) : (
        <div className="book-list">
          {filteredBooks.map((book) => (
            <div key={book.id}>
              <BookCard
                {...book}
                inCart={cart.some((b) => b.id === book.id)}
                onAddToCart={onAddToCart}
              />
              <button
                className="btn-secondary"
                style={{ width: "100%", marginTop: "8px" }}
                onClick={() => navigate(`/books/${book.id}`)}
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Books;