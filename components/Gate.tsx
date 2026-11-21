"use client";
import { useEffect, useState } from "react";
import { DISCLAIMER } from "@/lib/content";
import { LogoMark } from "./Logo";

const KEY = "bhairava-disclaimer-accepted";

export default function Gate() {
  const [state, setState] = useState<"checking" | "show" | "leaving" | "hidden">("checking");
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    let accepted = false;
    try {
      accepted = sessionStorage.getItem(KEY) === "1";
    } catch {}
    setState(accepted ? "hidden" : "show");
  }, []);

  useEffect(() => {
    document.body.classList.toggle("locked", state === "show" || state === "checking");
  }, [state]);

  const enter = () => {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {}
    setState("leaving");
    setTimeout(() => setState("hidden"), 700);
  };

  if (state === "hidden") return null;

  return (
    <div className={`gate${state === "leaving" ? " leaving" : ""}`} role="dialog" aria-modal="true" aria-labelledby="gate-title">
      <div className="gate-bg" />
      {state !== "checking" && (
        <div className="gate-card">
          <div className="gate-brand" style={{ color: "var(--ink)" }}>
            <LogoMark size={36} />
            <span className="brand-text">
              <span className="brand-name" style={{ display: "block", fontSize: 18 }}>Bhairava</span>
              <span className="brand-sub" style={{ display: "block", opacity: 0.6 }}>Alternative Investment Trust</span>
            </span>
          </div>
          <span className="eyebrow">Important information</span>
          <h2 id="gate-title">Please read before entering this website</h2>
          <div className="gate-body" tabIndex={0}>
            {DISCLAIMER.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <label className="gate-check">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            <span>
              I confirm that I have read and understood the above, and that I am accessing this website for information
              purposes only, of my own accord.
            </span>
          </label>
          <div className="gate-actions">
            <button className="btn btn-primary" disabled={!agree} onClick={enter}>
              I agree — enter site
              <svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden="true"><path d="M0 5h20M16 1l4 4-4 4" stroke="currentColor" /></svg>
            </button>
            <a className="btn btn-ghost" href="https://www.sebi.gov.in/" rel="noopener">
              Decline &amp; exit
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
