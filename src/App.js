import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HireMe from "./components/HireMe";
// import "./App.css";

function App() {
  useEffect(() => {
    // Cursor effect
    const cursor = document.querySelector(".cursor");

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
      }
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="App">
      <div className="cursor"></div>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <HireMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
