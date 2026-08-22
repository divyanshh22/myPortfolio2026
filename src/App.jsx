import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StackStrip from "./components/StackStrip";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ToTop from "./components/ToTop";
import useReveal from "./hooks/useReveal";

export default function App() {
    const [theme, setTheme] = useState(() =>
        localStorage.getItem("ds-theme") === "light" ? "light" : "dark"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("ds-theme", theme);
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute("content", theme === "light" ? "#faf8f4" : "#121210");
    }, [theme]);

    useReveal();

    return (
        <>
            <Header theme={theme} onToggleTheme={() => setTheme(t => (t === "light" ? "dark" : "light"))} />
            <main>
                <Hero />
                <StackStrip />
                <About />
                <Skills />
                <Education />
                <Projects />
                <Certifications />
                <Contact />
            </main>
            <Footer />
            <ToTop />
        </>
    );
}
