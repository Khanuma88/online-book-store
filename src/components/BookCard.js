import Button from "./Button";

function BookCard({ title, author }) {
  const handleClick = () => {
    alert(`You added "${title}" to cart`);
  };

  return (
    <div className="book-card">
      <h4>{title}</h4>
      <p>{author}</p>
      <Button text="Add to Cart" onClick={handleClick} />
    </div>
  );
}

export default BookCard;