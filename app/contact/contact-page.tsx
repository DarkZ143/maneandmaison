"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";

const images = {
  atelier:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCSdCBuWyGr1Q9ZOpDs3u1w3JoRgb9KK2ZMYTQokILGBwUAHXd4jBA2cv3BEWMpORTC1AA8Ej4It1C4niliWYC36SjDDnUAUCZXTqAKxV2Vs21jgSTKSZfKaPNvu9E6DSVNLp7TZip04orNoNj3BoDWO022M8NoK01sZyfhQyUj3webVcL46FbwUDeRjnihFqvSylcK95QiAJs-Wou5rSl3sOVUwYYbAvr7-NYbYlBx",
  fellowship:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB6F3SA87VLyMd5ur24vqen8kCH_XIoFw_Zf7-3rr2x99KmKrqCqPXtLur9dMe-HDQhohPGLeAlaUowh2dx_3E-2rUsABctTbftTPbH2I_p1ijsk5hJqptG99EOYtZsiphG7MG1YHE55tk6irXgQrKbeaiVWChwNUpIwWATWY7RCJsJDkO-R1SXieIdup8SGtJ7iKlKGfLZIJU2NW3GWMAcanAiX3Q8ynbWYJmXvGVf",
  map:
    "https://lh3.googleusercontent.com/aida/ALJJyrCLEirvn0KUioEKS1Ve-wHAjGpACMdBaqSdfJ_Htknu_W4Bscg-lUrclY5h66cRsGQIui8RcybbktGgltf2Ecvrwi_gvxRMjKOBKOAEVbZNRHiYIXNxYF_7NWdWhpY4u6_V8BY6lfTWm3qU1kyP26XsHqkIMc4uEvT-3Oxor5iKQ8mp9-mCOjd0m6Ih8kRLrUuOugKjlXzImM9ZmrrUHl6FSADInGrPVUgB1N1em-m-kw",
};

const directions = [
  {
    time: "15 min",
    title: "Downtown Des Moines",
    description: "Take I-235 West to I-80 North, then follow the Plum Drive corridor at exit 125.",
    marker: "01",
  },
  {
    time: "12 min",
    title: "West Des Moines & Waukee",
    description: "Head north along NW 86th Street through the tree-lined avenues toward Plum Drive.",
    marker: "02",
  },
  {
    time: "20 min",
    title: "Ankeny & North Corridor",
    description: "Follow the I-35 / I-80 west loop toward the Plum Drive exit.",
    marker: "03",
  },
];

function Photo({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} alt={alt} fill sizes="(max-width: 760px) 100vw, 50vw" unoptimized className="cover-image" />;
}

