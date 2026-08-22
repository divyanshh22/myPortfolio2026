import { skills } from "../data";
import SectionHead from "./SectionHead";

export default function Skills() {
    return (
        <section className="section section-alt" id="skills">
            <div className="container">
                <SectionHead num="02" title="Skills" />
                <div className="skills-editorial">
                    {skills.map(g => (
                        <div className="skill-line reveal" key={g.group}>
                            <h3 className="skill-label mono">{g.group}</h3>
                            <p className="skill-list">
                                {g.items.map(item => item.name).join(" \u2014 ")}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
