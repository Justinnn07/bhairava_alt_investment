"use client";
import { useState } from "react";

type Props = {
  initials: string;
  name: string;
  role: string;
  summary: string;
  more: string[];
  tags: string[];
};

export default function Person({ initials, name, role, summary, more, tags }: Props) {
  const [open, setOpen] = useState(false);
  const id = `bio-${initials.toLowerCase()}`;
  return (
    <article className={`person${open ? " open" : ""}`}>
      <div className="person-top">
        <div className="monogram" aria-hidden="true">{initials}</div>
        <div>
          <h4>{name}</h4>
          <div className="role">{role}</div>
        </div>
      </div>
      <p className="person-summary">{summary}</p>
      <div className="person-tags">
        {tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <div className="person-more" id={id} aria-hidden={!open}>
        <div>
          {more.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <button className="toggle" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
        <span className="plus" />
        {open ? "Close profile" : "Read full profile"}
      </button>
    </article>
  );
}
