function Button({ text, onClick, disabled = false, variant = "primary" }) {
  return (
    <button
      onClick={onClick}
     disabled={disabled}
      className={variant === "danger" ? "btn-danger" : variant === "secondary" ? "btn-secondary" : ""}
    >
      {text}
    </button>
  );
}

export default Button;