"use client";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#fund", label: "Bhairava I LVF" },
  { href: "#approach", label: "Approach" },
  { href: "#team", label: "Our Team" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("locked", open);
  }, [open]);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}${open ? " menu-open" : ""}`}>
      <div className="header-inner">
        <Logo />
        <nav className="nav" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={active === l.href ? "active" : ""} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <button className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="progress" ref={bar} />
    </header>
  );
}
