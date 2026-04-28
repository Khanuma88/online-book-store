import { useTheme } from "../context/ThemeContext";

function Header({ cartCount }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <h1>📚 Online Book Store</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </header>
  );
}

export default Header;