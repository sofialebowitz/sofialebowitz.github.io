import Navbar from "./components/navigator";
import AboutMe from "./components/aboutme";
import Landing from "./components/landing";
import Connect from "./components/connect";
import Cooking from "./components/cooking";

export default function Home() {
  return (
    <div style={{backgroundColor:"linear-gradient(135deg, #e0e7ff, #fdf2f8)"}}>
      <Navbar />

      {/* Sections with IDs that match Navbar keys */}
      <section id="home">
        <Landing />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="cooking" style={styles.placeholder}>
        <Cooking />
      </section>

      <section id="travel" style={styles.placeholder}>
        <h2>Travel</h2>
        <p>Content coming soon...</p>
      </section>

      <section id="contact">
        <Connect />
      </section>

      <main style={styles.main}></main>
    </div>
  );
}

const styles = {
  main: {
    padding: "40px",
    fontFamily: "sans-serif",
  },
  placeholder: {
    minHeight: "100vh", // so scrolling is visible
    padding: "80px 40px",
    fontFamily: "sans-serif",
  },
};
