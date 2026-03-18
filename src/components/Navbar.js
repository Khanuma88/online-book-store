function Navbar() {
   const links = ["Home", "Books", "About", "Contact"];
 
  return (
    <nav>
      <ul className="nav-list">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="nav-link">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;