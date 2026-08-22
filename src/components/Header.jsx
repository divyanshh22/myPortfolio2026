import { useEffect, useState } from "react";
import { navSections } from "../data";
import { MoonIcon, SunIcon } from "./Icons";

export default function Header({ theme, onToggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const sections = navSections.map(s => document.getElementById(s.id)).filter(Boolean);
        const progress = document.getElementById("progress");
        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 10);
            if (progress) {
                const h = document.documentElement.scrollHeight - window.innerHeight;
                progress.style.transform = `scaleX(${h > 0 ? Math.min(1, y / h) : 0})`;
            }
            let cur = "";
            sections.forEach(sec => { if (y >= sec.offsetTop - 140) cur = sec.id; });
            setActive(cur);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("menu-open", open);
        if (!open) return;
        const esc = e => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", esc);
        return () => document.removeEventListener("keydown", esc);
    }, [open]);

    return (
        <header id="header" className={`${scrolled ? "scrolled" : ""}${open ? " menu-open" : ""}`}>
            <div id="progress" aria-hidden="true" />
            <nav className="nav container">
                <a href="#home" className="logo" onClick={() => setOpen(false)}>
                    Divyansh Singh<em> / DEV</em>
                </a>
                <ul className={`nav-menu${open ? " open" : ""}`}>
                    {navSections.map((s, i) => (
                        <li key={s.id}>
                            <a
                                href={`#${s.id}`}
                                className={active === s.id ? "active" : undefined}
                                onClick={() => setOpen(false)}
                            >
                                <span className="nav-idx">{String(i + 1).padStart(2, "0")}</span>
                                {s.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="nav-actions">
                    <button className="theme-toggle" aria-label="Toggle theme" onClick={onToggleTheme}>
                        {theme === "light" ? <SunIcon size={16} /> : <MoonIcon size={15} />}
                    </button>
                    <button
                        className={`nav-toggle${open ? " open" : ""}`}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        onClick={() => setOpen(o => !o)}
                    >
                        <span /><span />
                    </button>
                </div>
            </nav>
        </header>
    );
}
