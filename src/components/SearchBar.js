import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={handleChange}
      />
      <p>You are searching: {search}</p>
    </div>
  );
}

export default SearchBar;