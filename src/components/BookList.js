import BookCard from "./BookCard";

function BookList() {
  const books = [
    { id: 1, title: "React Basics", author: "John Smith" },
    { id: 2, title: "JavaScript Guide", author: "Anna Brown" },
    { id: 3, title: "Web Development", author: "Mike Johnson" },
  ];

  return (
    <div>
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </div>
  );
}

export default BookList;