export default function SectionHead({ num, title }) {
    return (
        <header className="section-head reveal">
            <span className="section-num mono">{num}</span>
            <h2>{title}</h2>
        </header>
    );
}
