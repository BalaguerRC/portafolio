import Footer from "./footer";
import Header from "./header";
import About from "./section/about";
import Projects from "./section/projects";
import Resumen from "./section/resumen";
import Skills from "./section/skills";

const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section id="resumen">
        <Resumen />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <footer style={{ height: "100%" }}>
        <Footer />
      </footer>
    </>
  );
};
export default Home;
