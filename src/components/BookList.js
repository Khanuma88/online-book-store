import BookCard from "./BookCard";

function BookList({ books, cart, onAddToCart, onDelete, isAdmin }) {
  if (books.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📭</div>
        <p>No books found!</p>
      </div>
    );
  }

  return (
    <div className="book-list">
      {books.map(({ id, title, author, genre, price, rating, available }) => (
        <BookCard
          key={id}
          id={id}
          title={title}
          author={author}
          genre={genre}
          price={price}
          rating={rating}
          available={available}
          inCart={cart.some((b) => b.id === id)}
          onAddToCart={onAddToCart}
          onDelete={isAdmin ? onDelete : null}
          isAdmin={isAdmin}
        />
      ))}
    </div>
  );
}

export default BookList;