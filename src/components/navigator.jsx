import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaHome, FaUser, FaUtensils, FaPlane, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const NAV_ITEMS = [
  { key: "home", label: "Home", icon: <FaHome /> },
  { key: "about", label: "About", icon: <FaUser /> },
  { key: "cooking", label: "Cooking", icon: <FaUtensils /> },
  { key: "travel", label: "Travel", icon: <FaPlane /> },
  { key: "contact", label: "Contact", icon: <FaEnvelope /> },
];

export default function Navigator() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeKey, setActiveKey] = useState("home");

  const navRef = useRef(null);
  const linksRef = useRef(null);
  const itemRefs = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, height: 0, ready: false });

  const navHeight = () => navRef.current?.getBoundingClientRect().height || 0;

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

  useLayoutEffect(() => {
    const raf = requestAnimationFrame(updateIndicator);
    const ro = new ResizeObserver(updateIndicator);
    if (linksRef.current) ro.observe(linksRef.current);
    window.addEventListener("resize", updateIndicator);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateIndicator();
    // close on ESC
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeKey]);

  const handleClick = (key) => {
    setActiveKey(key);
    setMenuOpen(false);
    const el = document.getElementById(key);
    if (!el) return;
    const offset = navHeight() + 8;
    const top = window.scrollY + el.getBoundingClientRect().top - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.key)).filter(Boolean);
    if (!sections.length) return;

    let observer;
    const buildObserver = () => {
      const topOffset = navHeight() + 8;
      if (observer) observer.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible?.target?.id && visible.target.id !== activeKey) {
            setActiveKey(visible.target.id);
          }
        },
        { root: null, rootMargin: `-${topOffset}px 0px -55% 0px`, threshold: [0.2, 0.5, 0.8] }
      );
      sections.forEach((s) => observer.observe(s));
    };

    buildObserver();
    window.addEventListener("resize", buildObserver);
    return () => {
      window.removeEventListener("resize", buildObserver);
      observer?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderLink = ({ key, label, icon }, isMobile = false) => {
    const active = activeKey === key;
    return (
      <li
        key={key}
        ref={(el) => { if (!isMobile) itemRefs.current[key] = el; }}
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
    <nav ref={navRef} style={styles.navbar}>
      {/* Responsive CSS just for the nav */}
      <style>{`
        /* Show hamburger, hide desktop links on small screens */
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: inline-flex !important; }
          .mobile-menu { display: block; }
        }
        /* Hide mobile menu container on desktop */
        @media (min-width: 901px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>

      <div style={styles.logo}>
        <span style={styles.logoText}>Sofia Lebowitz</span>
      </div>

      {/* Desktop links */}
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

      {/* Hamburger (hidden by default, shown via media query) */}
      <button
        className="nav-hamburger"
        style={styles.hamburger}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="mobile-menu"
        style={{
          ...styles.mobileMenu,
          top: `${navHeight() || 60}px`,
          maxHeight: menuOpen ? "320px" : "0px",
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
    pointerEvents: "none",
  },
  activePill: {
    background: "linear-gradient(to right, #00bfff, #8a2be2)",
    color: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  },
  hamburger: {
    display: "none",            // shown on small screens via CSS <style> above
    fontSize: "22px",
    background: "none",
    border: "none",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  mobileMenu: {
    overflow: "hidden",
    transition: "all 0.28s ease",
    background: "#fff",
    borderTop: "1px solid #eee",
    position: "absolute",
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
