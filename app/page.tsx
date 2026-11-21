import Image from "next/image";
import Header from "@/components/Header";
import Gate from "@/components/Gate";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";
import Person from "@/components/Person";
import Logo from "@/components/Logo";
import { ADDRESS_LINES, DISCLAIMER, EMAIL, MANAGER, REG_NO, SCHEME, TRUST } from "@/lib/content";

const Arrow = ({ w = 34 }: { w?: number }) => (
  <svg width={w} height="10" viewBox={`0 0 ${w} 10`} fill="none" aria-hidden="true">
    <path d={`M0 5h${w - 2}M${w - 6} 1l4 4-4 4`} stroke="currentColor" />
  </svg>
);

const FUND_DETAILS: [string, string][] = [
  ["Trust", TRUST],
  ["Registration category", "Category II Alternative Investment Fund"],
  ["SEBI registration number", REG_NO],
  ["Scheme", SCHEME],
  ["Scheme classification", "Large Value Fund for Accredited Investors"],
  ["Investment Manager", MANAGER],
];

const STRATEGY = [
  {
    tag: "Listed",
    title: "Listed securities",
    img: "/images/listed.jpg",
    body:
      "The Fund may invest in eligible listed equity, equity-linked instruments, preference shares, debt and convertible instruments. It may acquire securities on recognised stock exchanges or through eligible issuances, including mainboard and SME IPOs, private placements, preferential allotments and qualified institutional placements. Where eligible, the Fund may participate in IPOs as a qualified institutional buyer or anchor investor.",
  },
  {
    tag: "Unlisted",
    title: "Unlisted securities",
    img: "/images/range.jpg",
    body:
      "The Fund may invest in eligible unlisted equity and convertible instruments, including warrants, as well as limited liability partnership interests and other eligible unlisted instruments. The Fund may also evaluate pre-IPO opportunities in accordance with the Fund Documents.",
  },
  {
    tag: "India · Overseas",
    title: "Geographic scope",
    img: "/images/valley.jpg",
    body:
      "The Fund may invest up to 100% of its Investable Funds in India. It may also invest in eligible overseas investee entities within the limits set out below, subject to applicable law and the AIF Regulations.",
  },
];

const ALLOCATION: { k: string; v: number; note?: string }[] = [
  { k: "Listed securities", v: 49 },
  { k: "Unlisted securities", v: 100 },
  { k: "Any single Portfolio Entity", v: 50 },
  { k: "Overseas investee entities", v: 25, note: "Subject to applicable requirements" },
  { k: "Any single sector", v: 100 },
  { k: "Investments in India", v: 100 },
];

const STEPS: [string, string][] = [
  ["Source opportunities", "Identify investment opportunities through sponsor networks, market mapping and the Investment Manager’s sourcing channels."],
  ["Screen opportunities", "Assess each opportunity against the Fund’s objectives, considering the business model, financial profile, growth potential and fit within the portfolio."],
  ["Conduct due diligence", "Review the legal, financial, tax and commercial aspects of the opportunity, test the investment assumptions and identify material risks."],
  ["Structure the investment", "Select the investment instrument and develop terms covering governance rights, downside protection and opportunities to support portfolio company growth."],
  ["Obtain Investment Committee approval", "Present the investment case, risk-return assessment and proposed terms to the Investment Committee for review and approval."],
  ["Execute the transaction", "Finalise the transaction documents, confirm that closing conditions have been met and deploy capital."],
  ["Monitor the investment", "Track financial and operating performance, exercise applicable governance rights and support agreed initiatives at portfolio companies."],
];

