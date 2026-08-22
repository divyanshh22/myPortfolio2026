import { certifications } from "../data";
import SectionHead from "./SectionHead";
import { SignalIcon, CodeIcon } from "./Icons";

const icons = { signal: SignalIcon, code: CodeIcon };

export default function Certifications() {
    return (
        <section className="section" id="certifications">
            <div className="container">
                <SectionHead num="05" title="Certifications" />
                <ul className="cert-list">
                    {certifications.map(c => {
                        const Icon = icons[c.icon] || CodeIcon;
                        return (
                            <li className="cert-item reveal" key={c.title}>
                                <span className="cert-icon"><Icon size={19} /></span>
                                <div>
                                    <h3>{c.title}</h3>
                                    <p className="muted">Issued by {c.issuer}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
