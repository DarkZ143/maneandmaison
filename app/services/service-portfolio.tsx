"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";

const photography = {
  consultation:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDO1KgSbTmhNCP_5NmGddrtBFix9l5QMXRWRQN7DZvV41QA--r5zwS8BO_GPj9aLvAAQXcm5BO5QmJdpiLeEx-W0VJpt7jsA68y6VjL-opnrszUSPl9_r_065AHJPIKzBYPFoX8IJQVZcbiRbnrynPVRZdbyq5NYGt2Lq-B2-9704fw2izdTEV8KI8rilPi49x7kJpKQ8Oy6mrj_wEwpzkFW77XEgbNVWP-2zzXVfNQ",
  headSpa:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAWjHisZFu5OG-C2zHo42yIBxEBXihh9Zbvtfcd-ZnJkjJzmq3KWHhcdnaOwW1D7VuqUpeOZg4vI2CG8yxF6ybz_CyJASq5SlQRe2QuL86LyrbrWFgSckxUXDS2s1haZqlxH9NjcdY-nMY29LEmuD4cEy7vqiRnaSF6koyiV2bJzuYM2e6-uJQmn9r7svxlxI0aMGKRNpnueHUJjfNhonDtR7V5yNKqe-b32BnJEYFo",
};

type Category = "all" | "color" | "headspa" | "architecture" | "hospitality";

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "All offerings" },
  { id: "color", label: "Dimensional color" },
  { id: "headspa", label: "Japanese head spa" },
  { id: "architecture", label: "Hair architecture" },
  { id: "hospitality", label: "Hospitality" },
];

const colorServices = [
  {
    category: "Master experience",
    duration: "4–4.5 hours",
    title: "The Full Maison Dimension",
    price: "From $365",
    note: "All-inclusive sanctuary block",
    description:
      "Our signature full transformation. Includes lived-in balayage, artisan micro-foiling, a customized root melt, ammonia-free gloss, and a botanical restorative steam mask, finished with a tailored European blowout.",
    details: ["Single-artist dedicated", "Herbal steam mask", "Signature blowout"],
  },
  {
    category: "Maintenance ritual",
    duration: "2.5–3 hours",
    title: "Lived-In Maintenance & Tone",
    price: "From $245",
    note: "Ideal 10–14 weeks post-full",
    description:
      "Revitalize your dimensional canvas with face-framing highlights, soft crown placement, root refinement, and gloss balancing, followed by a deeply hydrating botanical rinse.",
    details: ["Face-framing contour", "Root softening", "Gloss infusion"],
  },
  {
    category: "Shine refinement",
    duration: "75 minutes",
    title: "French Gloss & Conditioning Glaze",
    price: "From $135",
    note: "Express glow enhancement",
    description:
      "A tonal refresh that smooths the cuticle with plant keratin and UV inhibitors while softening unwanted brass. Includes a tension-melting scalp cleanse and finishing hydration cocktail.",
    details: ["Zero-lift chemistry", "Aromatherapy wash"],
  },
];

const headSpaServices = [
  {
    category: "The flagship immersion",
    duration: "90 minutes",
    title: "The Grand Maison Head Spa & Scalp Immersion",
    price: "From $195",
    note: "Private suite",
    description:
      "A complete sensory reset with a pre-treatment scalp check, warmed volcanic clay exfoliation, Japanese herbal waterfall halo, aromatic hot towel, and shiatsu-inspired neck, temple, and shoulder massage.",
    details: ["Scalp analysis", "Waterfall halo"],
  },
  {
    category: "Restorative care",
    duration: "60 minutes",
    title: "Restorative Follicle & Hydration Ritual",
    price: "From $145",
    note: "Deep calm",
    description:
      "Nourishment for dry or sensitive scalps. A rosemary and cedarwood scrub is followed by ultrasonic mist, a moisture mask, and a quiet moment to rest.",
    details: ["Rosemary scalp polish", "Ultrasonic mist"],
  },
];

const haircutServices = [
  {
    category: "Couture cut",
    duration: "75 minutes",
    title: "Bespoke Structural Cut & Ritual Blowout",
    price: "From $110",
    note: "Complete styling session",
    description:
      "Wet and dry precision cutting shaped around facial features, natural movement, and your routine. Includes a warm botanical towel wash, relaxing scalp massage, thermal defense, and tailored styling.",
    details: ["Anatomical consultation", "Botanical head bath", "Dry finish carving", "Signature polish style"],
  },
  {
    category: "Silhouette preservation",
    duration: "45 minutes",
    title: "The Restorative Dusting & Shape Revival",
    price: "$85",
    note: "Zero length loss",
    description:
      "A careful refresh for length retention or post-summer repair. A micro-dusting technique removes weathered ends around the perimeter and layers while preserving your length.",
    details: ["Micro-dusting technique", "Split-end keratin seal", "Perimeter alignment", "Silkening touch blowout"],
  },
];

