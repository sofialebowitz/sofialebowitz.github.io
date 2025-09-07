import { useRef, useState } from "react";
import { FaPaperPlane, FaCommentDots, FaCheckCircle } from "react-icons/fa";

export default function Connect() {
  const formRef = useRef(null);
  const [modal, setModal] = useState({ open: false, title: "", desc: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    const name = data.get("user_name");
    const email = data.get("user_email");
    const message = data.get("message");

    // open mail client
    window.location.href = `mailto:sofialebowitz04@gmail.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}%0AFrom: ${encodeURIComponent(email)}`;

    // show confirmation popup
    setModal({
      open: true,
      title: "Email started",
      desc: "Your email app has opened with the message filled in.",
    });

    formRef.current.reset();
  };

  return (
    <section style={styles.container}>
      {/* Heading */}
      <header style={{ textAlign: "center", padding: "40px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#d02090" }}>
          Let&apos;s Connect!
        </h2>
        <p style={{ color: "#333", maxWidth: 600, margin: "0 auto" }}>
          I&apos;d love to hear from you! Whether it&apos;s about communication,
          cooking, travel, or just to say hi ✨
        </p>
      </header>

      {/* Card */}
      <div style={styles.card}>
        <div style={styles.header}>
          <FaCommentDots /> Send me a message
        </div>

        <form ref={formRef} onSubmit={onSubmit}>
          <input
            style={styles.input}
            type="text"
            name="user_name"
            placeholder="Your name"
            required
          />
          <input
            style={styles.input}
            type="email"
            name="user_email"
            placeholder="Your email"
            required
          />
          <textarea
            style={styles.textarea}
            name="message"
            placeholder="Your message..."
            required
          />
          <button style={styles.button} type="submit">
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>

      {/* Confirmation Modal */}
      {modal.open && (
        <div
          style={styles.modalOverlay}
          onClick={() => setModal({ ...modal, open: false })}
        >
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <FaCheckCircle size={48} color="#22c55e" />
            <h3>{modal.title}</h3>
            <p>{modal.desc}</p>
            <button
              style={styles.ok}
              onClick={() => setModal({ ...modal, open: false })}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "linear-gradient(135deg, #ffe6f4, #e0e7ff)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  card: {
    maxWidth: 600,
    margin: "20px auto",
    padding: 20,
    borderRadius: 12,
    background: "#fff",
    boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontWeight: 700,
    marginBottom: 12,
  },
  input: {
    width: "100%",
    marginBottom: 12,
    padding: "10px",
    borderRadius: 8,
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    minHeight: 120,
    marginBottom: 12,
    padding: "10px",
    borderRadius: 8,
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: 8,
    background: "linear-gradient(90deg,#5aa0ff,#b74bff)",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "#fff",
    padding: 20,
    borderRadius: 12,
    textAlign: "center",
    maxWidth: 400,
  },
  ok: {
    marginTop: 10,
    padding: "8px 16px",
    border: "none",
    borderRadius: 6,
    background: "#22c55e",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
  },
};
