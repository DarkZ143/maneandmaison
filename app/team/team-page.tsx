"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";

const specialists = [
  {
    name: "Elena Vance",
    role: "Founder & Master Color Métier",
    descriptor: "Resident founder",
    specialty: "Métier master",
    marker: "15+ years of atelier craft",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAlb22S3z2S12R5Dq0mA-ybwMURg0yA2a9tzVolu49Os2TwMWTc8Cn6XJu0_qdRZBqwv8DKPjAMS4pUblR_1vwRpUmIZqTMr0haDhjUQ2cCKbvQFFNqRkCbw_lPcM4utqJEjWksaGLmtqCWMrCf7zcyV8TpwSSzOiygtPpfBd2JtEStnYx6nAB_k9_FBIH2mfMVBMjX8gxRp-2Oob_ZFE76q-oK6rulcdpmUrye8Izm",
    imageAlt:
      "Elena Vance in the salon atelier, surrounded by natural materials and warm light",
    biography:
      "With over fifteen years spent honing lived-in color in Paris and New York, Elena founded Mane & Maison to leave salon chaos behind. She specializes in French balayage, soft root melts, and bespoke color designed to grow out gently.",
    quote:
      "True luxury is hair that looks breathtakingly effortless and remains healthy season after season.",
    offerings: ["The Full Maison Dimension", "Lived-In French Gloss", "Corrective Color Alchemy"],
    badgeLabel: "Experience",
    badge: "15+ Years Atelier Craft",
    bookingSubject: "Reserve with Elena Vance",
    portfolio: "/services#cat-color",
    portfolioLabel: "Explore color experiences",
  },
  {
    name: "Margot Laurent",
    role: "Creative Director & Hair Architect",
    descriptor: "Resident artisan",
    specialty: "Cranial anatomy",
    marker: "Organic dry sculpture",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVj8hWazSfDPhcS5qpEieGxphtqmhFb91EsrdDAMXkFnGlPmnlS6kT43JNWaAj3eQNHnVR0EP3uXv82DW2BHL13LyoADyZxrKqxtKBG0MXj5ATc2NVcG8VhNPNmDrPvDxjNhPhQcQi68QPegtc2G_Yh7qfHYnNf8wpuXtXybPrr5IxN49MEFa1rkIjVA5tNANYwWb95bSS5ZZLiK0oLz_coNI_PJd5NuZ2v19gJukI",
    imageAlt:
      "Margot Laurent in a linen look inside the calm, arched salon sanctuary",
    biography:
      "Trained in precision dry-cutting and cranial anatomical framing, Margot approaches hair like sculpture. She honors natural cowlicks, bone structure, and texture, shaping timeless, air-dried silhouettes that ask little of your morning routine.",
    quote:
      "A great cut should celebrate your natural movement, requiring little more than good water and intention.",
    offerings: ["Bespoke Structural Cut", "Micro-Dusting & Shape Revival", "Curated Texture Design"],
    badgeLabel: "Specialization",
    badge: "Organic Dry Sculpture",
    bookingSubject: "Reserve with Margot Laurent",
    portfolio: "/services#cat-architecture",
    portfolioLabel: "Explore cut experiences",
  },
  {
    name: "Sora Takahashi",
    role: "Trichologist & Head Spa Sanctuary Lead",
    descriptor: "Resident specialist",
    specialty: "Scalp sanctuary",
    marker: "Head spa trichology",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5UY2ljSo0PT-F-9h1FnSCat7Jie8bWuI5KvGKwi-VygbQ7NhuoyyjL9GH0QFB7HPaGMfLgvJOgAZnP1i-DtSZRAMI-V_OHWV-hOZ1hugQQ2QBauCAdg7ofwLjjzUjzUXCDUL1S-nciR5kyTs_nkFABkeiTm6gM-3rttHXH8dXCFy9efenmOr7E77tJVLsIhBn85vexXhIwrKoBn-XGFHUUkTfX8M0MP6tQpNyZstq",
    imageAlt:
      "Sora Takahashi in the quiet head spa suite with a botanical scalp brush",
    biography:
      "Certified in Kyoto in traditional Japanese hydrotherapy and holistic scalp care, Sora leads the quiet acoustic water suite. Her rituals pair custom herbal infusions with careful scalp attention and a restorative pause.",
    quote:
      "When the scalp and nervous system find stillness, hair density and radiant vitality naturally follow.",
    offerings: ["Japanese Scalp Immersion", "Follicle & Scalp Hydration", "Herbal Botanical Steam"],
    badgeLabel: "Kyoto certified",
    badge: "Head Spa Trichology",
    bookingSubject: "Reserve the Scalp Sanctuary",
    portfolio: "/services#cat-headspa",
    portfolioLabel: "Explore head spa rituals",
  },
];

