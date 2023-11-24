import React from "react";
import Fragrance from "./Fragrance";

const FragranceList = ({ fragrances, addToCart }) => {
  const fragrancesStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    color: "white",
    gap: "20px",
  };

  return (
    <div style={fragrancesStyle}>
      {fragrances.map((fragrance, index) => (
        <Fragrance
          key={index}
          name={fragrance.name}
          price={fragrance.price}
          image={fragrance.image}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default FragranceList;
