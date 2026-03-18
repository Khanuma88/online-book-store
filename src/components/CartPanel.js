import Button from "./Button";

function CartPanel({ cart, onRemove }) {
  const total = cart.reduce((sum, b) => sum + b.price, 0).toFixed(2);

  return (
    <div className="cart-panel">
      <h3 className="cart-title">Your Cart {cart.length > 0 && `(${cart.length})`}</h3>

      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map(({ id, title, price }) => (
              <li key={id} className="cart-item">
                <span className="cart-item-title">{title}</span>
                <span className="cart-item-price">${price.toFixed(2)}</span>
                <Button text="✕" onClick={() => onRemove(id)} variant="danger" />
              </li>
            ))}
          </ul>
          <div className="cart-total">Total: ${total}</div>
          <button className="btn-full">Checkout</button>
        </>
      )}
    </div>
  );
}

export default CartPanel;