import { profile } from "../data";
import SectionHead from "./SectionHead";

const facts = [
    { label: "location", value: profile.location },
    { label: "degree", value: "B.Tech, Information Technology · 2022—2026" },
    { label: "focus", value: "Django · DRF · PostgreSQL · Redis" },
    { label: "email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "phone", value: "+91 83497 55502" },
];

export default function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <SectionHead num="01" title="About" />
                <div className="about-grid">
                    <div className="about-text reveal">
                        <p>
                            I'm a final-year Information Technology student at OIST Bhopal. Most of what I know
                            about software comes from building things end-to-end and then figuring out why they broke.
                        </p>
                        <p>
                            So far that has meant a college ERP used by students and faculty, a multi-vendor inventory
                            system with scheduled background jobs, and a WebSocket chat app. I like backend problems —
                            modelling data, writing clean REST APIs, keeping background tasks honest.
                        </p>
                        <p>Right now I'm looking for a full-time backend or full-stack role where I can keep doing that at a bigger scale.</p>
                    </div>
                    <aside className="about-facts reveal">
                        {facts.map(f => (
                            <div className="fact" key={f.label}>
                                <span className="mono">{f.label}</span>
                                {f.href ? <a href={f.href}>{f.value}</a> : f.value}
                            </div>
                        ))}
                    </aside>
                </div>
            </div>
        </section>
    );
}
