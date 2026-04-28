import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="empty-state">
        <div className="empty-icon">🔍</div>
        <h2 style={{ color: "#4a3f8f", marginBottom: "8px" }}>404 — Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <button onClick={() => navigate("/")} style={{ marginTop: "20px" }}>
          ← Go Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;