const standards = [
  {
    number: "01",
    title: "Single-Guest Scheduling",
    text: "No overlapping appointments or assistant hand-offs. Your stylist is exclusively yours throughout your visit.",
    note: "100% uninterrupted",
  },
  {
    number: "02",
    title: "Transparent Pricing",
    text: "Sessions are planned around time and intention. Glosses, treatments, and hot towels are built into the service price.",
    note: "No hidden add-ons",
  },
  {
    number: "03",
    title: "Acoustic & Sensory Rest",
    text: "Herbal infusions, gentle botanical scents, and a dedicated Quiet Chair option make room for calm.",
    note: "Quiet chair welcome",
  },
  {
    number: "04",
    title: "Bespoke Home Care",
    text: "Thoughtful botanical care recommendations are chosen for your hair texture and routine, without retail pressure.",
    note: "Care with intention",
  },
];

function Portrait({ person }: { person: (typeof specialists)[number] }) {
  return (
    <div className="artisan-portrait-wrap">
      <div className="artisan-portrait image-frame">
        <Image
          src={person.image}
          alt={person.imageAlt}
          fill
          sizes="(max-width: 760px) 85vw, (max-width: 1100px) 45vw, 38vw"
          unoptimized
          className="cover-image"
        />
      </div>
      <div className="artisan-badge"><span>{person.badgeLabel}</span><strong>{person.badge}</strong></div>
    </div>
  );
}

