import { education } from "../data";
import SectionHead from "./SectionHead";

export default function Education() {
    return (
        <section className="section" id="education">
            <div className="container">
                <SectionHead num="03" title="Education" />
                <ol className="timeline">
                    {education.map(e => (
                        <li className="timeline-item reveal" key={e.title}>
                            <span className="tl-years mono">{e.years}</span>
                            <div className="tl-body">
                                <h3>{e.title}</h3>
                                <p className="muted">{e.place}</p>
                                {e.note && <p className="tl-note">{e.note}</p>}
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
