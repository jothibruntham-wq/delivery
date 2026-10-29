import { useState, useEffect } from "react";

const restaurants = [
  {
    id: 1,
    name: "Spice Garden",
    cuisine: "Indian",
    rating: 4.5,
    time: "30 min",
    price: "₹₹",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
  },
  {
    id: 2,
    name: "Pizza Palace",
    cuisine: "Italian",
    rating: 4.2,
    time: "25 min",
    price: "₹₹",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
  },
  {
    id: 3,
    name: "Dragon Wok",
    cuisine: "Chinese",
    rating: 4.0,
    time: "35 min",
    price: "₹",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600",
  },
  {
    id: 4,
    name: "Burger Hub",
    cuisine: "Fast Food",
    rating: 4.3,
    time: "20 min",
    price: "₹",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
  },
  {
    id: 5,
    name: "Sushi Zen",
    cuisine: "Japanese",
    rating: 4.7,
    time: "40 min",
    price: "₹₹₹",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600",
  },
  {
    id: 6,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    rating: 4.1,
    time: "30 min",
    price: "₹₹",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600",
  },
];

const filters = ["All", "Indian", "Italian", "Chinese", "Fast Food", "Japanese", "Mexican"];

export default function Restaurants() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.refresh();
    }
  }, [active, search]);

  const filtered = restaurants.filter(
    (r) =>
      (active === "All" || r.cuisine === active) &&
      r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="restaurants" style={styles.section}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={styles.heading} data-aos="fade-down" data-aos-duration="600">
          Restaurants
        </h2>

        <div data-aos="fade-up" data-aos-delay="100">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.search}
          />
        </div>

        <div style={styles.filters} data-aos="fade-up" data-aos-delay="200">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{ ...styles.filterBtn, ...(active === f ? styles.filterActive : {}) }}
            >
              {f}
            </button>
          ))}
        </div>

        <div style={styles.grid}>
          {filtered.map((r, index) => (
            <div
              key={r.id}
              style={styles.card}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 120}
              data-aos-duration="600"
            >
              <img src={r.image} alt={r.name} style={styles.img} />
              <div style={styles.info}>
                <div style={styles.row}>
                  <h3 style={styles.name}>{r.name}</h3>
                  <span style={styles.rating}>★ {r.rating}</span>
                </div>
                <p style={styles.meta}>
                  {r.cuisine} • {r.price} • {r.time}
                </p>
                <button style={styles.btn}>Order Now</button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <p data-aos="fade-in">No restaurants found.</p>}
        </div>
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
  heading: { fontSize: 36, marginBottom: 24 },
  search: {
    width: "100%",
    maxWidth: 400,
    padding: "12px 16px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.3)",
    background: "rgba(255,255,255,0.1)",
    color: "#0a0a0a",
    fontSize: 15,
    outline: "none",
    marginBottom: 20,
  },
  filters: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    marginBottom: 36,
  },
  filterBtn: {
    padding: "8px 18px",
    borderRadius: 20,
    border: "1px solid rgba(255,255,255,0.4)",
    background: "transparent",
    color: "#0c0c0c",
    cursor: "pointer",
    fontSize: 14,
  },
  filterActive: {
    background: "#ff4d4f",
    borderColor: "#ff4d4f",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 24,
    maxWidth: 1100,
    margin: "0 auto",
  },
  card: {
    borderRadius: 16,
    overflow: "hidden",
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.2)",
    textAlign: "left",
  },
  img: { width: "100%", height: 170, objectFit: "cover", display: "block" },
  info: { padding: 18 },
  row: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  name: { margin: 0, fontSize: 20 },
  rating: {
    background: "#22c55e",
    padding: "3px 8px",
    borderRadius: 6,
    fontSize: 13,
    fontWeight: 700,
  },
  meta: { fontSize: 14, opacity: 0.8, margin: "10px 0 16px" },
  btn: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: 8,
    background: "#fff",
    color: "#000",
    fontWeight: 600,
    cursor: "pointer",
  },
};
