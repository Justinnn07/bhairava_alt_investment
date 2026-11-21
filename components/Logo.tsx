type Props = { dark?: boolean; compact?: boolean };

export function LogoMark({ size = 40, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg className="brand-mark" width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="0.75" y="0.75" width="46.5" height="46.5" stroke={color} strokeWidth="1.5" />
      <path d="M7 38 L19 19 L25 28 L31 13 L41 38" stroke={color} strokeWidth="1.6" strokeLinejoin="miter" />
      <path d="M28.2 20 L31 13 L33.9 20.2 L31 18.4 Z" fill={color} />
      <path d="M7 38 H41" stroke={color} strokeWidth="1.6" />
    </svg>
  );
}

export default function Logo({ dark, compact }: Props) {
  return (
    <a href="#top" className={`brand${dark ? " dark" : ""}`} aria-label="Bhairava Alternative Investment Trust — home">
      {/* <LogoMark /> */}
      <span className="brand-text">
        <span className="brand-name" style={{ display: "block" }}>Bhairava</span>
        {!compact && <span className="brand-sub" style={{ display: "block" }}>Alternative Investment Trust</span>}
      </span>
    </a>
  );
}
