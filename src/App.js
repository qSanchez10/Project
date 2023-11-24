import React, { useState } from "react";
import FragranceList from "./components/FragranceList";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/style.css";
import SignUp from "./components/Signup";
import Log from "./components/Log";
import Contact from "./components/Contact";

function Home() {
  const homeStyle = {
    color: "#000000",
    padding: "50px",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div
      style={{
        ...homeStyle,
        backgroundImage: "url('diorback4.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h2 style={titleStyle}>FragranceShop</h2>
    </div>
  );
}

const titleStyle = {
  position: "absolute",
  top: "80px",
  left: "300px",
  fontSize: "3rem",
  color: "#c8c5db",
  fontWeight: "bold",
};

const Fragrance = ({ cart, totalPrice, addToCart, clearCart }) => {
  const fragranceStyle = {
    color: "#06fefe",
    padding: "50px",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url('diorblack.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const fragrances = [
    {
      name: "Dior Sauvage Parfum(100ml/men)",
      price: 160,
      image: "diorparfum.jpg",
    },
    {
      name: "Dior Sauvage Elixir(100ml/men)",
      price: 240,
      image: "diorelixir.jpg",
    },
    { name: "Dior Fahrenheit(100ml/men)", price: 175, image: "diorfah.jpg" },
    {
      name: "Dior Homme Intense(100ml/men)",
      price: 180,
      image: "diorhomme.jpg",
    },
    {
      name: "Dior Eau Sauvage Parfum(100ml/men)",
      price: 200,
      image: "dioreau.jpg",
    },
    {
      name: "Tabbaco Vanille(100ml/unisex)",
      price: 400,
      image: "tomfordt.jpg",
    },
    {
      name: "TomFord Oud Wood(100ml/men)",
      price: 500,
      image: "tomfordoud.jpg",
    },
    {
      name: "TomFord Neroli Portofino(100ml/men)",
      price: 350,
      image: "tomfordnef.jpg",
    },
    { name: "TomFord Noir(100ml/men)", price: 350, image: "tomfordnoir.jpg" },
    {
      name: "TomFord Ombre leather(100ml/men)",
      price: 450,
      image: "tomfordombre.jpg",
    },
    //   { name: "MoschinoToy Boy(100ml)", price: 40, image: "moschino.jpg" },
  ];

  return (
    <div>
      <div
        style={{
          position: "absolute",
          backgroundColor: "",
          padding: "10px",
          top: "10px",
          left: "800px",
        }}
      >
        <h1 style={{ color: "#c8c5db", fontSize: "3rem" }}>Fragrances</h1>
      </div>
      <div style={fragranceStyle}>
        <FragranceList fragrances={fragrances} addToCart={addToCart} />
        <Cart cart={cart} totalPrice={totalPrice} clearCart={clearCart} />
      </div>
    </div>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <Router>
      <div>
        <nav>
          <ul style={{ display: "flex", listStyle: "none", padding: 1 }}>
            <li>
              <Link
                to="/"
                style={{
                  backgroundColor: "#C15D05",
                  color: "#FFFFFF",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  marginRight: "7px",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/fragrances"
                style={{
                  backgroundColor: "#C15D05",
                  color: "#FFFFFF",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  marginRight: "7px",
                  textDecoration: "none",
                }}
              >
                Fragrances
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                style={{
                  backgroundColor: "#C15D05",
                  color: "#FFFFFF",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  marginRight: "7px",
                  textDecoration: "none",
                }}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                style={{
                  backgroundColor: "#C15D05",
                  color: "#FFFFFF",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  marginRight: "7px",
                  textDecoration: "none",
                }}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                style={{
                  backgroundColor: "#C15D05",
                  color: "#FFFFFF",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  marginRight: "10px",
                  textDecoration: "none",
                }}
              >
                Contact
              </Link>{" "}
              {}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/fragrances"
            element={
              <Fragrance
                cart={cart}
                totalPrice={totalPrice}
                addToCart={addToCart}
                clearCart={clearCart}
              />
            }
          />
          <Route path="/signup" element={<SignUp />} /> {}
          <Route path="/login" element={<Log />} /> {}
          <Route path="/contact" element={<Contact />} /> {}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
