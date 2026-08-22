import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./Icons";

export default function ToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 560);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <a href="#home" className={`to-top${show ? " show" : ""}`} aria-label="Back to top">
            <ArrowUpIcon size={16} />
        </a>
    );
}