function CorrespondenceForm() {
  const [feedback, setFeedback] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const name = String(values.get("name") ?? "");
    const email = String(values.get("email") ?? "");
    const telephone = String(values.get("telephone") ?? "");
    const inquiry = String(values.get("inquiry") ?? "");
    const note = String(values.get("note") ?? "");
    const subject = `Atelier inquiry: ${inquiry}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Telephone: ${telephone || "Not provided"}`,
      `Inquiry: ${inquiry}`,
      "",
      note,
    ].join("\n");

    setFeedback("Your email app should open with a draft. Press Send there to complete your note.");
    window.location.href = `mailto:concierge@maneandmaison.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-heading">
        <p className="contact-chapter">Direct protocol</p>
        <h2>Compose your note</h2>
        <p>Each message is read by our sanctuary leadership. Tell us how we may host your hair journey or welcome your craft.</p>
      </div>

      <div className="contact-fields">
        <label>
          <span>Full name <i>*</i></span>
          <input autoComplete="name" name="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Email address <i>*</i></span>
          <input autoComplete="email" name="email" placeholder="you@example.com" required type="email" />
        </label>
        <label className="contact-field-wide">
          <span>Direct telephone <small>(optional for SMS waitlist notes)</small></span>
          <input autoComplete="tel" name="telephone" placeholder="(515) 555-0100" type="tel" />
        </label>
        <label className="contact-field-wide">
          <span>Inquiry nature <i>*</i></span>
          <select name="inquiry" defaultValue="" required>
            <option value="" disabled>Select an inquiry</option>
            <option>Fall 2026 Founding Waitlist</option>
            <option>Bespoke Scalp &amp; Color Protocol</option>
            <option>Resident Artisan / Stylist Chair</option>
            <option>Press &amp; Architectural Inquiries</option>
          </select>
        </label>
        <label className="contact-field-wide">
          <span>Tell us about your hair, ritual, or inquiry <i>*</i></span>
          <textarea name="note" placeholder="Share whatever would help us welcome you well…" required rows={5} />
        </label>
      </div>

      <div className="contact-form-actions">
        <button className="button button-dark" type="submit">Submit correspondence <span aria-hidden="true">↗</span></button>
        <small>We reply within 24–48 unhurried business hours.</small>
      </div>
      <p className="contact-form-feedback" aria-live="polite">{feedback}</p>
    </form>
  );
}

export default function ContactPage() {
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
            <Link href="/team">Our team</Link>
            <Link href="/faqs">FAQs & guest care</Link>
            <Link href="/contact" aria-current="page">Contact</Link>
          </nav>
          <Link className="header-cta" href="#correspondence">Write to us <span aria-hidden="true">↗</span></Link>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu"><span></span><span></span></summary>
            <nav aria-label="Mobile navigation">
              <Link href="/philosophy">About & philosophy</Link>
              <Link href="/#spaces">The sanctuary</Link>
              <Link href="/services">Services & experiences</Link>
              <Link href="/team">Our team</Link>
              <Link href="/faqs">FAQs & guest care</Link>
              <Link href="/contact" aria-current="page">Contact</Link>
            </nav>
          </details>
        </div>
      </header>

      <main className="contact-page" id="top">
        <section className="contact-hero section-wrap">
          <div className="contact-hero-copy">
            <p className="contact-eyebrow"><span></span>Mane & Maison <i>·</i> Atelier correspondence & access</p>
            <h1>We welcome your presence, whispers, <em>and inquiries.</em></h1>
            <p className="contact-hero-intro">Whether you are asking about our Fall 2026 founding waitlist, architectural details, or artisan opportunities, our concierge is here to help.</p>
            <div className="contact-status"><span aria-hidden="true"></span><div><strong>Plaster & millwork buildout underway</strong><small>Urbandale, Iowa <i>·</i> Opening Fall 2026</small></div></div>
          </div>
          <figure className="contact-hero-visual image-frame">
            <Photo src={images.atelier} alt="A sunlit salon sanctuary with arched limestone doorways, oak cabinetry, and warm brass details" />
            <div className="contact-hero-shade" aria-hidden="true"></div>
            <figcaption><span>Atelier in the making</span><strong>A slower kind of welcome</strong></figcaption>
            <span className="contact-image-mark" aria-hidden="true">M<span>&</span>M</span>
          </figure>
        </section>

        <section className="contact-main section-wrap" id="correspondence">
          <CorrespondenceForm />
          <aside className="contact-sidebar">
            <div className="contact-location-card">
              <div className="contact-location-photo image-frame">
                <Photo src={images.map} alt="Illustrative neighborhood map concept in warm linen tones, representing the Plum Drive area" />
                <span className="map-pin" aria-hidden="true">⌖</span>
                <span className="map-caption">Physical horizon <i>·</i> Urbandale, Iowa</span>
              </div>
              <div className="contact-location-copy">
                <p className="contact-chapter">Sanctuary address</p>
                <h2>Atelier physicality</h2>
                <address>10100 Plum Dr Ste. 125<br />Urbandale, Iowa 50322</address>
                <p className="contact-location-area">Des Moines Metropolitan Sanctuary Quarter</p>
                <a className="contact-inline-link" href="https://maps.google.com/?q=10100+Plum+Dr+Ste+125+Urbandale+IA+50322" target="_blank" rel="noreferrer">Open navigation <span aria-hidden="true">↗</span></a>
              </div>
            </div>

            <div className="contact-facts">
              <article><span className="contact-fact-icon" aria-hidden="true">⌖</span><div><strong>Private arrival protocol</strong><p>Guest parking sits before the arched oak portal. A discreet rear vestibule is available by request.</p></div></article>
              <article><span className="contact-fact-icon" aria-hidden="true">✉</span><div><strong>Correspondence desk</strong><a href="mailto:hello@maneandmaison.com">hello@maneandmaison.com</a></div></article>
              <article><span className="contact-fact-icon" aria-hidden="true">◷</span><div><strong>Concierge telephony</strong><p>Our direct reservation line will be active Summer 2026.</p></div></article>
              <article><span className="contact-fact-icon" aria-hidden="true">◎</span><div><strong>Social dispatch</strong><div className="contact-social-links"><a href="https://www.instagram.com/maneandmaisonsalon/" target="_blank" rel="noreferrer">Instagram</a><span>·</span><a href="https://www.tiktok.com/@maneandmaison" target="_blank" rel="noreferrer">TikTok journal</a></div></div></article>
            </div>
          </aside>
        </section>

        <section className="contact-fellowship">
          <div className="section-wrap contact-fellowship-grid">
            <figure className="contact-fellowship-photo image-frame">
              <Photo src={images.fellowship} alt="A quiet salon still life with linen, a brass basin tap, and fresh lavender in afternoon light" />
              <figcaption>Where hair is curated like fine sculpture, and silence is restored.</figcaption>
            </figure>
            <div className="contact-fellowship-copy">
              <p className="contact-chapter contact-chapter-light">Resident atelier fellowship</p>
              <h2>Calling independent hair artisans &amp; trichologists.</h2>
              <p>Are you weary of the hurried, high-decibel assembly-line salon model? Mane &amp; Maison champions single-chair autonomy, extended 90-minute treatment allocations, ergonomic plaster wash suites, and a peaceful European residential atmosphere.</p>
              <div className="contact-benefits">
                <article><span>01</span><div><strong>Autonomous rhythm</strong><small>Uncapped appointments, zero stacking.</small></div></article>
                <article><span>02</span><div><strong>Full hospitality team</strong><small>Concierge check-in and organic beverage service.</small></div></article>
                <article><span>03</span><div><strong>Acoustic serenity</strong><small>Calm classical audio and natural-light corridors.</small></div></article>
              </div>
              <a className="contact-fellowship-link" href="#correspondence">Explore artisan residency <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="contact-directions section-wrap">
          <div className="contact-directions-heading">
            <p className="contact-chapter">Sanctuary topography</p>
            <h2>Approaching the <em>atelier.</em></h2>
            <p>Centrally positioned within the greater Des Moines landscape, our unhurried oasis is accessible from all directions.</p>
          </div>
          <div className="contact-direction-grid">
            {directions.map((route) => (
              <article key={route.marker}>
                <div className="contact-route-top"><span>{route.marker}</span><small>{route.time} approx.</small></div>
                <h3>{route.title}</h3>
                <p>{route.description}</p>
              </article>
            ))}
          </div>
          <div className="contact-gate">
            <span className="contact-gate-mark" aria-hidden="true">⌖</span>
            <p><strong>Atelier Gate 125</strong><span>10100 Plum Dr Ste. 125, Urbandale, IA 50322<br />Nestled beside the courtyard terrace and botanical water fountain.</span></p>
            <a className="button button-light" href="https://maps.google.com/?q=10100+Plum+Dr+Ste+125+Urbandale+IA+50322" target="_blank" rel="noreferrer">Open navigation <span aria-hidden="true">↗</span></a>
          </div>
          <p className="contact-refreshment"><span aria-hidden="true">✳</span> A warm herbal infusion will be waiting upon your arrival.</p>
        </section>

        <section className="contact-notes">
          <div className="section-wrap contact-notes-inner">
            <div className="contact-notes-heading"><p className="contact-chapter">Guest protocol</p><h2>Inquiry &amp; reservation <em>notes.</em></h2></div>
            <div className="contact-accordion">
              <details>
                <summary>When will the Fall 2026 waitlist receive initial booking dates?<span aria-hidden="true">+</span></summary>
                <p>Guests on our Priority Horizon will receive private telephone invitations in July 2026, granting first access to opening-month appointment rituals.</p>
              </details>
              <details>
                <summary>Do you host discrete or private hair sessions?<span aria-hidden="true">+</span></summary>
                <p>Yes. Our Maison layout includes an intimate Private Suite with an independent arched entry, reserved cloakroom, and separate basin amenities for private or sensitive-scalp treatments.</p>
              </details>
              <details>
                <summary>How are artisan stylists selected?<span aria-hidden="true">+</span></summary>
                <p>We review each craft portfolio, guest-care philosophy, and dedication to scalp preservation. Prospective artists can share links or portfolios through the correspondence form above.</p>
              </details>
            </div>
            <p className="contact-notes-help">Need prompt assistance before opening? Direct letters to <a href="mailto:concierge@maneandmaison.com">concierge@maneandmaison.com</a></p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <div className="footer-main">
            <div className="footer-intro">
              <p className="section-label section-label-light">A sanctuary for thoughtful haircare</p>
              <h2>Ready to feel<br />taken care of?</h2>
              <p>A residential hospitality experience where salon artistry meets intentional European calm. Designed for slow living and personal restoration.</p>
              <a className="footer-cta" href="mailto:hello@maneandmaison.com?subject=Reserve%20an%20experience">Reserve an experience <span aria-hidden="true">↗</span></a>
            </div>
            <div className="footer-address">
              <p className="section-label section-label-light">Sanctuary address</p>
              <address>10100 Plum Dr Ste. 125<br />Urbandale, IA 50322<br /><small>By appointment · Fall 2026</small></address>
              <p className="section-label section-label-light correspondence-label">Direct correspondence</p>
              <a href="mailto:hello@maneandmaison.com">hello@maneandmaison.com</a>
            </div>
            <div className="footer-dispatch">
              <p className="section-label section-label-light">Curated dispatches</p>
              <p>Private invitations to preview openings and seasonal treatment notes.</p>
              <a href="mailto:hello@maneandmaison.com?subject=Join%20the%20Mane%20%26%20Maison%20list">Send me the invitations <span aria-hidden="true">↗</span></a>
              <p className="section-label section-label-light social-label">Follow the journey</p>
              <div><a href="https://www.instagram.com/maneandmaisonsalon/" target="_blank" rel="noreferrer">Instagram</a><span>·</span><a href="https://www.tiktok.com/@maneandmaison" target="_blank" rel="noreferrer">TikTok</a></div>
            </div>
          </div>
          <div className="footer-bottom"><p>© 2026 Mane &amp; Maison. All rights reserved.</p><a href="#top">Back to top ↑</a></div>
        </div>
      </footer>
    </>
  );
}
