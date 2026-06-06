import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917082003053"
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed",
        right: "22px",
        bottom: "22px",
        width: "58px",
        height: "58px",
        borderRadius: "50%",
        background: "#25D366",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "28px",
        zIndex: 999,
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      }}
    >
      ☎
    </a>
  );
};

export default WhatsAppButton;