const hospitality = [
  {
    symbol: "01",
    title: "Single-Chair Focus",
    text: "Your stylist is here for you alone. No jumping between chairs and no rushed steps.",
  },
  {
    symbol: "02",
    title: "Artisanal Pour-Over & Teas",
    text: "Single-origin coffee, Uji matcha, and organic herbal infusions served in ceramic stoneware.",
  },
  {
    symbol: "03",
    title: "Aromatherapy Inhalation",
    text: "Choose an essential oil note, such as bergamot and cypress or French lavender, for your basin ritual.",
  },
  {
    symbol: "04",
    title: "The Quiet Chair Option",
    text: "Choose a quiet appointment and enjoy time to read, work, or rest undisturbed.",
  },
];

function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 760px) 100vw, (max-width: 1100px) 55vw, 42vw"
      unoptimized
      className="cover-image"
    />
  );
}

function ServiceCard({
  service,
  onReserve,
}: {
  service: (typeof colorServices)[number];
  onReserve: (title: string) => void;
}) {
  return (
    <article className="portfolio-service-card">
      <div className="portfolio-service-top">
        <div>
          <p className="portfolio-service-kicker">{service.category} <span>·</span> {service.duration}</p>
          <h3>{service.title}</h3>
        </div>
        <div className="portfolio-price"><strong>{service.price}</strong><small>{service.note}</small></div>
      </div>
      <p className="portfolio-service-description">{service.description}</p>
      <div className="portfolio-service-bottom">
        <div className="portfolio-tags">
          {service.details.map((detail) => <span key={detail}>{detail}</span>)}
        </div>
        <button className="portfolio-text-button" type="button" onClick={() => onReserve(service.title)}>
          Reserve experience <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  );
}

