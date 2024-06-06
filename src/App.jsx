import { useState, useRef, useLayoutEffect,useEffect } from "react";
import Navbar from "./components/NAVBAR/Navbar";
import Hero from "./components/HERO/Hero";
import About from "./components/ABOUT/About";
import Skills from "./components/SKILLS/Skills";
import Services from "./components/SERVICES/Services";
import Projects from "./components/PROJECTS/Projects";
import Contact from "./components/CONTACT/Contact";
import Footer from "./components/FOOTER/Footer";
import "./index.scss";

import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    AOS.init({
      delay:3,
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.from("#up-pane", {
        xPercent: -100,
        duration: 1.3,
        delay: 0.2,
      })
        .from(["#w1", "#w2"], {
          opacity: 0,
          y: +40,
          stagger: 0.5,
        })
        .from("#w3", {
          opacity: 0,
          y: -100,
          delay: 0.2,
          duration: 1,
          ease: "bounce",
        })
        .to(["#w1", "#w2", "#w3"], {
          opacity: 0,
          yPercent: -100,
          delay: 0.5,
          duration: 1.4,
          stagger: 0.5,
        })
        .to("#up-pane", {
          xPercent: -130,
          duration: 1,
        })
        .from("#main", {
          y: +40,
        });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="app" ref={appRef}>
        <div id="up-pane" className="animate-part">
          <h1 id="w1" className="welcome">
            Welcome
          </h1>
          <h2 id="w2">to My</h2>
          <h1 id="w3" className="W1">
            Portfolio
          </h1>
        </div>

        <div  id="main" className="main-app">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
