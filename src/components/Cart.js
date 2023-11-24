import React, { useState } from "react";

const Cart = ({ cart, totalPrice, clearCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHovered, setIsHovered] = useState("");

  const handleClearCart = () => {
    clearCart();
  };

  const handleBuy = () => {
    alert("Merge");
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const cartButtonStyle = {
    position: "fixed",
    top: "20px",
    right: "20px",
    backgroundColor: "#c8c5db",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    fontSize: "1.5rem",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1000",
    transition: "background-color 0.3s ease",
  };

  const cartButtonHoverStyle = {
    backgroundColor: "#C15D05",
  };

  const cartContainerStyle = {
    position: "fixed",
    top: "80px",
    right: "20px",
    backgroundColor: "#C15D05",
    padding: "10px",
    display: isCartOpen ? "block" : "none",
    color: "#c8c5db",
  };

  const buttonStyles = {
    backgroundColor: "#c8c5db",
    color: "#FFFFFF",
    padding: "8px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    margin: "5px",
  };

  const hoverStyles = {
    backgroundColor: "#15046c",
  };

  return (
    <div>
      <button
        style={{
          ...cartButtonStyle,
          ...(isCartOpen
            ? cartButtonHoverStyle
            : isHovered === "cart"
            ? cartButtonHoverStyle
            : null),
        }}
        onClick={toggleCart}
        onMouseEnter={() => setIsHovered("cart")}
        onMouseLeave={() => setIsHovered("")}
      >
        🛒
      </button>
      <div style={cartContainerStyle}>
        <h2>Shopping Cart</h2>
        {cart.map((item, index) => (
          <div key={index}>
            <p>
              {item.name} - ${item.price}
            </p>
          </div>
        ))}
        <button
          style={{
            ...buttonStyles,
            ...(isHovered === "clear" ? hoverStyles : null),
          }}
          onMouseEnter={() => setIsHovered("clear")}
          onMouseLeave={() => setIsHovered("")}
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <button
          style={{
            ...buttonStyles,
            ...(isHovered === "buy" ? hoverStyles : null),
          }}
          onMouseEnter={() => setIsHovered("buy")}
          onMouseLeave={() => setIsHovered("")}
          onClick={handleBuy}
        >
          Buy
        </button>
        <button
          style={{
            ...buttonStyles,
            ...(isHovered === "close" ? hoverStyles : null),
          }}
          onMouseEnter={() => setIsHovered("close")}
          onMouseLeave={() => setIsHovered("")}
          onClick={toggleCart}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Cart;
