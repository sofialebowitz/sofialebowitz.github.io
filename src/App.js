import Navigator from "./components/navigator";
import AboutMe from "./components/aboutme";
import Landing from "./components/landing";
import Connect from "./components/connect";
import Cooking from "./components/cooking";
import TravelSection from "./components/travel";

export default function Home() {
  return (
    <div style={{ background: "linear-gradient(135deg, #e0e7ff, #fdf2f8)" }}>
      <Navigator />

      <section id="home">
        <Landing />
      </section>

      <section id="about" style={styles.placeholder}>
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
    </div>
  );
}

const styles = {
  main: {
    padding: "40px",
    fontFamily: "sans-serif",
  },
  placeholder: {
    // minHeight: "100vh",
    padding: "20px 30px",
    fontFamily: "sans-serif",
  },
};

