import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/books">Books</Link> | 
      <Link to="/books/details">Details</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;