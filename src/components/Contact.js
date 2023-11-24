import React from "react";

const Contact = () => {
  const contactInfo = [
    {
      type: "Email",
      info: "fragranceshop@gmail.com",
    },
    {
      type: "Phone",
      info: "076039481131231313",
    },
    {
      type: "Instagram",
      info: "https://www.instagram.com/",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: "url('tomfordnoirwall.jpg')",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ backgroundColor: "#c8c5db", padding: "20px" }}>
        <h2
          style={{
            color: "black",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Contact
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {contactInfo.map((contact, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <strong>{contact.type}: </strong>
              {contact.type === "Email" ? (
                <span style={{ fontWeight: 600 }}>{contact.info}</span>
              ) : contact.type === "Phone" ? (
                <span style={{ fontWeight: 600 }}>{contact.info}</span>
              ) : (
                <a href={contact.info} target="_blank" rel="noreferrer">
                  <span style={{ fontWeight: 600 }}>Instagram</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
