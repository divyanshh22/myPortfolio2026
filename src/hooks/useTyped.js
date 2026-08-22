import { useEffect, useState } from "react";

export default function useTyped(roles) {
    const [text, setText] = useState("");
    useEffect(() => {
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setText(roles[0]);
            return;
        }
        let ri = 0, ci = 0, del = false;
        let timer;
        const tick = () => {
            const word = roles[ri];
            setText(word.slice(0, ci));
            if (!del && ci < word.length) { ci++; timer = setTimeout(tick, 60); }
            else if (!del && ci === word.length) { del = true; timer = setTimeout(tick, 1800); }
            else if (del && ci > 0) { ci--; timer = setTimeout(tick, 28); }
            else { del = false; ri = (ri + 1) % roles.length; timer = setTimeout(tick, 380); }
        };
        tick();
        return () => clearTimeout(timer);
    }, [roles]);
    return text;
}
