import { projects } from "../data";
import SectionHead from "./SectionHead";
import { ArrowUpRightIcon, GithubIcon } from "./Icons";

export default function Projects() {
    return (
        <section className="section section-alt" id="projects">
            <div className="container">
                <SectionHead num="04" title="Projects" />
                <div className="projects-list">
                    {projects.map(p => (
                        <article className="project-card reveal" key={p.num}>
                            <div className="project-num">{p.num}</div>
                            <div className="project-main">
                                <h3>{p.name}</h3>
                                <span className="project-date">{p.date}</span>
                                <ul className="project-points">
                                    {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
                                </ul>
                                <div className="tech-chips">
                                    {p.tech.map(t => <span key={t}>{t}</span>)}
                                </div>
                            </div>
                            <div className="project-links">
                                <a className="plink" href={p.live} target="_blank" rel="noopener noreferrer">
                                    Live <ArrowUpRightIcon size={13} />
                                </a>
                                <a className="plink" href={p.code} target="_blank" rel="noopener noreferrer">
                                    Code <GithubIcon size={14} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
