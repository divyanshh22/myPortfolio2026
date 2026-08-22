import { useEffect, useState } from "react";
import { navSections, profile } from "../data";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon } from "./Icons";

function useIstClock() {
    const [time, setTime] = useState("");
    useEffect(() => {
        const fmt = new Intl.DateTimeFormat("en-GB", {
            timeZone: "Asia/Kolkata",
            hour: "2-digit",
            minute: "2-digit",
        });
        const tick = () => setTime(fmt.format(new Date()));
        tick();
        const t = setInterval(tick, 30000);
        return () => clearInterval(t);
    }, []);
    return time;
}

export default function Footer() {
    const time = useIstClock();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-cta reveal">
                    <p className="mono footer-kicker">Got an opening or an idea?</p>
                    <a className="footer-mail" href={`mailto:${profile.email}`}>
                        Let's build something<span className="name-dot">.</span>
                        <ArrowUpRightIcon size={36} strokeWidth={1.6} />
                    </a>
                </div>

                <div className="footer-grid">
                    <div className="f-col">
                        <span className="mono f-label">sitemap</span>
                        <ul>
                            {navSections.map(s => (
                                <li key={s.id}><a href={`#${s.id}`}>{s.label}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="f-col">
                        <span className="mono f-label">elsewhere</span>
                        <ul>
                            <li>
                                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                                    GitHub <GithubIcon size={13} />
                                </a>
                            </li>
                            <li>
                                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                                    LinkedIn <LinkedinIcon size={12} />
                                </a>
                            </li>
                            <li>
                                <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                                    Résumé <ArrowUpRightIcon size={13} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="f-col">
                        <span className="mono f-label">status</span>
                        <p>Bhopal, IN — <span className="mono">{time} IST</span></p>
                        <p><span className="dot dot-static" /> Open to full-time roles</p>
                    </div>
                </div>

                <div className="footer-base">
                    <p>© {new Date().getFullYear()} Divyansh Singh. All rights reserved.</p>
                    <p className="colophon">
                        Set in Syne &amp; Inter · hand-built with React + Vite
                    </p>
                </div>
            </div>
        </footer>
    );
}
