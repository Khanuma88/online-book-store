function Header({ cartCount }) {
  return (
    <header>
      <h1>Online Book Store</h1>
      <div className="header-cart">
           Cart {cartCount > 0 && `(${cartCount})`}
      </div>
    </header>
  );
}

export default Header;