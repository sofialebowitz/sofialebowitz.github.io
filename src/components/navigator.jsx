// src/components/Navbar.jsx
import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaUtensils,
  FaPlane,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logo}>
        <span style={styles.logoText}>Sofia Lebowitz</span>
      </div>

      {/* Desktop Links */}
      <ul style={styles.links} className="nav-links">
        <li style={{ ...styles.link, ...styles.active }}>
          <FaHome /> Home
        </li>
        <li style={styles.link}>
          <FaUser /> About
        </li>
        <li style={styles.link}>
          <FaUtensils /> Cooking
        </li>
        <li style={styles.link}>
          <FaPlane /> Travel
        </li>
        <li style={styles.link}>
          <FaEnvelope /> Contact
        </li>
      </ul>

      {/* Hamburger Button */}
      <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        style={{
          ...styles.mobileMenu,
          maxHeight: menuOpen ? "300px" : "0px",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <ul style={styles.mobileLinks}>
          <li style={styles.link}><FaHome /> Home</li>
          <li style={styles.link}><FaUser /> About</li>
          <li style={styles.link}><FaUtensils /> Cooking</li>
          <li style={styles.link}><FaPlane /> Travel</li>
          <li style={styles.link}><FaEnvelope /> Contact</li>
        </ul>
      </div>
    </nav>
  );
}

// Inline styles
const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 24px",
    background: "#fff",
    borderBottom: "1px solid #eee",
    fontFamily: "sans-serif",
    position: "relative",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "20px",
  },
  logoIcon: { marginRight: "8px" },
  logoText: {
    background: "linear-gradient(to right, #6a5acd, #00bfff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  links: {
    display: "flex",
    listStyle: "none",
    gap: "32px",
    margin: 0,
    padding: 0,
  },
  link: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
    color: "#333",
    fontWeight: 500,
  },
  active: {
    background: "linear-gradient(to right, #00bfff, #8a2be2)",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "20px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  },
  hamburger: {
    display: "none",
    fontSize: "22px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  mobileMenu: {
    overflow: "hidden",
    transition: "all 0.3s ease",
    background: "#fff",
    borderTop: "1px solid #eee",
    position: "absolute",
    top: "60px",
    left: 0,
    right: 0,
  },
  mobileLinks: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    padding: "12px 0",
    margin: 0,
    gap: "16px",
    alignItems: "center",
  },
};

// Add responsive CSS
const css = `
@media (max-width: 768px) {
  .nav-links {
    display: none !important;
  }
  button {
    display: block !important;
  }
}
`;
document.head.insertAdjacentHTML("beforeend", `<style>${css}</style>`);
