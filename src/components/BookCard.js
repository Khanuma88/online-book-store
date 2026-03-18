import Button from "./Button";

function BookCard({ id, title, author, genre, price, rating, available, inCart, onAddToCart, onDelete }) {
  const stars = "★".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating));

  const handleAddToCart = () => {
    onAddToCart({ id, title, author, genre, price, rating, available });
  };

  return (
    <div className={`book-card ${!available ? "unavailable" : ""}`}>
      <div className="book-card-genre">{genre}</div>
      <h4>{title}</h4>
      <p className="author">by {author}</p>
      <div className="book-card-rating">{stars} ({rating})</div>
      <div className="book-card-footer">
        <span className="book-card-price">${price.toFixed(2)}</span>
        <span className={`book-card-status ${available ? "in-stock" : "out-of-stock"}`}>
          {available ? "In Stock" : "Out of Stock"}
        </span>
      </div>
      <div className="book-card-actions">
        <Button
          text={inCart ? "✓ In Cart" : "Add to Cart"}
          onClick={handleAddToCart}
          disabled={!available || inCart}
        />
        <Button text="Delete" onClick={() => onDelete(id)} variant="danger" />
      </div>
    </div>
  );
}

export default BookCard;