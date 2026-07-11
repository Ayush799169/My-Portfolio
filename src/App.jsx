import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 80,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Gallery />
        <Blog />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
