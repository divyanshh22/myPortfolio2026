import { useEffect } from "react";

export default function useReveal() {
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (
            params.has("static") ||
            matchMedia("(prefers-reduced-motion: reduce)").matches ||
            !("IntersectionObserver" in window)
        ) {
            document.documentElement.classList.add("no-reveal");
            return;
        }
        const io = new IntersectionObserver(
            entries => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        e.target.classList.add("in");
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
        );
        document.querySelectorAll(".reveal").forEach(el => io.observe(el));
        return () => io.disconnect();
    }, []);
}
