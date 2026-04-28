import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      <div className="nav-inner">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
        <NavLink to="/books" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Books</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>

        {user ? (
          <>
            <NavLink to="/admin" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              ⚙️ Admin
            </NavLink>
            <span className="nav-user">👤 {user.username}</span>
            <button className="nav-logout" onClick={logout}>Logout</button>
          </>
        ) : (
          <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Login</NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;