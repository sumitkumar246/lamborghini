import React, { useState } from "react";
import "./BrochurePopup.css";

const BrochurePopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          project: "Tonino Lamborghini",
          source: "Brochure Download",
        }),
      });

      const data = await response.json();

      if (data.success) {
        const link = document.createElement("a");
        link.href = "/brochure.pdf";
        link.download = "Tonino-Lamborghini-Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        alert("Thank you! Brochure download started.");
        onClose();
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Backend not connected. Please check server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>Download Brochure</h2>
        <p>Fill your details to access the exclusive luxury brochure.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Download Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BrochurePopup;