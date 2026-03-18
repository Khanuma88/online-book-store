function StatsBlock({ books, cart }) {
  const avgPrice = books.length
    ? (books.reduce((sum, b) => sum + b.price, 0) / books.length).toFixed(2)
    : "0.00";

  const availableCount = books.filter((b) => b.available).length;
  const cartTotal = cart.reduce((sum, b) => sum + b.price, 0).toFixed(2);

  const stats = [
    { label: "Total Books", value: books.length},
    { label: "Available", value: availableCount},
    { label: "Avg. Price", value: `$${avgPrice}`},
    { label: "Cart Total", value: `$${cartTotal}`},
  ];

  return (
    <div className="stats-block">
      {stats.map(({ label, value, icon }) => (
        <div key={label} className="stat-card">
          <span className="stat-value">{value}</span>
          <span className="stat-label">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default StatsBlock;