export default function ServicePortfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [requestedService, setRequestedService] = useState("");
  const [emailReady, setEmailReady] = useState(false);

  useEffect(() => {
    if (!consultationOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setConsultationOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [consultationOpen]);

  function selectCategory(category: Category) {
    setActiveCategory(category);
    const target = category === "all" ? "cat-color" : `cat-${category}`;
    window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 20);
  }

  function reserveService(title: string) {
    setRequestedService(title);
    setEmailReady(false);
    setConsultationOpen(true);
  }

  function sendConsultation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const interest = String(form.get("interest") ?? "");
    const subject = encodeURIComponent("Mane & Maison consultation request");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nArea of interest: ${interest}`);
    window.location.href = `mailto:hello@maneandmaison.com?subject=${subject}&body=${body}`;
    setEmailReady(true);
  }

  return (
    <>
      <div className="announcement"><p>Opening Fall 2026 <span aria-hidden="true">·</span> Follow our journey on Instagram</p></div>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="Mane & Maison home">
            <Image src="/logo.png" alt="Mane & Maison" width={185} height={82} priority unoptimized className="brand-logo" />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/philosophy">About & philosophy</Link>
            <Link href="/#spaces">The sanctuary</Link>
            <Link href="/services" aria-current="page">Services & experiences</Link>
            <Link href="/team">Our team</Link>
            <Link href="/faqs">FAQs & guest care</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <a className="header-cta" href="#consultation-drawer">Need guidance? <span aria-hidden="true">↗</span></a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu"><span></span><span></span></summary>
            <nav aria-label="Mobile navigation">
              <Link href="/philosophy">About & philosophy</Link>
              <Link href="/#spaces">The sanctuary</Link>
              <Link href="/services" aria-current="page">Services & experiences</Link>
              <Link href="/team">Our team</Link>
              <Link href="/faqs">FAQs & guest care</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </details>
        </div>
      </header>

      <main className="service-portfolio">
        <section className="portfolio-intro">
          <div className="portfolio-glow portfolio-glow-one" aria-hidden="true"></div>
          <div className="portfolio-glow portfolio-glow-two" aria-hidden="true"></div>
          <div className="portfolio-container">
            <p className="portfolio-breadcrumb"><span></span> Mane & Maison Atelier <i>·</i> Service portfolio <b>/</b> Opening Fall 2026</p>
            <div className="portfolio-hero-grid">
              <h1>Experiences designed for <em>restorative beauty</em> & unhurried care.</h1>
              <aside className="dedicated-promise">
                <p className="portfolio-eyebrow"><span aria-hidden="true">✳</span> The dedicated chair promise</p>
                <p>Every appointment is an intentional sanctuary block. Your dedicated artisan stylist is yours throughout your time with us.</p>
              </aside>
            </div>
            <div className="promise-grid">
              <article><span>Client policy</span><strong>1:1 Devotion</strong><small>One guest at a time</small></article>
              <article><span>Chemistry</span><strong>Botanical</strong><small>Ammonia-free micro-toning</small></article>
              <article><span>Hydrotherapy</span><strong>Japanese Halo</strong><small>Waterfall scalp ritual</small></article>
              <article><span>Atmosphere</span><strong>Quiet Luxury</strong><small>Residential European calm</small></article>
            </div>
          </div>
        </section>

        <nav className="portfolio-filter" aria-label="Filter service categories">
          <div className="portfolio-filter-inner">
            <div className="filter-list">
              {filters.map((filter) => (
                <button
                  className={activeCategory === filter.id ? "filter-pill is-active" : "filter-pill"}
                  type="button"
                  key={filter.id}
                  aria-pressed={activeCategory === filter.id}
                  onClick={() => selectCategory(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <a className="filter-guidance" href="#consultation-drawer">Need guidance? <span aria-hidden="true">↓</span></a>
          </div>
        </nav>

        {(activeCategory === "all" || activeCategory === "color") && (
          <section className="portfolio-section color-section" id="cat-color">
            <div className="portfolio-container color-layout">
              <div className="color-editorial">
                <p className="portfolio-chapter">Chapter 01 <span>·</span> Color métier</p>
                <h2>Signature Dimensional Color & <em>Lightening</em></h2>
                <p className="portfolio-section-lede">Rooted in lived-in European formulation and gentle botanical toners, we honor your hair’s natural cadence with soft shadows and illuminated ribbons that grow out gracefully.</p>
                <div className="color-visual image-frame">
                  <Photo src={photography.consultation} alt="A stylist considering a client's balayage tone beside a set of color swatches" />
                  <div className="color-visual-shade" aria-hidden="true"></div>
                  <div className="color-visual-caption"><span>Artisanal consultation</span><strong>Bespoke swatch formulation & lived-in mapping</strong></div>
                </div>
                <div className="formulation-note"><span aria-hidden="true">✳</span><div><strong>Organic formulation</strong><p>Ammonia-free glazes with camellia seed and cold-pressed argan oils.</p></div></div>
              </div>
              <div className="portfolio-service-stack">
                {colorServices.map((service) => <ServiceCard key={service.title} service={service} onReserve={reserveService} />)}
              </div>
            </div>
          </section>
        )}

        {(activeCategory === "all" || activeCategory === "headspa") && (
          <section className="portfolio-section headspa-section" id="cat-headspa">
            <div className="portfolio-container">
              <div className="headspa-heading">
                <div>
                  <p className="portfolio-chapter">Chapter 02 <span>·</span> Head spa & wellness</p>
                  <h2>The Japanese Scalp Sanctuary & <em>Follicle Rituals</em></h2>
                  <p className="portfolio-section-lede">An ancient hydrotherapy practice reimagined as a restorative scalp ritual: water, botanical steam, and time to settle.</p>
                </div>
                <div className="basin-note"><span aria-hidden="true">≈</span><div><strong>Herbal basin room</strong><small>Private, low-light suite</small></div></div>
              </div>
              <div className="headspa-grid">
                <div className="headspa-visual image-frame">
                  <Photo src={photography.headSpa} alt="A client resting at a softly lit head spa basin surrounded by botanical steam" />
                  <div className="headspa-overlay" aria-hidden="true"></div>
                  <div className="headspa-quote"><span>The Sanctuary Halo</span><h3>“Water, botanical steam, and silence.”</h3><p>A warm water arch flows over the hairline during this quiet, restorative ritual.</p></div>
                </div>
                <div className="portfolio-service-stack headspa-services">
                  {headSpaServices.map((service) => <ServiceCard key={service.title} service={service} onReserve={reserveService} />)}
                  <div className="add-on-card"><div><span>Ritual enhancement add-on</span><h3>Clarifying Scalp Purifying Flush</h3><p>A mineral-clearing rinse and eucalyptus steam wash for hard-water buildup.</p></div><div className="add-on-price"><strong>$65</strong><small>30 minutes</small></div></div>
                </div>
              </div>
            </div>
          </section>
        )}

        {(activeCategory === "all" || activeCategory === "architecture") && (
          <section className="portfolio-section architecture-section" id="cat-architecture">
            <div className="portfolio-container">
              <div className="architecture-heading">
                <div><p className="portfolio-chapter">Chapter 03 <span>·</span> Structural precision</p><h2>Hair Architecture & <em>Tailored Cutting</em></h2><p className="portfolio-section-lede">Every angle, layer, and face-framing detail is shaped around your natural movement and everyday routine.</p></div>
                <blockquote>“A magnificent cut does not require fifteen morning products to look intentional.”</blockquote>
              </div>
              <div className="architecture-grid">
                {haircutServices.map((service) => (
                  <ServiceCard key={service.title} service={service} onReserve={reserveService} />
                ))}
              </div>
            </div>
          </section>
        )}

        {(activeCategory === "all" || activeCategory === "hospitality") && (
          <section className="portfolio-section hospitality-section" id="cat-hospitality">
            <div className="portfolio-container">
              <div className="hospitality-heading"><p className="portfolio-chapter">The residential standard</p><h2>The Complimentary <em>Hospitality Menu</em></h2><p>Every appointment includes considered comforts that honor your time and help you settle in.</p></div>
              <div className="hospitality-grid">
                {hospitality.map((item) => <article key={item.title}><span>{item.symbol}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
              </div>
              <div className="location-banner"><p><strong>Located in Urbandale, IA:</strong> 10100 Plum Dr Ste. 125 <span>·</span> Private parking for guests</p><span>Fall 2026 inquiries open</span></div>
            </div>
          </section>
        )}

        <section className="consultation-section" id="consultation-drawer">
          <div className="portfolio-container">
            <div className="consultation-panel">
              <div className="consultation-content">
                <p className="portfolio-chapter">Guidance & discovery</p>
                <h2>Unsure which experience your hair needs?</h2>
                <p>Choosing between dimensional color, a scalp ritual, or a new cut can feel like a lot. Tell us what you’re considering and we’ll help you find a good place to start.</p>
                <button className="portfolio-primary-button" type="button" onClick={() => reserveService("")}>Request a 15-minute consultation <span aria-hidden="true">↗</span></button>
              </div>
              <aside className="sanctuary-details">
                <h3>Sanctuary details</h3>
                <p><span>Address</span>10100 Plum Dr Ste. 125<br />Urbandale, IA 50322</p>
                <p><span>Appointment horizon</span>Fall 2026 inquiries</p>
                <p><span>Direct contact</span><a href="mailto:hello@maneandmaison.com">hello@maneandmaison.com</a></p>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer portfolio-footer">
        <div className="section-wrap footer-inner">
          <div className="footer-main">
            <div className="footer-intro"><p className="section-label section-label-light">A sanctuary for thoughtful haircare</p><h2>Ready to feel<br />taken care of?</h2><p>A residential hospitality experience where salon artistry meets intentional European calm.</p><Link className="footer-cta" href="/#contact">Meet us at the atelier <span aria-hidden="true">↗</span></Link></div>
            <div className="footer-address"><p className="section-label section-label-light">Sanctuary address</p><address>10100 Plum Dr Ste. 125<br />Urbandale, IA 50322<br /><small>By appointment · Fall 2026</small></address><p className="section-label section-label-light correspondence-label">Direct correspondence</p><a href="mailto:hello@maneandmaison.com">hello@maneandmaison.com</a></div>
            <div className="footer-dispatch"><p className="section-label section-label-light">Explore Mane & Maison</p><p>Return to the salon story, our space, and the latest opening updates.</p><Link href="/">Visit the homepage <span aria-hidden="true">↗</span></Link><p className="section-label section-label-light social-label">Follow the journey</p><div><a href="https://www.instagram.com/maneandmaisonsalon/" target="_blank" rel="noreferrer">Instagram</a><span>·</span><a href="https://www.tiktok.com/@maneandmaison?_r=1&_t=ZP-96Wjfe30hlX" target="_blank" rel="noreferrer">TikTok</a></div></div>
          </div>
          <div className="footer-bottom"><p>© 2026 Mane & Maison. All rights reserved.</p><Link href="/">Back to homepage ↑</Link></div>
        </div>
      </footer>

      {consultationOpen && (
        <div className="consultation-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setConsultationOpen(false); }}>
          <section className="consultation-modal" role="dialog" aria-modal="true" aria-labelledby="consultation-title">
            <button className="modal-close" type="button" onClick={() => setConsultationOpen(false)} aria-label="Close consultation form">×</button>
            <p className="portfolio-chapter">Complimentary discovery</p>
            <h2 id="consultation-title">15-Minute Artisan Consultation</h2>
            <p className="modal-description">Share your details and your email app will open with a consultation request addressed to our team.</p>
            <form className="consultation-form" onSubmit={sendConsultation}>
              <label>Your full name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
              <label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
              <label>Area of interest<select name="interest" defaultValue={requestedService || "Lived-In Dimensional Color"}><option>Lived-In Dimensional Color</option><option>Japanese Head Spa Scalp Immersion</option><option>Haircut & Restorative Restyle</option><option>Corrective Color Consultation</option><option>Not sure yet</option>{requestedService && <option>{requestedService}</option>}</select></label>
              <button className="portfolio-primary-button" type="submit">Prepare consultation email <span aria-hidden="true">↗</span></button>
              {emailReady && <p className="email-feedback" role="status">If your email app didn’t open, write to <a href="mailto:hello@maneandmaison.com">hello@maneandmaison.com</a>.</p>}
            </form>
          </section>
        </div>
      )}
    </>
  );
}
