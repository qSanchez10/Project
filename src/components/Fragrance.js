import React from "react";
import styled from "styled-components";

const AddToCartButton = styled.button`
  background-color: #c8c5db;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #15046c;
  }
`;

const Fragrance = ({ name, price, image, addToCart }) => {
  const imageStyle = {
    width: "200px",
    height: "200px",
  };

  const Price = styled.p`
    color: #ffffff;
    font-weight: bold;
  `;

  return (
    <div>
      <img src={image} alt={name} style={imageStyle} />
      <h3>{name}</h3>
      <Price>Price: ${price}</Price>
      <AddToCartButton onClick={() => addToCart({ name, price })}>
        Add to Cart
      </AddToCartButton>
    </div>
  );
};

export default Fragrance;
