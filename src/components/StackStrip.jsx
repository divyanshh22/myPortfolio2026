import { skills } from "../data";

export default function StackStrip() {
    const names = [...new Set(skills.slice(0, 6).flatMap(g => g.items.map(i => i.name)))];
    const row = [...names, ...names];
    return (
        <div className="stack-strip" aria-hidden="true">
            <div className="stack-row">
                {row.map((n, i) => <span key={i}>{n}</span>)}
            </div>
        </div>
    );
}
