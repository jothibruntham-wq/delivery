const offers = [
  {
    id: 1,
    title: "Summer Sale",
    discount: "30% OFF",
    desc: "Get 30% off on all products this season.",
    code: "SUMMER30",
  },
  {
    id: 2,
    title: "New User Deal",
    discount: "20% OFF",
    desc: "Sign up today and enjoy 20% off your first order.",
    code: "WELCOME20",
  },
  {
    id: 3,
    title: "Free Shipping",
    discount: "FREE",
    desc: "Free delivery on orders above ₹999.",
    code: "SHIPFREE",
  },
  {
    id: 4,
    title: "Festival Special",
    discount: "50% OFF",
    desc: "Limited time festival offer on selected items.",
    code: "FEST50",
  },
];

export default function Offers() {
  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Code ${code} copied!`);
  };

  return (
    <section id="offers" style={styles.section}>
      <div style={styles.container}>
        <span style={styles.subtitle} data-aos="fade-down" data-aos-duration="600">
          EXCLUSIVE DEALS
        </span>
        <h2 style={styles.heading} data-aos="fade-up" data-aos-duration="700">
          Special Offers & Discounts
        </h2>
        <p style={styles.lead} data-aos="fade-up" data-aos-delay="100">
          Grab these limited-time discount codes at checkout to save big on your favorite food!
        </p>

        <div style={styles.grid}>
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              style={styles.card}
              data-aos="zoom-in-up"
              data-aos-delay={index * 120}
              data-aos-duration="700"
            >
              <span style={styles.badge}>{offer.discount}</span>
              <h3 style={styles.title}>{offer.title}</h3>
              <p style={styles.desc}>{offer.desc}</p>

              <div style={styles.codeRow}>
                <span style={styles.code}>{offer.code}</span>
                <button style={styles.btn} onClick={() => copyCode(offer.code)}>
                  Copy Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 24px 100px",
    backgroundColor: "#fff8f5",
    textAlign: "center",
    color: "#222",
    fontFamily: "'Poppins', sans-serif",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
  },
  subtitle: {
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "2px",
    color: "#ff5722",
    textTransform: "uppercase",
  },
  heading: {
    fontSize: 36,
    fontWeight: "800",
    color: "#1a1a1a",
    marginTop: 8,
    marginBottom: 12,
  },
  lead: {
    fontSize: 16,
    color: "#666",
    maxWidth: 600,
    margin: "0 auto 48px",
    lineHeight: 1.6,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 24,
  },
  card: {
    position: "relative",
    padding: "32px 24px",
    borderRadius: 18,
    backgroundColor: "#ffffff",
    border: "1.5px dashed #ffc5b3",
    boxShadow: "0 6px 20px rgba(255, 87, 34, 0.08)",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  badge: {
    position: "absolute",
    top: 18,
    right: 18,
    background: "#ff5722",
    color: "#ffffff",
    padding: "5px 12px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 700,
    boxShadow: "0 2px 8px rgba(255, 87, 34, 0.3)",
  },
  title: {
    margin: "10px 0 8px",
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },
  desc: {
    fontSize: 14,
    color: "#666",
    marginBottom: 24,
    lineHeight: 1.5,
  },
  codeRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    marginTop: "auto",
    paddingTop: 14,
    borderTop: "1px solid #f2f2f2",
  },
  code: {
    border: "1.5px dashed #ff5722",
    backgroundColor: "#fff0eb",
    color: "#ff5722",
    padding: "6px 14px",
    borderRadius: 8,
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: 1.2,
  },
  btn: {
    background: "#ff5722",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 13,
    transition: "background 0.2s ease",
  },
};
