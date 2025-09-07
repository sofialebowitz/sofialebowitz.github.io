// src/components/Navbar.jsx
import { useEffect, useLayoutEffect, useRef, useState } from "react";
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

  // paint indicator as early as possible
  useLayoutEffect(() => {
    updateIndicator();
    // observe size changes (fonts, window resize, etc.)
    const ro = new ResizeObserver(updateIndicator);
    if (linksRef.current) ro.observe(linksRef.current);
    window.addEventListener("resize", updateIndicator);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // move indicator whenever activeKey changes
  useEffect(() => {
    updateIndicator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeKey]);

  const handleClick = (key) => {
    setActiveKey(key);
    setMenuOpen(false);
    const el = document.getElementById(key);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // --- SCROLLSPY: updates activeKey while scrolling ---
  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.key)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // choose the section with greatest visibility
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id && visible.target.id !== activeKey) {
          setActiveKey(visible.target.id);
        }
      },
      {
        root: null,
        // bias toward center of viewport for stability
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.25, 0.5, 0.75],
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
      <div style={styles.logo}>
        <span style={styles.logoText}>Sofia Lebowitz</span>
      </div>

      <ul style={styles.links} className="nav-links" ref={linksRef}>
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

      <button
        className="nav-hamburger"
        style={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

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

const styles = {
  navbar: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backdropFilter: "saturate(1.2) blur(4px)",
    background: "rgba(255,255,255,0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 24px",
    borderBottom: "1px solid #eee",
    fontFamily: "sans-serif",
  },
  logo: { display: "flex", alignItems: "center", fontWeight: "bold", fontSize: "20px" },
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
    whiteSpace: "nowrap",
  },
  indicator: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: "20px",
    background: "linear-gradient(to right, #00bfff, #8a2be2)",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    transition: "transform .26s cubic-bezier(.22,.61,.36,1), width .26s, height .26s, opacity .2s",
    zIndex: 0,
    pointerEvents: "none", // don't block clicks
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

// Scoped CSS (inject once in the browser)
const css = `
@media (max-width: 768px) {
  .nav-links { display: none !important; }
  .nav-hamburger { display: block !important; }
}
html { scroll-behavior: smooth; }
/* Ensure targets aren't hidden behind sticky header */
section[id] { scroll-margin-top: 80px; }
`;
if (typeof document !== "undefined" && !document.getElementById("nav-css")) {
  const style = document.createElement("style");
  style.id = "nav-css";
  style.textContent = css;
  document.head.appendChild(style);
}
