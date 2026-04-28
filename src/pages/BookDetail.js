import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function BookDetail({ books, cart, onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === Number(id));

  useEffect(() => {
    if (book) {
      document.title = `${book.title} — BookHaven`;
    }
    return () => {
      document.title = "Online Book Store";
    };
  }, [book]);

  if (!book) {
    return (
      <div className="container">
        <div className="empty-state">
          <div className="empty-icon">📭</div>
          <p>Book not found!</p>
          <button onClick={() => navigate("/books")} style={{ marginTop: "16px" }}>
            ← Back to Books
          </button>
        </div>
      </div>
    );
  }

  const stars = "★".repeat(Math.round(book.rating)) + "☆".repeat(5 - Math.round(book.rating));
  const inCart = cart.some((b) => b.id === book.id);

  return (
    <div className="container">
      <button
        className="btn-secondary"
        onClick={() => navigate("/books")}
        style={{ marginBottom: "24px" }}
      >
        ← Back to Books
      </button>

      <div className="book-detail">
        <div className="book-detail-genre">{book.genre}</div>
        <h2 className="book-detail-title">{book.title}</h2>
        <p className="book-detail-author">by {book.author}</p>
        <div className="book-detail-rating">{stars} ({book.rating})</div>

        <div className="book-detail-info">
          <div className="book-detail-price">${book.price.toFixed(2)}</div>
          <span className={`book-card-status ${book.available ? "in-stock" : "out-of-stock"}`}>
            {book.available ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <p className="book-detail-desc">
          This is a great book in the {book.genre} genre written by {book.author}.
          Rated {book.rating} out of 5 by our readers.
        </p>

        <button
          onClick={() => onAddToCart(book)}
          disabled={!book.available || inCart}
          style={{ marginTop: "16px" }}
        >
          {inCart ? "✓ Already in Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default BookDetail;