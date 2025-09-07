// src/components/Navbar.jsx
import { useEffect, useRef, useState } from "react";
import {
  FaHome, FaUser, FaUtensils, FaPlane, FaEnvelope, FaBars, FaTimes,
} from "react-icons/fa";

const NAV_ITEMS = [
  { key: "home", label: "Home", icon: <FaHome /> },
  { key: "about", label: "About", icon: <FaUser /> },
  { key: "cooking", label: "Cooking", icon: <FaUtensils /> },
  { key: "travel", label: "Travel", icon: <FaPlane /> },
  { key: "contact", label: "Contact", icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeKey, setActiveKey] = useState("home");

  // migrating highlight (desktop)
  const linksRef = useRef(null);
  const itemRefs = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, height: 0, ready: false });

  const updateIndicator = () => {
    const container = linksRef.current;
    const el = itemRefs.current[activeKey];
    if (!container || !el) return;
    const cRect = container.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    setIndicator({
      left: r.left - cRect.left,
      width: r.width,
      height: r.height,
      ready: true,
    });
  };

  useEffect(() => {
    updateIndicator();
    const onResize = () => updateIndicator();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeKey]);

  // click -> smooth scroll (accounts for sticky header with scroll-margin-top set in CSS below)
  const handleClick = (key) => {
    setActiveKey(key);
    setMenuOpen(false);
    const el = document.getElementById(key);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // --- SCROLLSPY: updates activeKey while scrolling ---
  useEffect(() => {
    const sections = NAV_ITEMS
      .map((n) => document.getElementById(n.key))
      .filter(Boolean);
    if (sections.length === 0) return;

    // Root margins bias the "active" section toward the middle of the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id && visible.target.id !== activeKey) {
          setActiveKey(visible.target.id);
        }
      },
      {
        // top 35% and bottom 45% are treated as outside to stabilize active section
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderLink = ({ key, label, icon }, isMobile = false) => {
    const active = activeKey === key;
    return (
      <li
        key={key}
        ref={(el) => {
          if (!isMobile) itemRefs.current[key] = el;
        }}
        style={{
          ...styles.link,
          ...(isMobile && active ? styles.activePill : {}),
          color: !isMobile && active ? "#fff" : "#333",
        }}
        onClick={() => handleClick(key)}
      >
        {icon} {label}
      </li>
    );
  };

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logo}>
        <span style={styles.logoText}>Sofia Lebowitz</span>
      </div>

      {/* Desktop Links */}
      <ul style={styles.links} className="nav-links" ref={linksRef}>
        {/* migrating highlight (desktop) */}
        <div
          style={{
            ...styles.indicator,
            opacity: indicator.ready ? 1 : 0,
            transform: `translateX(${indicator.left}px)`,
            width: indicator.width,
            height: indicator.height,
          }}
        />
        {NAV_ITEMS.map((it) => renderLink(it))}
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
          {NAV_ITEMS.map((it) => renderLink(it, true))}
        </ul>
      </div>
    </nav>
  );
}

// Inline styles
const styles = {
  navbar: {
    position: "sticky",     // <-- stays on screen
    top: 0,                 // <-- stick to the top
    zIndex: 1000,           // <-- above content
    backdropFilter: "saturate(1.2) blur(4px)",
    background: "rgba(255,255,255,0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 24px",
    borderBottom: "1px solid #eee",
    fontFamily: "sans-serif",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "20px",
  },
  logoText: {
    background: "linear-gradient(to right, #6a5acd, #00bfff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  links: {
    position: "relative",
    display: "flex",
    listStyle: "none",
    gap: "32px",
    margin: 0,
    padding: 0,
    alignItems: "center",
  },
  link: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
    color: "#333",
    fontWeight: 500,
    padding: "8px 16px",
    borderRadius: "20px",
    zIndex: 1,
    userSelect: "none",
    transition: "color .2s ease",
  },
  indicator: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: "20px",
    background: "linear-gradient(to right, #00bfff, #8a2be2)",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    transition:
      "transform .26s cubic-bezier(.22,.61,.36,1), width .26s, height .26s, opacity .2s",
    zIndex: 0,
  },
  activePill: {
    background: "linear-gradient(to right, #00bfff, #8a2be2)",
    color: "#fff",
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

// Responsive + smooth scroll + offset for sticky header
const css = `
@media (max-width: 768px) {
  .nav-links { display: none !important; }
  button { display: block !important; }
}
html { scroll-behavior: smooth; }

/* Ensures the target section isn't hidden under the sticky nav */
section[id] { scroll-margin-top: 80px; }
`;
if (typeof document !== "undefined") {
  document.head.insertAdjacentHTML("beforeend", `<style>${css}</style>`);
}
    