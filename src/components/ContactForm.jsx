import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://lamborghini-4.onrender.com/api/enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            project: "Tonino Lamborghini",
            source: "Contact Form",
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Enquiry Submitted Successfully!");

        setForm({
          name: "",
          phone: "",
          email: "",
        });
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Book An Enquiry</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <input
            type="tel"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <button type="submit">
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;