import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <h1>Online Book Store</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "14px" }}>
          {theme === "light" ? "Light" : "Dark"}
        </span>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}
        </button>
      </div>
    </header>
  );
}

export default Header;