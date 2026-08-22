import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "../data";
import SectionHead from "./SectionHead";
import {
    MailIcon, PinIcon, CopyIcon, CheckIcon, SendIcon,
    GithubIcon, LinkedinIcon, ArrowRightIcon,
} from "./Icons";

export default function Contact() {
    const formRef = useRef(null);
    const [status, setStatus] = useState("idle"); // idle | sending
    const [toast, setToast] = useState(null);
    const [copied, setCopied] = useState(null);
    const toastTimer = useRef(null);

    const showToast = msg => {
        setToast(msg);
        clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => setToast(null), 2400);
    };

    const copy = async text => {
        try {
            if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
            else {
                const ta = document.createElement("textarea");
                ta.value = text;
                ta.style.position = "fixed";
                ta.style.opacity = "0";
                document.body.appendChild(ta);
                ta.select();
                document.execCommand("copy");
                ta.remove();
            }
            setCopied(text);
            setTimeout(() => setCopied(null), 1400);
            showToast("Copied!");
        } catch {
            showToast("Copy failed");
        }
    };

    const onSubmit = e => {
        e.preventDefault();
        const form = formRef.current;
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        setStatus("sending");
        emailjs
            .sendForm("service_uh50vva", "template_lp82llc", form, "VPAUZ6fH6wWkN48pE")
            .then(() => {
                showToast("Message sent — thanks!");
                form.reset();
            })
            .catch(() => showToast("Couldn't send. Try again or email me directly."))
            .finally(() => setStatus("idle"));
    };

    return (
        <section className="section section-alt" id="contact">
            <div className="container">
                <SectionHead num="06" title="Contact" />
                <div className="contact-grid">
                    <div className="contact-info reveal">
                        <p>
                            Have a role, a project, or just want to say hi? My inbox is always open — I usually reply within a day.
                        </p>
                        <a className="contact-mail" href={`mailto:${profile.email}`}>
                            divyansh222f@gmail.com <ArrowRightIcon size={18} />
                        </a>
                        <ul className="contact-lines">
                            <li>
                                <PinIcon size={15} /> Bhopal, Madhya Pradesh — {profile.pincode}
                            </li>
                            <li>
                                <MailIcon size={15} /> {profile.email}
                                <button className="copy-btn" aria-label="Copy email" onClick={() => copy(profile.email)}>
                                    {copied === profile.email ? <CheckIcon size={13} /> : <CopyIcon size={13} />}
                                </button>
                            </li>
                            <li>
                                {profile.phone}
                                <button className="copy-btn" aria-label="Copy phone number" onClick={() => copy(profile.phone)}>
                                    {copied === profile.phone ? <CheckIcon size={13} /> : <CopyIcon size={13} />}
                                </button>
                            </li>
                        </ul>
                        <ul className="socials">
                            <li><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon size={17} /></a></li>
                            <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={16} /></a></li>
                            <li><a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon size={16} /></a></li>
                        </ul>
                    </div>

                    <form ref={formRef} className="contact-form reveal" onSubmit={onSubmit} noValidate>
                        <div className="field">
                            <label htmlFor="cf-name">Name</label>
                            <input id="cf-name" type="text" name="name" placeholder="Your name" required />
                        </div>
                        <div className="field">
                            <label htmlFor="cf-email">Email</label>
                            <input id="cf-email" type="email" name="email" placeholder="you@example.com" required />
                        </div>
                        <div className="field">
                            <label htmlFor="cf-message">Message</label>
                            <textarea id="cf-message" name="message" rows="5" placeholder="What are you working on?" required />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                            {status === "sending" ? "Sending…" : <>Send message <SendIcon size={14} /></>}
                        </button>
                    </form>
                </div>
            </div>
            <div id="toast" role="status" className={toast ? "show" : ""}>{toast}</div>
        </section>
    );
}
