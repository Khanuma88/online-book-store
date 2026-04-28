function About() {
  return (
    <div className="container">
      <div className="hero">
        <h2>About BookHaven</h2>
        <p>Your favourite online book store</p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <div className="about-icon">📚</div>
          <h3>Our Mission</h3>
          <p>We believe every person deserves access to great books. Our store offers a wide selection of titles across all genres.</p>
        </div>

        <div className="about-card">
          <div className="about-icon">🌍</div>
          <h3>Who We Are</h3>
          <p>BookHaven is a React SPA project built as part of a frontend development course. We are passionate about books and clean code.</p>
        </div>

        <div className="about-card">
          <div className="about-icon">⚡</div>
          <h3>Tech Stack</h3>
          <p>Built with React, React Router, Context API, localStorage persistence, and modern CSS with responsive design.</p>
        </div>

        <div className="about-card">
          <div className="about-icon">🛒</div>
          <h3>Features</h3>
          <p>Browse books, search and filter, add to cart, manage your collection, and enjoy dark mode support.</p>
        </div>
      </div>
    </div>
  );
}

export default About;