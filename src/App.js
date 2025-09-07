import Navbar from "./components/navigator";
import AboutMe from "./components/aboutme";
import Landing from "./components/landing";
import Connect from "./components/connect";
import Cooking from "./components/cooking";
import TravelSection from "./components/travel";

export default function Home() {
  return (
    <div style={{ background: "linear-gradient(135deg, #e0e7ff, #fdf2f8)" }}>
      <Navbar />

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
        <TravelSection />
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
    minHeight: "100vh",
    padding: "80px 40px",
    fontFamily: "sans-serif",
  },
};
