import { Outlet, useLocation } from "react-router-dom";
import BookList from "../components/BookList";

function Books({ books, cart, onAddToCart }) {
  const location = useLocation();
  const isDetails = location.pathname === "/books/details";

  return (
    <div className="container">
      {!isDetails && (
        <>
          <h2>All Books</h2>
          <p>Browse our full collection.</p>
          <BookList
            books={books}
            cart={cart}
            onAddToCart={onAddToCart}
          />
        </>
      )}

      <Outlet />
    </div>
  );
}

export default Books;