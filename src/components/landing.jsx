import { useEffect } from "react";
import { FaBook, FaPlane, FaBookReader } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";

export default function Landing() {
  useEffect(() => {
    const css = `
      /* Smooth fade/slide entrance */
      @keyframes fadeSlideUp {
        0%   { opacity: 0; transform: translateY(40px); }
        60%  { opacity: 0.85; transform: translateY(8px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .fade-in-all {
        animation: fadeSlideUp 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
      }

      /* Gentle floating animation */
      @keyframes floaty {
        0%   { transform: translateY(0px); }
        50%  { transform: translateY(-6px); }
        100% { transform: translateY(0px); }
      }
      .pill {
        transition: box-shadow 300ms ease;
        cursor: pointer;
      }
      .pill:hover {
        animation: floaty 2.2s ease-in-out infinite;
        box-shadow: 0 8px 18px rgba(0,0,0,0.12);
      }

      /* Respect reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .fade-in-all, .pill:hover {
          animation: none !important;
          transition: none !important;
        }
      }
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section style={styles.container}>
      {/* Profile Image */}
      <div style={styles.profileWrapper} className="fade-in-all">
        <div style={styles.profileCircle}>
          <img
            src="/sofiaheadshot.jpeg"
            alt="Sofia Headshot"
            style={styles.profileImage}
          />
        </div>
      </div>

      {/* Intro Text */}
      <h1 style={styles.title} className="fade-in-all">
        Hi, I'm <span style={styles.highlight}>Sofia!</span>
      </h1>

      {/* Tags */}
      <div style={styles.tags} className="fade-in-all">
        <div style={styles.tag} className="pill">
          <FaBook /> Communication Major
        </div>
        <div style={styles.tag} className="pill">
          <GiCookingPot /> Cooking Enthusiast
        </div>
        <div style={styles.tag} className="pill">
          <FaPlane /> World Traveler
        </div>
        <div style={styles.tag} className="pill">
          <FaBookReader /> Book Lover
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "60px 10px",
    minHeight: "60vh",
    background: "linear-gradient(135deg, #e0e7ff, #fdf2f8)",
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  profileWrapper: {
    position: "relative",
    display: "inline-block",
    marginBottom: "24px",
  },
  profileCircle: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    border: "3px solid #d7bdfb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    margin: "0 auto",
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    margin: "16px 0 8px",
    color: "#2d2e32",
  },
  highlight: {
    background: "linear-gradient(to right, #4169e1, #d02090)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  tags: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
    marginTop: "30px",
  },
  tag: {
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: "20px",
    padding: "10px 18px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontWeight: 500,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
};
