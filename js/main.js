!document.addEventListener("DOMContentLoaded", () => {
    const $ = (s, c = document) => c.querySelector(s);
    const $$ = (s, c = document) => [...c.querySelectorAll(s)];
    const isFine = matchMedia("(pointer: fine)").matches;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let vantaEffect = null;
    let toastTimer = null;
    const showToast = msg => {
        const t = $("#toast");
        if (!t) return;
        t.textContent = msg;
        t.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
    };
    const initTheme = () => {
        const btn = $("#theme-toggle");
        const stored = localStorage.getItem("ds-theme");
        if (stored === "light") document.documentElement.setAttribute("data-theme", "light");
        const syncIcon = () => {
            const light = document.documentElement.getAttribute("data-theme") === "light";
            btn.innerHTML = light ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            const meta = $('meta[name="theme-color"]');
            if (meta) meta.setAttribute("content", light ? "#f6f8fb" : "#0a0c10");
            try { if (vantaEffect && vantaEffect.setOptions) vantaEffect.setOptions({ backgroundColor: light ? 0xfdfbf7 : 0x0b0f1a, color: light ? 0x8e9ab3 : 0xd4b77a }); } catch (e) {}
        };
        syncIcon();
        btn.addEventListener("click", () => {
            const cur = document.documentElement.getAttribute("data-theme");
            if (cur === "light") { document.documentElement.removeAttribute("data-theme"); localStorage.removeItem("ds-theme"); }
            else { document.documentElement.setAttribute("data-theme", "light"); localStorage.setItem("ds-theme", "light"); }
            syncIcon();
        });
    };
    const initPreloader = () => {
        const el = $("#preloader");
        if (!el) return;
        const hide = () => {
            const bar = el.querySelector(".preloader-bar span");
            if (bar) bar.style.width = "100%";
            setTimeout(() => el.classList.add("hidden"), 520);
        };
        const min = 950;
        const start = Date.now();
        const done = () => {
            const remain = Math.max(0, min - (Date.now() - start));
            setTimeout(hide, remain);
        };
        if (document.readyState === "complete") done();
        else window.addEventListener("load", done, { once: true });
        setTimeout(() => { if (!el.classList.contains("hidden")) hide(); }, 4200);
    };
    const renderSkills = () => {
        const grid = $("#skills-grid");
        if (!grid) return;
        grid.innerHTML = SITE_DATA.skills.map(g => `
            <article class="skill-card" data-group="${g.group.toLowerCase()}" data-tilt data-tilt-max="6" data-tilt-speed="700" data-tilt-glare data-tilt-max-glare="0.08">
                <div class="skill-head">
                    <span class="skill-icon"><i class="${g.groupIcon}"></i></span>
                    <div>
                        <h3>${g.group}</h3>
                        <span class="skill-count">${g.items.length} · ${g.group.includes("Core") || g.group.includes("Soft") ? "expertise" : "technologies"}</span>
                    </div>
                </div>
                <div class="chips">
                    ${g.items.map(item => {
                        if (item.icon && item.icon.startsWith("http")) return `<span class="chip" data-name="${item.name.toLowerCase()}"><img src="${item.icon}" alt="${item.name}" loading="lazy">${item.name}</span>`;
                        if (item.icon) return `<span class="chip" data-name="${item.name.toLowerCase()}"><i class="${item.icon}"></i>${item.name}</span>`;
                        return `<span class="chip" data-name="${item.name.toLowerCase()}">${item.name}</span>`;
                    }).join("")}
                </div>
            </article>
        `).join("");
    };
    const getProjectTags = p => {
        if (p.name.includes("Chat")) return "django real-time";
        if (p.name.includes("E-Commerce")) return "django rest-api";
        return "django rest-api";
    };
    const renderProjects = () => {
        const list = $("#projects-list");
        if (!list) return;
        list.innerHTML = SITE_DATA.projects.map(p => `
            <article class="project-card" data-tags="${getProjectTags(p)}" data-tilt data-tilt-max="7" data-tilt-speed="700" data-tilt-glare data-tilt-max-glare="0.1">
                <div class="project-num">${p.num}</div>
                <div>
                    <div class="project-top">
                        <h3>${p.name}</h3>
                        <span class="project-date">${p.date}</span>
                    </div>
                    <ul class="project-points">
                        ${p.points.map(pt => `<li>${pt}</li>`).join("")}
                    </ul>
                    <div class="tech-chips">
                        ${p.tech.map(t => `<span>${t}</span>`).join("")}
                    </div>
                    <div class="project-links">
                        <a href="${p.live}" target="_blank" rel="noopener"><i class="fas fa-eye"></i> Live</a>
                        <a href="${p.code}" target="_blank" rel="noopener"><i class="fab fa-github"></i> Code</a>
                    </div>
                </div>
            </article>
        `).join("");
    };
    const renderMarquee = () => {
        const track = $("#marquee-track");
        if (!track) return;
        const names = [...new Set(SITE_DATA.skills.slice(0, 6).flatMap(g => g.items.map(i => i.name)))];
        const group = names.map(n => `<span>${n}</span>`).join("");
        track.innerHTML = group + group;
    };
    const typingEffect = () => {
        const el = $("#typed");
        if (!el) return;
        const roles = SITE_DATA.typedRoles;
        let ri = 0, ci = 0, del = false;
        const tick = () => {
            const w = roles[ri];
            el.textContent = w.slice(0, ci);
            if (!del && ci < w.length) { ci++; setTimeout(tick, 65); }
            else if (!del && ci === w.length) { del = true; setTimeout(tick, 1600); }
            else if (del && ci > 0) { ci--; setTimeout(tick, 30); }
            else { del = false; ri = (ri + 1) % roles.length; setTimeout(tick, 350); }
        };
        tick();
    };
    const initProjectFilters = () => {
        const bar = $("#project-filters");
        const list = $("#projects-list");
        if (!bar || !list) return;
        bar.addEventListener("click", e => {
            const btn = e.target.closest(".filter-btn");
            if (!btn) return;
            $$(".filter-btn", bar).forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const f = btn.dataset.filter;
            $$(".project-card", list).forEach(card => {
                const tags = card.dataset.tags || "";
                const show = f === "*" || tags.includes(f);
                card.classList.toggle("hidden", !show);
            });
            if (typeof AOS !== "undefined") try { AOS.refreshHard(); } catch (e) {}
        });
    };
    const initSkillSearch = () => {
        const input = $("#skill-search-input");
        const grid = $("#skills-grid");
        if (!input || !grid) return;
        input.addEventListener("input", () => {
            const q = input.value.trim().toLowerCase();
            $$(".skill-card", grid).forEach(card => {
                const chips = $$(".chip", card);
                let vis = 0;
                chips.forEach(chip => {
                    const match = !q || chip.dataset.name.includes(q);
                    chip.style.display = match ? "" : "none";
                    if (match) vis++;
                });
                card.classList.toggle("hidden", q ? vis === 0 : false);
            });
        });
    };
    const initCounters = () => {
        const card = $(".hero-card");
        if (!card) return;
        const els = $$("[data-count]", card);
        let ran = false;
        const run = () => {
            if (ran) return;
            ran = true;
            els.forEach(el => {
                const target = parseInt(el.dataset.count, 10);
                let cur = 0;
                const step = Math.max(1, Math.ceil(target / 52));
                const tick = () => {
                    cur = Math.min(target, cur + step);
                    el.textContent = cur;
                    if (cur < target) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
            });
        };
        const io = new IntersectionObserver(entries => {
            entries.forEach(ent => { if (ent.isIntersecting) { run(); io.disconnect(); } });
        }, { threshold: 0.4 });
        io.observe(card);
    };
    const initSpotlight = () => {
        const hero = $(".hero");
        const spot = $(".hero-spotlight");
        if (!hero || !spot || !isFine || reduced) return;
        hero.addEventListener("mousemove", e => {
            const r = hero.getBoundingClientRect();
            spot.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
            spot.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
        });
    };
    const initCursor = () => {
        if (!isFine || reduced) return;
        const dot = $("#cursor-dot");
        const ring = $("#cursor-ring");
        if (!dot || !ring) return;
        document.documentElement.classList.add("custom-cursor");
        let rx = -100, ry = -100, mx = -100, my = -100;
        let visible = false;
        const lerp = (a, b, n) => a + (b - a) * n;
        const show = () => { if (!visible) { visible = true; dot.style.opacity = "1"; ring.style.opacity = "1"; } };
        const hide = () => { visible = false; dot.style.opacity = "0"; ring.style.opacity = "0"; };
        document.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; dot.style.left = mx + "px"; dot.style.top = my + "px"; show(); });
        document.addEventListener("mouseleave", hide);
        document.addEventListener("mouseenter", show);
        const loop = () => { rx = lerp(rx, mx, 0.18); ry = lerp(ry, my, 0.18); ring.style.left = rx + "px"; ring.style.top = ry + "px"; requestAnimationFrame(loop); };
        loop();
        const hovers = "a, button, .chip, .card, .project-card, .skill-card, input, textarea";
        document.addEventListener("mouseover", e => { if (e.target.closest(hovers)) ring.classList.add("hover"); });
        document.addEventListener("mouseout", e => { if (e.target.closest(hovers)) ring.classList.remove("hover"); });
    };
    const initMagnetic = () => {
        if (!isFine || reduced) return;
        $$(".btn").forEach(btn => {
            btn.addEventListener("mousemove", e => {
                const r = btn.getBoundingClientRect();
                const x = (e.clientX - r.left - r.width / 2) * 0.22;
                const y = (e.clientY - r.top - r.height / 2) * 0.32;
                btn.style.transform = `translate(${x}px, ${y}px)`;
            });
            btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
        });
    };
    const initTilt = () => {
        if (!isFine || reduced || typeof VanillaTilt === "undefined") return;
        try { VanillaTilt.init($$("[data-tilt]"), { perspective: 900, scale: 1.02, glare: true }); } catch (e) {}
    };
    const initAOS = () => {
        if (typeof AOS !== "undefined" && !reduced) {
            try { AOS.init({ duration: 700, once: true, offset: 80, easing: "ease-out-cubic" }); } catch (e) { document.documentElement.classList.add("no-aos"); }
        } else { document.documentElement.classList.add("no-aos"); }
    };
    const initLenis = () => {
        if (reduced || typeof Lenis === "undefined") return null;
        try {
            const lenis = new Lenis({ duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
            const raf = time => { lenis.raf(time); requestAnimationFrame(raf); };
            requestAnimationFrame(raf);
            if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
                lenis.on("scroll", ScrollTrigger.update);
                gsap.ticker.add(time => lenis.raf(time * 1000));
                gsap.ticker.lagSmoothing(0);
            }
            return lenis;
        } catch (e) { return null; }
    };
    const initGSAP = () => {
        if (reduced || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
        try {
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(".orb-1", { yPercent: -18, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });
            gsap.to(".orb-2", { yPercent: -28, xPercent: 6, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });
            gsap.to(".orb-3", { yPercent: -14, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });
            gsap.utils.toArray(".section-head").forEach(h => {
                gsap.from(h, { y: 22, opacity: 0, duration: .7, ease: "power3.out", scrollTrigger: { trigger: h, start: "top 88%", once: true } });
            });
        } catch (e) {}
    };
    const initVanta = () => {
        const el = $("#hero-bg");
        if (!el || reduced || !isFine || window.innerWidth < 768) return;
        if (typeof VANTA === "undefined" || typeof THREE === "undefined") return;
        try {
            const light = document.documentElement.getAttribute("data-theme") === "light";
            vantaEffect = VANTA.NET({ el: el, THREE: THREE, mouseControls: true, touchControls: false, gyroControls: false, minHeight: 200, minWidth: 200, scale: 1, scaleMobile: 1, color: light ? 0x8e9ab3 : 0xd4b77a, backgroundColor: light ? 0xfdfbf7 : 0x0b0f1a, points: 9, maxDistance: 22, spacing: 18, showDots: true });
        } catch (e) {}
    };
    const initNav = () => {
        const toggle = $("#nav-toggle");
        const menu = $("#nav-menu");
        toggle.addEventListener("click", () => {
            const open = menu.classList.toggle("open");
            toggle.classList.toggle("open", open);
            toggle.setAttribute("aria-expanded", open);
        });
        $$("a", menu).forEach(a => a.addEventListener("click", () => { menu.classList.remove("open"); toggle.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }));
        const sections = $$("section[id]");
        const links = $$(".nav-menu a");
        const onScroll = () => {
            const scrolled = window.scrollY > 10;
            $("#header").classList.toggle("scrolled", scrolled);
            $("#to-top").classList.toggle("show", window.scrollY > 520);
            const prog = $("#progress");
            if (prog) { const h = document.documentElement.scrollHeight - window.innerHeight; prog.style.transform = `scaleX(${h > 0 ? Math.min(1, window.scrollY / h) : 0})`; }
            let cur = "";
            sections.forEach(sec => { if (window.scrollY >= sec.offsetTop - 120) cur = sec.id; });
            links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${cur}`));
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
    };
    const initCopy = () => {
        $$(".copy-btn").forEach(btn => {
            btn.addEventListener("click", async () => {
                const txt = btn.dataset.copy || "";
                try {
                    if (navigator.clipboard && navigator.clipboard.writeText) await navigator.clipboard.writeText(txt);
                    else { const ta = document.createElement("textarea"); ta.value = txt; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove(); }
                    showToast("Copied!");
                    const old = btn.innerHTML; btn.innerHTML = '<i class="fas fa-check"></i>'; setTimeout(() => btn.innerHTML = old, 1200);
                } catch (e) { showToast("Copy failed"); }
            });
        });
    };
    const initContactForm = () => {
        const form = $("#contact-form");
        if (!form || typeof emailjs === "undefined") return;
        form.addEventListener("submit", e => {
            e.preventDefault();
            const btn = form.querySelector("button[type=submit]");
            btn.disabled = true;
            const prev = btn.innerHTML;
            btn.innerHTML = "Sending...";
            emailjs.init("VPAUZ6fH6wWkN48pE");
            emailjs.sendForm("service_uh50vva", "template_lp82llc", form).then(() => { showToast("Message sent!"); form.reset(); }).catch(() => showToast("Failed to send. Try again.")).finally(() => { btn.disabled = false; btn.innerHTML = prev; });
        });
    };
    const yr = $("#year");
    if (yr) yr.textContent = new Date().getFullYear();
    initTheme();
    initPreloader();
    renderSkills();
    renderProjects();
    renderMarquee();
    typingEffect();
    initProjectFilters();
    initSkillSearch();
    initCounters();
    initSpotlight();
    initCursor();
    initMagnetic();
    initTilt();
    initLenis();
    initAOS();
    initGSAP();
    initVanta();
    initNav();
    initCopy();
    initContactForm();
});
