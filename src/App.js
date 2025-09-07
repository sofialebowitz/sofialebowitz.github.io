import Navbar from "./components/navigator";
import AboutMe from "./components/aboutme";
import Landing from "./components/landing";
import Connect from "./components/connect";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />

      <AboutMe /> 

      <Connect />
      <main style={styles.main}>
      </main>
    </div>
  );
}

const styles = {
  main: {
    padding: "40px",
    fontFamily: "sans-serif",
  },
};
