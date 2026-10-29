import { useState } from "react";
import "../assets/style/style.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="delivery-navbar" data-aos="fade-down" data-aos-duration="600">
      <a href="/" className="delivery-logo" data-aos="fade-right" data-aos-delay="100">
        <span className="logo-icon">🍔</span>
        <span>Food<span className="logo-highlight">ie.</span></span>
      </a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`} data-aos="fade-down" data-aos-delay="200">
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
        <a href="#offers" onClick={() => setMenuOpen(false)}>Offers</a>
        <a href="#restaurants" onClick={() => setMenuOpen(false)}>Restaurants</a>
        <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      <div className="nav-actions" data-aos="fade-left" data-aos-delay="300">
        <button className="search-btn" aria-label="Search">⌕</button>

        <button className="cart-btn" aria-label="Shopping cart">
          🛒 <span className="cart-count">2</span>
        </button>

        <button className="signin-btn">Sign In</button>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}

export default Navbar;
