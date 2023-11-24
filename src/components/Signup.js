import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nume: "",
    prenume: "",
    telefon: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  };

  const inputStyle = {
    width: "300px",
    height: "40px",
    marginBottom: "20px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "5px",
    backgroundColor: "#c8c5db", // S
  };

  const buttonStyle = {
    width: "200px",
    height: "50px",
    backgroundColor: "#c8c5db",
    color: "black",
    border: "none",
    borderRadius: "5px",
    fontSize: "18px",
    cursor: "pointer",
  };

  const labelStyle = {
    color: "#c8c5db",
    marginBottom: "8px",
    textAlign: "left",
  };

  return (
    <div
      style={{
        backgroundImage: "url('Tom-Fordwall2.jpg')",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h2
          style={{
            color: "#c8c5db",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Sign Up
        </h2>
        <form style={formStyle} onSubmit={handleSubmit}>
          <label style={labelStyle}>Email</label>
          <input
            style={{ ...inputStyle, borderColor: "#3498db" }}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <label style={labelStyle}>Password</label>
          <input
            style={{ ...inputStyle, borderColor: "#c8c5db" }}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Parola"
          />
          <label style={labelStyle}>Nume</label>
          <input
            style={{ ...inputStyle, borderColor: "#c8c5db" }}
            type="text"
            name="nume"
            value={formData.nume}
            onChange={handleInputChange}
            placeholder="Nume"
          />
          <label style={labelStyle}>Prenume</label>
          <input
            style={{ ...inputStyle, borderColor: "#c8c5db" }}
            type="text"
            name="prenume"
            value={formData.prenume}
            onChange={handleInputChange}
            placeholder="Prenume"
          />
          <label style={labelStyle}>Telefon</label>
          <input
            style={{ ...inputStyle, borderColor: "#c8c5db" }}
            type="text"
            name="telefon"
            value={formData.telefon}
            onChange={handleInputChange}
            placeholder="Telefon"
          />
          <button style={buttonStyle}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
