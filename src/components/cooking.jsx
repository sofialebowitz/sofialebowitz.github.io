// src/sections/Cooking.jsx
import { FaUtensils } from "react-icons/fa";

/**
 * Cooking section styled to match portfolio hero aesthetic
 * - Orange gradient background
 * - Big centered header with icon
 * - Responsive card-style photo gallery
 */
export default function Cooking({ photos = defaultPhotos }) {
  return (
    <section id="cooking" className="cooking-section">
      <div className="cooking-header">
        <FaUtensils className="cooking-icon" />
        <h2 className="cooking-title">Cooking Creations</h2>
        <p className="cooking-sub">
          From sweet treats to savory plates — here are some dishes I’ve made 🍊
        </p>
      </div>

      <div className="cooking-grid">
        {photos.map((p, i) => (
          <div key={i} className="cooking-card">
            <img src={p.src} alt={p.alt || `Dish ${i + 1}`} />
            {p.caption && <p className="caption">{p.caption}</p>}
          </div>
        ))}
      </div>

      <style jsx>{`
        .cooking-section {
          padding: 80px 24px;
          background: linear-gradient(135deg, #ffb347, #ff7e00);
          color: #fff;
          text-align: center;
        }
        .cooking-header {
          margin-bottom: 40px;
        }
        .cooking-icon {
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: #fff4e6;
        }
        .cooking-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0;
        }
        .cooking-sub {
          max-width: 700px;
          margin: 12px auto 0;
          font-size: 1.1rem;
          opacity: 0.95;
        }
        .cooking-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 40px;
        }
        .cooking-card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cooking-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
        }
        .cooking-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }
        .caption {
          padding: 12px;
          background: rgba(255, 255, 255, 0.2);
          font-size: 0.95rem;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}

const defaultPhotos = [
  { src: "/images/cooking/pasta.jpg", caption: "Creamy Tomato Basil Pasta" },
  { src: "/images/cooking/tacos.jpg", caption: "Street-Style Tacos" },
  { src: "/images/cooking/cake.jpg", caption: "Berry Layer Cake" },
  { src: "/images/cooking/ramen.jpg", caption: "Miso Ramen" },
];