export default function Home() {
  return (
    <>
      <Gate />
      <Header />
      <Reveal />
      <Parallax />

      <main id="top">
        {/* ============================== HERO ============================== */}
        <section className="hero" aria-label="Introduction">
          <div className="hero-media" data-parallax="-0.12">
            <Image src="/images/hero.jpg" alt="Snow-capped Himalayan peaks rising above layers of mist" fill priority sizes="100vw" />
          </div>

          <div className="hero-content container">
            <div className="inner">
              <span className="eyebrow light fade-in">SEBI-registered Category II Alternative Investment Fund</span>
              <h1>
                <span className="line"><span>Bhairava</span></span>
                <span className="line"><span>Alternative</span></span>
                <span className="line"><span><em>Investment Trust</em></span></span>
              </h1>
              <p className="hero-copy fade-in">
                {SCHEME}, a scheme of the Trust, is a Large Value Fund for Accredited Investors. The scheme seeks capital
                appreciation and returns through investments in eligible listed and unlisted securities across sectors.
              </p>
              <div className="hero-actions fade-in">
                <a href="#fund" className="btn btn-primary">
                  Explore {SCHEME} <Arrow w={22} />
                </a>
                <a href="#contact" className="btn btn-outline-light">Contact us</a>
              </div>
            </div>
          </div>

          <div className="scroll-cue" aria-hidden="true">Scroll</div>

          <div className="hero-bar fade-in">
            <div className="container">
              <div className="hero-stat"><div className="k">Registration</div><div className="v">Category II AIF</div></div>
              <div className="hero-stat"><div className="k">Scheme · Large Value Fund</div><div className="v">{SCHEME}</div></div>
              <div className="hero-stat"><div className="k">SEBI Reg. No.</div><div className="v">{REG_NO}</div></div>
            </div>
          </div>
        </section>

        {/* ============================== 01 ABOUT ============================== */}
        <section id="about" className="about">
          <span className="ghost-num" aria-hidden="true">01</span>
          <div className="container about-grid">
            <div className="about-copy reveal">
              <span className="eyebrow">About the Trust</span>
              <h2 className="h-section">A SEBI-registered Category II Alternative Investment Fund</h2>
              <p className="lede">
                {TRUST} is registered with the Securities and Exchange Board of India (SEBI) as a Category II Alternative
                Investment Fund under registration number {REG_NO}.
              </p>
              <p className="lede">
                {MANAGER} is the Investment Manager to the Trust. It oversees the investment process for {SCHEME}, from
                sourcing and evaluating opportunities to managing investments and planning exits.
              </p>
              <div className="reg-chip"><span className="dot" />SEBI Reg. No. {REG_NO}</div>
            </div>

            <aside className="details reveal" style={{ ["--d" as string]: "150ms" }} aria-label="Fund details">
              <div className="details-head">
                <h3>Fund details</h3>
                <span className="small-print" style={{ letterSpacing: "0.16em", textTransform: "uppercase", fontSize: 11 }}>At a glance</span>
              </div>
              <dl>
                {FUND_DETAILS.map(([k, v]) => (
                  <div className="row" key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        {/* ============================== 02 FUND ============================== */}
        <section id="fund" className="fund">
          <div className="container fund-shell">
            <div className="fund-aside">
              <span className="ghost-num" aria-hidden="true">02</span>
              <a href="#approach" className="link-arrow reveal">How we invest <Arrow /></a>
            </div>

            <div className="fund-panel">
              <div className="reveal">
                <span className="eyebrow">The Scheme</span>
                <h2 className="h-section">{SCHEME}</h2>
              </div>

              <div className="fund-intro">
                <div className="reveal">
                  <div className="col-label">Investment objective</div>
                  <p>
                    {SCHEME} seeks to generate capital appreciation and returns for its Contributors by investing in equity
                    and equity-linked instruments, preference shares, and debt and debt-linked instruments. The Fund makes,
                    manages and exits investments in accordance with applicable law, the SEBI (Alternative Investment Funds)
                    Regulations, 2012 (AIF Regulations), and the Fund Documents.
                  </p>
                </div>
                <div className="reveal" style={{ ["--d" as string]: "120ms" }}>
                  <div className="col-label">Investment strategy</div>
                  <p>
                    The Fund is sector agnostic and evaluates opportunities across listed and unlisted markets. The
                    Investment Manager considers the quality of the underlying business, its financial profile and growth
                    prospects, the proposed investment terms, and potential exit routes.
                  </p>
                </div>
              </div>

              <div className="cards">
                {STRATEGY.map((s, i) => (
                  <article className="card reveal" key={s.title} style={{ ["--d" as string]: `${i * 120}ms` }}>
                    <div className="card-media">
                      <Image src={s.img} alt="" fill sizes="(max-width: 620px) 100vw, (max-width: 1080px) 50vw, 33vw" />
                      <span className="tag">{s.tag}</span>
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================== 03 ALLOCATION ============================== */}
        <section className="alloc-section" aria-labelledby="alloc-title">
          <div className="container alloc-wrap">
            <div className="alloc">
              <div className="alloc-box reveal">
                <div className="alloc-head">
                  <div>
                    <span className="eyebrow light">{SCHEME}</span>
                    <h2 id="alloc-title" style={{ marginTop: 14 }}>Portfolio allocation &amp; limits</h2>
                  </div>
                  <p>Maximum allocation as a percentage of Investable Funds at the time of investment</p>
                </div>
                <div className="alloc-grid">
                  {ALLOCATION.map((a) => (
                    <div className="alloc-item" key={a.k}>
                      <div className="k">{a.k}</div>
                      <div className="v"><Counter to={a.v} /></div>
                      <div className="bar"><i style={{ ["--w" as string]: `${a.v}%` }} /></div>
                      {a.note && <div className="note">{a.note}</div>}
                    </div>
                  ))}
                </div>
              </div>
              <p className="alloc-foot reveal">
                Actual allocations may vary during portfolio build-up and divestment, subject to applicable law and the AIF
                Regulations. The Investment Manager will inform Contributors of proposed deviations from the stated
                investment strategy, parameters or allocations.
              </p>
            </div>
            <div className="alloc-aside">
              <span className="ghost-num" aria-hidden="true">03</span>
            </div>
          </div>
        </section>

        {/* ============================== 04 APPROACH ============================== */}
        <section id="approach" className="approach">
          <div className="container approach-shell">
            <div className="approach-aside">
              <div className="sticky">
                <span className="ghost-num" aria-hidden="true">04</span>
                <a href="#team" className="link-arrow">Meet the team <Arrow /></a>
              </div>
            </div>

            <div className="approach-main">
              <div className="approach-box reveal">
                <div className="approach-head">
                  <span className="eyebrow">Investment Approach</span>
                  <h2>How we invest</h2>
                  <p>
                    The Investment Manager follows a research-driven process that assesses the risks and potential returns
                    of each opportunity and monitors investments through to exit.
                  </p>
                </div>
                <ol className="steps">
                  {STEPS.map(([t, d], i) => (
                    <li className="step reveal" key={t} style={{ ["--d" as string]: `${i * 60}ms` }}>
                      <div className="step-n">{String(i + 1).padStart(2, "0")}</div>
                      <div>
                        <h3>{t}</h3>
                        <p>{d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== BAND ============================== */}
        <section className="band" aria-hidden="true">
          <div className="band-media" data-parallax="0.08">
            <Image src="/images/sky.jpg" alt="" fill sizes="80vw" style={{ objectFit: "cover", objectPosition: "center 78%" }} />
          </div>
          <div className="band-quote reveal">
            <span className="eyebrow light">Our discipline</span>
            <p>A disciplined, process-driven approach to investment management.</p>
          </div>
        </section>

        {/* ============================== 05 TEAM ============================== */}
        <section id="team" className="team">
          <div className="team-bg" aria-hidden="true" />
          <span className="ghost-num on-dark" aria-hidden="true">05</span>
          <div className="container">
            <div className="team-intro">
              <div className="reveal">
                <span className="eyebrow light">Our Team</span>
                <h2>{MANAGER}</h2>
              </div>
              <div className="reveal" style={{ ["--d" as string]: "120ms" }}>
                <p>{MANAGER} acts as the Investment Manager to {TRUST}.</p>
                <p>
                  The Investment Manager is responsible for sourcing and evaluating investment opportunities, undertaking
                  due diligence, structuring and executing investments, monitoring portfolio companies and managing the
                  realisation of investments. It also oversees investor engagement, risk management and regulatory
                  compliance in accordance with the Fund Documents and applicable law.
                </p>
                <p>
                  {MANAGER} follows a disciplined and process-driven approach to investment management, supported by
                  defined governance, monitoring and compliance frameworks.
                </p>
              </div>
            </div>

            <div className="pillars reveal">
              <div className="pillar"><div className="k">Investing</div><div className="v">Sourcing, due diligence, structuring &amp; execution</div></div>
              <div className="pillar"><div className="k">Stewardship</div><div className="v">Portfolio monitoring &amp; realisation of investments</div></div>
              <div className="pillar"><div className="k">Oversight</div><div className="v">Investor engagement, risk management &amp; compliance</div></div>
            </div>

            <div className="team-label reveal">
              <h3>Key Investment Team</h3>
            </div>
            <div className="people">
              <div className="reveal">
                <Person
                  initials="HK"
                  name="Hemant Kumar"
                  role="Partner · Member of Key Investment Team"
                  summary="Mr. Hemant Kumar has over two decades of professional experience spanning quality control, operations, statutory and legal compliance, liaison with government authorities, and managerial responsibilities."
                  tags={["Operations", "Statutory & legal compliance", "Governance", "Investor engagement"]}
                  more={[
                    "He has held senior positions with organisations including Panasonic Audio and Video India Ltd., Imaje India Pvt. Ltd., Markem-Imaje India Pvt. Ltd. and Chaudhary Labels Pvt. Ltd.",
                    "Since 2026, he has been associated with Bhairava Alternative Sponsors LLP and Bhairava Alternative Investment Managers LLP as a Designated Partner, with responsibilities relating to sponsor and investment manager oversight, governance, regulatory compliance, investor engagement, capital raising and strategic development of Bhairava Alternative Investment Trust, a Category II AIF.",
                    "His experience across managerial, compliance and operational functions supports his role in the governance and development of the AIF platform.",
                  ]}
                />
              </div>
              <div className="reveal" style={{ ["--d" as string]: "140ms" }}>
                <Person
                  initials="GT"
                  name="Ghanshyam Thakur"
                  role="Partner · Member of Key Investment Team"
                  summary="Mr. Ghanshyam Thakur is a result-oriented professional with a strong background in finance, operations, taxation and compliance management. He holds a Master of Science (M.Sc.) degree in Biology and has built a career combining analytical expertise with business and financial management skills."
                  tags={["Finance", "Taxation", "Statutory compliance", "Operations"]}
                  more={[
                    "From January 2021 to August 2022, he worked as a self-employed Proprietor, providing accounting and taxation consultancy services to clients, with a focus on financial reporting, tax compliance and advisory support.",
                    "In August 2022, he joined SB Group Limited as Head of Operations, where he served until December 2025. In this role, he was responsible for overseeing financial operations, taxation, statutory compliance and operational processes. He played a key role in strengthening internal controls, ensuring regulatory compliance, and supporting organisational growth through effective financial and operational management.",
                    "With experience spanning consultancy and corporate leadership, he brings a practical and disciplined approach to financial governance, compliance management and business operations.",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================== 06 CONTACT ============================== */}
        <section id="contact" className="contact">
          <span className="ghost-num" aria-hidden="true">06</span>
          <div className="contact-media">
            <Image src="/images/hero.jpg" alt="" fill sizes="80vw" style={{ objectPosition: "center 40%" }} />
            <div className="contact-inner">
              <div className="reveal">
                <span className="eyebrow light">Contact</span>
                <h2>Contact {TRUST}</h2>
              </div>
              <div className="contact-cols reveal" style={{ ["--d" as string]: "120ms" }}>
                <div className="contact-col">
                  <div className="k">General enquiries</div>
                  <a className="v" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
                <div className="contact-col">
                  <div className="k">Correspondence address</div>
                  <address className="v" style={{ fontStyle: "normal", fontSize: "clamp(18px,1.5vw,21px)" }}>
                    {ADDRESS_LINES.map((l) => (
                      <span key={l} style={{ display: "block" }}>{l}</span>
                    ))}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== DISCLAIMER ============================== */}
        <section id="disclaimer" className="disclaimer">
          <div className="container disclaimer-grid">
            <div className="reveal">
              <span className="eyebrow">Important information</span>
              <h2>Website disclaimer</h2>
            </div>
            <div className="disclaimer-body reveal" style={{ ["--d" as string]: "120ms" }}>
              {DISCLAIMER.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ============================== FOOTER ============================== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <Logo />
            <div className="footer-meta">
              <div>
                <strong>{TRUST}</strong>
                SEBI-registered Category II Alternative Investment Fund
                <br />
                SEBI Registration No. {REG_NO}
              </div>
              <div>
                <strong>Investment Manager</strong>
                {MANAGER}
              </div>
              <div>
                <strong>Get in touch</strong>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <br />
                Pune, Maharashtra, India
              </div>
            </div>
            <a href="#top" className="to-top" aria-label="Back to top">
              <svg width="12" height="44" viewBox="0 0 12 44" fill="none" aria-hidden="true"><path d="M6 44V2M1 7l5-5 5 5" stroke="currentColor" /></svg>
              Top
            </a>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <a href="#about">About the Trust</a>
            <a href="#fund">{SCHEME}</a>
            <a href="#approach">Investment Approach</a>
            <a href="#team">Our Team</a>
            <a href="#contact">Contact</a>
            <a href="#disclaimer">Disclaimer</a>
          </nav>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {TRUST}. All rights reserved.</span>
            <span>Photography via Unsplash</span>
          </div>
        </div>
      </footer>
    </>
  );
}
