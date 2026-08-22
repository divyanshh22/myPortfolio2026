import { profile, heroSummary } from "../data";
import { ArrowDownIcon, ArrowRightIcon } from "./Icons";

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container">
                <p className="hero-status reveal">
                    <span className="dot dot-static" /> Based in {profile.locationShort}
                </p>
                <div className="hero-title-wrap reveal">
                    <h1>
                        Divyansh<br />Singh<span className="name-dot">.</span>
                    </h1>
                </div>
                <div className="hero-raw-info reveal">
                    <h2>BACKEND & FULL-STACK</h2>
                    <h3>PYTHON / DJANGO / POSTGRESQL</h3>
                </div>
                <p className="hero-summary reveal">{heroSummary}</p>
                
                <div className="hero-actions reveal">
                    <a href="#projects" className="btn btn-primary">
                        Selected Works <ArrowDownIcon size={14} />
                    </a>
                    <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                        View Résumé <ArrowRightIcon size={14} />
                    </a>
                </div>
                
                <div className="hero-links mono reveal">
                    <a href={profile.github} target="_blank" rel="noopener noreferrer">GH: divyanshh22</a>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">IN: divyansh-singh</a>
                    <a href={`mailto:${profile.email}`}>EM: mail@divyansh222f</a>
                </div>
            </div>
        </section>
    );
}
