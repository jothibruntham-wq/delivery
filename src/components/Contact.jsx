import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", form);
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading} data-aos="fade-down" data-aos-duration="600">
        Contact Us
      </h2>

      <div style={styles.wrapper}>
        <div style={styles.info} data-aos="fade-right" data-aos-duration="800">
          <h3 style={styles.infoTitle}>Get in touch</h3>
          <p style={styles.infoText}>📍 123 Main Street, Bengaluru</p>
          <p style={styles.infoText}>📞 +91 98765 43210</p>
          <p style={styles.infoText}>✉️ hello@example.com</p>
        </div>

        <form
          style={styles.form}
          onSubmit={handleSubmit}
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            style={{ ...styles.input, resize: "none" }}
          />
          <button type="submit" style={styles.btn}>
            Send Message
          </button>
          {sent && <p style={styles.success}>Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 32px",
    textAlign: "center",
    color: "#060606",
  },
  heading: { fontSize: 36, marginBottom: 40 },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: 24,
    maxWidth: 900,
    margin: "0 auto",
    justifyContent: "center",
  },
  info: {
    flex: "1 1 260px",
    padding: 28,
    borderRadius: 16,
    background: "rgba(1, 1, 1, 0.1)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(10, 10, 10, 0.2)",
    textAlign: "left",
  },
  infoTitle: { marginTop: 0, fontSize: 22 },
  infoText: { fontSize: 15, opacity: 0.9, margin: "14px 0" },
  form: {
    flex: "1 1 360px",
    display: "flex",
    flexDirection: "column",
    gap: 14,
    padding: 28,
    borderRadius: 16,
    background: "rgba(12, 12, 12, 0.1)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(15, 15, 15, 0.2)",
  },
  input: {
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid rgba(14, 14, 14, 0.3)",
    background: "rgba(12, 12, 12, 0.1)",
    color: "#060606",
    fontSize: 15,
    outline: "none",
    fontFamily: "inherit",
  },
  btn: {
    padding: "12px",
    border: "none",
    borderRadius: 10,
    background: "#ff4d4f",
    color: "#090909",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
  },
  success: { color: "#22c55e", margin: 0, fontWeight: 600 },
};