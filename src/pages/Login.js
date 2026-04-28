import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate("/");
    } else {
      setError("Invalid username or password. Try admin / 1234");
    }
  };

  return (
    <div className="container">
      <div className="login-page">
        <h2>🔐 Login</h2>
        <p>Sign in to manage your book store</p>

        <form className="add-book-form" onSubmit={handleSubmit}>
          {error && <p className="form-error">{error}</p>}

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn-full">Login</button>
          <p style={{ marginTop: "12px", fontSize: "12px", color: "#888", textAlign: "center" }}>
            Demo: username <strong>admin</strong> / password <strong>1234</strong>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;