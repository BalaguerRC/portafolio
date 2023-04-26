import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Contact from "./section/contact";
import Projects from "./section/projects";
import Resumen from "./section/resumen";
import Skills from "./section/skills";

const Home = () => {
  const lenguaje=localStorage.getItem("lenguaje");
  // if(lenguaje==null) localStorage.setItem("lenguaje", "es");

  const [active,setActive]=useState(false);

  useEffect(()=>{
    console.log("lenguaje", lenguaje)
  },[lenguaje])
  return (
    <>
      <header>
        <Header lenguaje={lenguaje}/>
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
      <section id="contact">
        <Contact />
      </section>
      <footer style={{ height: "100%" }}>
        <Footer />
      </footer>
    </>
  );
};
export default Home;
