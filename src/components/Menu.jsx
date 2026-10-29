import { useState, useEffect } from "react";
import fries from "../assets/images/fries.jpg"

const MENU_ITEMS = [
  {
    id: 1,
    name: "Classic Cheese Burger",
    category: "Burgers",
    price: "$8.99",
    rating: "4.9",
    desc: "Juicy beef patty, melted cheddar, crisp lettuce, fresh tomato & house sauce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Pepperoni Passion Pizza",
    category: "Pizza",
    price: "$14.50",
    rating: "4.8",
    desc: "Rich marinara, mozzarella blend, loaded crispy pepperoni slices and oregano.",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Crispy Peri-Peri Fries",
    category: "Snacks",
    price: "$4.99",
    rating: "4.7",
    desc: "Golden-brown potato fries tossed in fiery spicy peri-peri herbs & seasoning.",
    image: fries,
  },
  {
    id: 4,
    name: "Smoky BBQ Bacon Burger",
    category: "Burgers",
    price: "$10.49",
    rating: "4.9",
    desc: "Double smoked bacon, sharp cheddar, grilled onions and smoky hickory BBQ sauce.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Margherita Supreme Pizza",
    category: "Pizza",
    price: "$12.99",
    rating: "4.8",
    desc: "Hand-stretched crust, sweet San Marzano tomatoes, fresh basil & buffalo mozzarella.",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Cold Brew Frappe",
    category: "Drinks",
    price: "$5.25",
    rating: "4.9",
    desc: "Chilled slow-steeped artisan coffee blended with rich vanilla cream and caramel drizzle.",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Chocolate Lava Cake",
    category: "Desserts",
    price: "$6.99",
    rating: "5.0",
    desc: "Warm decadent Belgian chocolate sponge with molten chocolate center & berries.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Tropical Berry Smoothie",
    category: "Drinks",
    price: "$5.99",
    rating: "4.8",
    desc: "Fresh wild strawberries, blueberries, chia seeds blended with greek yogurt.",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop&q=80",
  },
];

const CATEGORIES = ["All", "Burgers", "Pizza", "Snacks", "Drinks", "Desserts"];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [addedItems, setAddedItems] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.refresh();
    }
  }, [selectedCategory]);

  const filteredItems =
    selectedCategory === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const handleAddToCart = (id) => {
    setAddedItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  return (
    <section id="menu" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.subtitle} data-aos="fade-down" data-aos-duration="600">
            OUR SPECIALITIES
          </span>
          <h2 style={styles.title} data-aos="zoom-in" data-aos-duration="700">
            Explore Our <span style={styles.highlight}>Delicious Menu</span>
          </h2>
          <p style={styles.lead} data-aos="fade-up" data-aos-delay="100">
            Carefully curated recipes made with top-quality organic ingredients delivered hot & fresh to you.
          </p>
        </div>

        {/* Category Pills */}
        <div style={styles.filterBar} data-aos="fade-up" data-aos-delay="150">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                ...styles.filterBtn,
                ...(selectedCategory === cat ? styles.filterBtnActive : {}),
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Food Items Grid */}
        <div style={styles.grid}>
          {filteredItems.map((item, index) => {
            const count = addedItems[item.id] || 0;
            return (
              <div
                key={item.id}
                style={styles.card}
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 100}
                data-aos-duration="600"
              >
                <div style={styles.imgWrapper}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={styles.img}
                    loading="lazy"
                  />
                  <span style={styles.badge}>⭐ {item.rating}</span>
                </div>

                <div style={styles.cardBody}>
                  <div style={styles.cardHeaderRow}>
                    <h3 style={styles.itemName}>{item.name}</h3>
                    <span style={styles.itemPrice}>{item.price}</span>
                  </div>

                  <p style={styles.itemDesc}>{item.desc}</p>

                  <div style={styles.cardFooter}>
                    <span style={styles.categoryTag}>{item.category}</span>
                    <button
                      onClick={() => handleAddToCart(item.id)}
                      style={{
                        ...styles.addBtn,
                        ...(count > 0 ? styles.addBtnActive : {}),
                      }}
                    >
                      {count > 0 ? `✓ Added (${count})` : "🛒 Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px 100px",
    backgroundColor: "#fdfdfd",
    color: "#222",
    fontFamily: "'Poppins', sans-serif",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  subtitle: {
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "2px",
    color: "#ff5722",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#1a1a1a",
    marginTop: "8px",
    marginBottom: "12px",
  },
  highlight: {
    color: "#ff5722",
  },
  lead: {
    fontSize: "16px",
    color: "#666",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  filterBar: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "50px",
  },
  filterBtn: {
    padding: "10px 22px",
    borderRadius: "25px",
    border: "1.5px solid #e0e0e0",
    backgroundColor: "#fff",
    color: "#444",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.25s ease",
  },
  filterBtnActive: {
    backgroundColor: "#ff5722",
    borderColor: "#ff5722",
    color: "#fff",
    boxShadow: "0 4px 12px rgba(255, 87, 34, 0.35)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
    gap: "30px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #f0f0f0",
  },
  imgWrapper: {
    position: "relative",
    width: "100%",
    height: "200px",
    overflow: "hidden",
    backgroundColor: "#eee",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  },
  badge: {
    position: "absolute",
    top: "14px",
    right: "14px",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    color: "#222",
    fontWeight: "700",
    fontSize: "12px",
    padding: "4px 10px",
    borderRadius: "20px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
  cardBody: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  cardHeaderRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "8px",
    gap: "10px",
  },
  itemName: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#222",
    margin: 0,
  },
  itemPrice: {
    fontSize: "18px",
    fontWeight: "800",
    color: "#ff5722",
    whiteSpace: "nowrap",
  },
  itemDesc: {
    fontSize: "13px",
    color: "#777",
    lineHeight: "1.5",
    marginBottom: "18px",
    flexGrow: 1,
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
    gap: "10px",
  },
  categoryTag: {
    fontSize: "12px",
    color: "#888",
    backgroundColor: "#f5f5f5",
    padding: "4px 10px",
    borderRadius: "12px",
    fontWeight: "500",
  },
  addBtn: {
    backgroundColor: "#ff5722",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    padding: "8px 16px",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  addBtnActive: {
    backgroundColor: "#74e716",
    color: "#111",
  },
};