export default function TeamPage() {
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [match, setMatch] = useState<(typeof specialists)[number] | null>(null);

  useEffect(() => {
    if (!surveyOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSurveyOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [surveyOpen]);

  function findMatch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const interest = new FormData(event.currentTarget).get("interest");
    const matchedPerson = interest === "cut" ? specialists[1] : interest === "scalp" ? specialists[2] : specialists[0];
    setMatch(matchedPerson);
  }

  return (
    <>
      <div className="announcement"><p>Opening Fall 2026 <span aria-hidden="true">·</span> Follow our journey on Instagram</p></div>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="Mane & Maison home"><Image src="/logo.png" alt="Mane & Maison" width={185} height={82} priority unoptimized className="brand-logo" /></Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/philosophy">About & philosophy</Link>
            <Link href="/#spaces">The sanctuary</Link>
            <Link href="/services">Services & experiences</Link>
            <Link href="/team" aria-current="page">Our team</Link>
            <Link href="/faqs">FAQs & guest care</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <Link className="header-cta" href="/contact">Join the invitation <span aria-hidden="true">↗</span></Link>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu"><span></span><span></span></summary>
            <nav aria-label="Mobile navigation">
              <Link href="/philosophy">About & philosophy</Link>
              <Link href="/#spaces">The sanctuary</Link>
              <Link href="/services">Services & experiences</Link>
              <Link href="/team" aria-current="page">Our team</Link>
              <Link href="/faqs">FAQs & guest care</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </details>
        </div>
      </header>

      <main className="team-page">
        <section className="team-hero">
          <div className="section-wrap">
            <div className="team-hero-content">
              <p className="team-overline"><span></span> Mane & Maison Atelier <i>·</i> The resident artisans</p>
              <h1>Artists in unhurried devotion to <em>hair health</em> & natural grace.</h1>
              <p className="team-hero-copy">Every artisan works within our single-chair philosophy. No double booking, no assistant hand-offs, and no rushed appointments. Your dedicated stylist is here for you throughout your visit.</p>
              <div className="team-values-pills">
                <span><i>01</i> 1:1 devoted chair</span>
                <span><i>✳</i> Master artistry</span>
                <span><i>≈</i> Thoughtful formulations</span>
                <span><i>◌</i> Quiet chair welcome</span>
              </div>
            </div>
          </div>
        </section>

        <section className="artisan-roster" aria-label="Meet the resident artisans">
          <div className="section-wrap artisan-roster-inner">
            {specialists.map((person, index) => (
              <article className={`artisan-profile${index === 1 ? " artisan-profile-reverse" : ""}`} key={person.name} id={`artisan-${index + 1}`}>
                <div className="artisan-photo-column"><Portrait person={person} /></div>
                <div className="artisan-bio-column">
                  <div className="artisan-role"><span>{person.descriptor}</span><i></i><small>{person.specialty}</small></div>
                  <h2>{person.name}</h2>
                  <p className="artisan-title">{person.role}</p>
                  <p className="artisan-biography">{person.biography}</p>
                  <blockquote>“{person.quote}”</blockquote>
                  <div className="artisan-offerings"><h3>Signature offerings</h3><div>{person.offerings.map((offering) => <span key={offering}>{offering}</span>)}</div></div>
                  <div className="artisan-actions">
                    <a className="button button-dark" href={`mailto:hello@maneandmaison.com?subject=${encodeURIComponent(person.bookingSubject)}`}>Reserve with {person.name.split(" ")[0]} <span aria-hidden="true">↗</span></a>
                    <Link className="button button-light" href={person.portfolio}>{person.portfolioLabel}</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="resident-standards" id="resident-standards">
          <div className="section-wrap">
            <div className="standards-heading"><p className="team-overline">Our host agreement</p><h2>The Resident Chair Standards</h2><p>How our sanctuary gives salon time back to unhurried human connection.</p></div>
            <div className="standards-grid">
              {standards.map((standard) => <article key={standard.number}><span className="standard-number">{standard.number}</span><h3>{standard.title}</h3><p>{standard.text}</p><small>{standard.note}</small></article>)}
            </div>
          </div>
        </section>

        <section className="artisan-concierge section-wrap" id="artisan-placement">
          <div className="concierge-copy">
            <p className="team-overline">Concierge placement</p>
            <h2>Unsure which artisan aligns with your hair goals?</h2>
            <p>Tell us what you’re hoping for and get a simple starting point based on each artisan’s focus.</p>
            <div className="concierge-actions">
              <button className="button button-dark" type="button" onClick={() => { setMatch(null); setSurveyOpen(true); }}>Take the 2-minute matching survey <span aria-hidden="true">↗</span></button>
              <a className="button button-light" href="mailto:hello@maneandmaison.com?subject=15-minute%20video%20consultation">Request a 15-minute video consult</a>
            </div>
          </div>
          <aside className="opening-horizon">
            <p className="team-overline">Location & horizon</p>
            <h3>Urbandale Sanctuary Opening</h3>
            <p><span>⌖</span> 10100 Plum Dr Ste. 125, Urbandale, IA 50322</p>
            <p><span>◷</span> Grand opening invitations: Fall 2026</p>
            <p><span>✓</span> Priority booking planned for waitlist members before public launch.</p>
            <a href="mailto:hello@maneandmaison.com?subject=Join%20the%20Artisan%20Priority%20Waitlist">Join the artisan priority waitlist <span aria-hidden="true">↗</span></a>
          </aside>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <div className="footer-main">
            <div className="footer-intro"><p className="section-label section-label-light">A sanctuary for thoughtful haircare</p><h2>Ready to feel<br />taken care of?</h2><p>A residential hospitality experience where salon artistry meets intentional European calm.</p><Link className="footer-cta" href="/services">Explore our experiences <span aria-hidden="true">↗</span></Link></div>
            <div className="footer-address"><p className="section-label section-label-light">Sanctuary address</p><address>10100 Plum Dr Ste. 125<br />Urbandale, IA 50322<br /><small>By appointment · Fall 2026</small></address><p className="section-label section-label-light correspondence-label">Direct correspondence</p><a href="mailto:hello@maneandmaison.com">hello@maneandmaison.com</a></div>
            <div className="footer-dispatch"><p className="section-label section-label-light">Explore Mane & Maison</p><p>Return to the atelier story or discover the service menu.</p><Link href="/">Visit the homepage <span aria-hidden="true">↗</span></Link><p className="section-label section-label-light social-label">Follow the journey</p><div><a href="https://www.instagram.com/maneandmaisonsalon/" target="_blank" rel="noreferrer">Instagram</a><span>·</span><a href="https://www.tiktok.com/@maneandmaison?_r=1&_t=ZP-96Wjfe30hlX" target="_blank" rel="noreferrer">TikTok</a></div></div>
          </div>
          <div className="footer-bottom"><p>© 2026 Mane & Maison. All rights reserved.</p><Link href="/">Back to homepage ↑</Link></div>
        </div>
      </footer>

      {surveyOpen && (
        <div className="matching-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSurveyOpen(false); }}>
          <section className="matching-modal" role="dialog" aria-modal="true" aria-labelledby="matching-title">
            <button className="matching-close" type="button" onClick={() => setSurveyOpen(false)} aria-label="Close matching survey">×</button>
            {!match ? (
              <>
                <p className="team-overline">A thoughtful place to start</p>
                <h2 id="matching-title">What would you like help with?</h2>
                <p>Choose the closest fit. This quick guide is based on the focus areas listed for our resident artisans.</p>
                <form className="matching-form" onSubmit={findMatch}>
                  <label><input type="radio" name="interest" value="color" defaultChecked /> Color, balayage, or a gloss refresh</label>
                  <label><input type="radio" name="interest" value="cut" /> A tailored cut or natural shape</label>
                  <label><input type="radio" name="interest" value="scalp" /> Scalp care or a head spa ritual</label>
                  <button className="button button-dark" type="submit">Show me a place to start <span aria-hidden="true">↗</span></button>
                </form>
              </>
            ) : (
              <div className="matching-result">
                <p className="team-overline">A place to start</p>
                <h2 id="matching-title">Meet {match.name.split(" ")[0]}.</h2>
                <p>{match.name} focuses on {match.specialty.toLowerCase()}, including {match.offerings[0].toLowerCase()}.</p>
                <div className="matching-result-actions"><Link className="button button-dark" href={match.portfolio}>Explore their services <span aria-hidden="true">↗</span></Link><button type="button" className="matching-restart" onClick={() => setMatch(null)}>Choose another goal</button></div>
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
}
