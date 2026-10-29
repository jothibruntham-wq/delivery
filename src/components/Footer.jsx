export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = ["Home", "About", "Services", "Contact"];
  const socials = [
    { name: "Facebook", icon: "f", url: "#" },
    { name: "Twitter", icon: "𝕏", url: "#" },
    { name: "Instagram", icon: "◎", url: "#" },
    { name: "LinkedIn", icon: "in", url: "#" },
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.col} data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
          <h3 style={styles.logo}>Foodie.</h3>
          <p style={styles.text}>
            Delivering great experiences with quality and care. Thank you for being part of our journey.
          </p>
        </div>

        <div style={styles.col} data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">
          <h4 style={styles.title}>Quick Links</h4>
          <ul style={styles.list}>
            {quickLinks.map((link) => (
              <li key={link} style={styles.item}>
                <a href={`#${link.toLowerCase()}`} style={styles.link}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div style={styles.col} data-aos="fade-up" data-aos-delay="300" data-aos-duration="600">
          <h4 style={styles.title}>Contact</h4>
          <p style={styles.text}>📍 123 Main Street, Bengaluru</p>
          <p style={styles.text}>📞 +91 98765 43210</p>
          <p style={styles.text}>✉️ hello@example.com</p>
        </div>

        <div style={styles.col} data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
          <h4 style={styles.title}>Follow Us</h4>
          <div style={styles.socials}>
            {socials.map((s) => (
              <a key={s.name} href={s.url} aria-label={s.name} style={styles.socialBtn}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={styles.bottom} data-aos="fade-in" data-aos-delay="500">
        © {year} Foodie. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#1f1d1d",
    color: "#ffffff",
    paddingTop: 60,
    borderTop: "3px solid #ff5722",
    fontWeight: "normal",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 32,
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 32px 40px",
  },
  col: {},
  logo: { fontSize: 24, margin: "0 0 14px", color: "#ff5722", fontWeight: "800" },
  title: { fontSize: 18, margin: "0 0 16px", color: "#ffffff", fontWeight: "700" },
  text: { fontSize: 14, opacity: 0.8, lineHeight: 1.6, margin: "8px 0", color: "#dddddd" },
  list: { listStyle: "none", margin: 0, padding: 0 },
  item: { margin: "10px 0" },
  link: { color: "#cccccc", textDecoration: "none", fontSize: 14 },
  socials: { display: "flex", gap: 12 },
  socialBtn: {
    width: 38,
    height: 38,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.1)",
    color: "#ffffff",
    textDecoration: "none",
    fontSize: 14,
  },
  bottom: {
    textAlign: "center",
    padding: "18px 32px",
    fontSize: 13,
    opacity: 0.7,
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    color: "#aaaaaa",
  },
};