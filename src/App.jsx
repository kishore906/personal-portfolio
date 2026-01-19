import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // const [darkMode, setDarkMode] = useState(() => {
  //   // Check system preference initially
  //   if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     return true;
  //   }
  //   return false;
  // });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300 font-sans selection:bg-primary selection:text-white">
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;
