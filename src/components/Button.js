function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 12px",
        marginTop: "10px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

export default Button;