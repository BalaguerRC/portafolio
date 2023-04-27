import { useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import Contact from "./section/contact";
import Projects from "./section/projects";
import Resumen from "./section/resumen";
import Skills from "./section/skills";

const Home = () => {
  const lenguaje=localStorage.getItem("lenguaje");
  // if(lenguaje==null) localStorage.setItem("lenguaje", "es");

  //const [active,setActive]=useState(false);

  useEffect(()=>{
    console.log("lenguaje", lenguaje)
  },[lenguaje])
  return (
    <>
      <header>
        <Header lenguaje={lenguaje}/>
      </header>
      <section id="resumen">
        <Resumen lenguaje={lenguaje}/>
      </section>
      <section id="skills">
        <Skills lenguaje={lenguaje}/>
      </section>
      <section id="projects">
        <Projects lenguaje={lenguaje}/>
      </section>
      <section id="contact">
        <Contact lenguaje={lenguaje}/>
      </section>
      <footer style={{ height: "100%" }}>
        <Footer lenguaje={lenguaje}/>
      </footer>
    </>
  );
};
export default Home;
