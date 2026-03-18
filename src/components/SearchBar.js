function SearchBar({ search, onSearch, genre, onGenreChange, sortBy, onSortChange, genres }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="🔍 Search by title or author..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
      <select
        className="filter-select"
        value={genre}
        onChange={(e) => onGenreChange(e.target.value)}
      >
        <option value="">All Genres</option>
        {genres.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
      <select
        className="filter-select"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="default">Sort: Default</option>
        <option value="price-asc">Price ↑</option>
        <option value="price-desc">Price ↓</option>
        <option value="rating">Top Rated</option>
        <option value="title">A → Z</option>
      </select>
    </div>
  );
}

export default SearchBar;