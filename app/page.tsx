import Image from "next/image";
import Link from "next/link";

const photography = {
  atelier:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBj0-MYfLxFIm10s7uXCKZYOOFD_8AfNsTftNqLC65tLb_9y4YQFbzjpIfZh3cYHuIEvKssq9_G02dUk1d45VV2jgUvhOuPjVAzl3nWxAOHco5gOAg_u-9or90QiIRYR9wBHxCXOeqQS6_jUp7IrJ5rr_TTT042YnSn0N2i_AY-jU_bbByPK8FQuOhCQjUgj0x3uy58sm9UvEUv3MEQUFwxjnXnzg6IY5GOojyMEIfe",
  construction:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAA9PdybCAHNBW3mmymHAmlhMRdaUiCxBNGaNOZQc8oJXjLLKujTTNogTCGpHdjaF7idad7tQ5mP6JOCw9aQObkNhaRrYQVmLvABzgiII0BheYgWbnCI88qORJjIdPLdqy9D5atE4lduJb53tx2pDttIFTvGaIA3QxhVVkr0Xl8hH6TROcy_xDB9pb6KRv7miZ47cq9eQqrs-mM2YQzw68WJvIzZtP4u7xWmq4QxIan",
  color:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBJSh4ZcOTA-MPC7aACRSazJEoCwP5uK1btY550ACjED0pU_Rxxpnl7TmWRZLP_8om_M63j_5pyv-OneYdQiU8hNB940zmp9_PuywUYl3RKqdWz9qhKSmLvP2BRfj2jCe4_xqoGfMf9vcEKTt7fbgrVqcemPSZVrlqZ3HF1AnXvjitakzfJD9aQyKpIKZeeo6edG8R2TTZ4ad4JvFbGlgWTX0A3aXokxLAmaygIT1LN",
  coffee:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuABOfP5DjcF2iyuzECxzjmBWfwNq0WQLXJLkNs_tJU-ghl8cxc5CKp4935kLF81pe4yY-Cb8Va5ZnEU8-hxRBRDsYARYKwY0pfMEKj8dJVwODAi1z8_40no3QORsYh4f93FG7I4PNDQQkYy-sLg3URJSQHzUoORMqqiGA-2Oxz3IUNL_RXS-S_jlZNVSra1xI5KUYbxk81IPgcQalYt87lmP7OlCr6lurHs9IlS8XtD",
  styling:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCgBJyNy4Qi8_bCQ_wppxZE2_FwG1QYYkeKMocSi03HreuiWe--RxjfGQzpTPReB_xa-6aF4aWRd3DawBxVliZyehNf5AVavNeMilKLGvlYn5qmmN9fA8rwSJwm8XZKGbf17mQefcTQeUWFGGJbKkfUCiNX6mzWd4P6JpGFK9h_KyCqEDX2Jp5XEIdioE3X-TSK8pPyos0qKqpg5ZA7rPjVyTnjY7vAfMSj9CO1Z9K_",
  lounge:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCE9rnJh87FKv8c-Ds9qUBhMJH9FoN4ttaRwiSi0FH3qul9FDwzknlndHTVBJGKstrRJqfkDjgw33ZyFQaAHmLOfD9ovOuuLmOJtfr331DXg-nmsDR0BrqahY-H-p-IgdAEb11Mb9O-599kAc_01WnvmDOphCGGmYW41IcgtI4Ae1Q_o_bMlMWp989kQpI0nHGIiv9fFQCzlZZLj3PQihPaGbqaAVO8IdaCiLy_Pmz-",
};

const services = [
  {
    number: "01",
    category: "Signature color",
    duration: "3.5–4 hours",
    title: "Lived-In Dimensional Color & Glaze",
    description:
      "Artfully placed highlights and lowlights that grow out softly. Includes custom gloss toning, a strengthening mask, and a tailored blowout.",
    price: "From $295",
    note: "All-inclusive care",
  },
  {
    number: "02",
    category: "Hair architecture",
    duration: "75 minutes",
    title: "Bespoke Hair Design & Styling",
    description:
      "An architectural cut shaped around your natural movement, bone structure, and lifestyle, with a botanical cleanse and a personal styling ritual.",
    price: "From $110",
    note: "Tailored silhouette",
  },
  {
    number: "03",
    category: "Head spa",
    duration: "60 minutes",
    title: "The Maison Scalp & Follicle Ritual",
    description:
      "A restorative scalp massage, organic clay exfoliation, warm botanical steam, and deep follicle nourishment for a quieter mind and healthier scalp.",
    price: "From $145",
    note: "Deep relaxation",
  },
];

function Photo({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 760px) 100vw, (max-width: 1100px) 70vw, 50vw"
      unoptimized
      className="cover-image"
    />
  );
}

export default function Home() {
  return (
    <>
      <div className="announcement">
        <p>Opening Fall 2026 <span aria-hidden="true">·</span> Follow our journey on Instagram</p>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Mane & Maison home">
            <Image
              src="/logo.png"
              alt="Mane & Maison"
              width={185}
              height={82}
              priority
              unoptimized
              className="brand-logo"
            />
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/philosophy">About & philosophy</Link>
            <a href="#spaces">The sanctuary</a>
            <Link href="/services">Services & experiences</Link>
            <Link href="/team">Our team</Link>
            <Link href="/faqs">FAQs & guest care</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <Link className="header-cta" href="/contact">Stay in the know <span aria-hidden="true">↗</span></Link>

          <details className="mobile-menu">
            <summary aria-label="Open navigation menu"><span></span><span></span></summary>
            <nav aria-label="Mobile navigation">
              <Link href="/philosophy">About & philosophy</Link>
              <a href="#spaces">The sanctuary</a>
              <Link href="/services">Services & experiences</Link>
              <Link href="/team">Our team</Link>
              <Link href="/faqs">FAQs & guest care</Link>
              <a href="#opening">Opening updates</a>
              <Link href="/contact">Contact</Link>
            </nav>
          </details>
        </div>
      </header>

      <main id="home">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow-row">
              <span className="eyebrow-dot" aria-hidden="true"></span>
              <span>A sanctuary for hair & hospitality</span>
              <span className="eyebrow-divider" aria-hidden="true">·</span>
              <span>Urbandale, Iowa</span>
            </div>

            <p className="brand-kicker">Mane & Maison <span>·</span> Est. 2026</p>
            <h1>A salon designed<br />to feel <em>like home.</em></h1>
            <p className="hero-intro">
              Warm, elevated hair experiences rooted in intention, care, and timeless beauty. An intimate sanctuary where European calm meets bespoke hair artistry.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="mailto:hello@maneandmaison.com?subject=Reserve%20an%20experience">
                Reserve an experience <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#philosophy"><span aria-hidden="true">⟶</span> Explore the sanctuary</a>
            </div>

            <div className="hero-stats" aria-label="Our approach">
              <div><strong>01</strong><span>Single-chair care</span><small>Unrushed presence</small></div>
              <div><strong>100%</strong><span>Holistic cleanse</span><small>Botanical infusions</small></div>
              <div><strong>Fall ’26</strong><span>Grand opening</span><small>Limited reservations</small></div>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-arch image-frame">
              <Photo
                src={photography.atelier}
                alt="A sunlit, European-inspired salon atelier with arched mirrors, warm oak, and soft brass lighting"
                priority
              />
              <div className="image-shade" aria-hidden="true"></div>
              <div className="photo-caption">
                <div><span>Atelier architecture</span><strong>Warmth, oak & limewash</strong></div>
                <span className="caption-mark" aria-hidden="true">✳</span>
              </div>
            </div>
            <div className="round-stamp" aria-label="Opening Fall 2026 in Des Moines">
              <span>Fall</span><strong>2026</strong><small>Des Moines</small>
            </div>
            <div className="hero-frame" aria-hidden="true"></div>
          </div>
        </section>

        <section className="philosophy section-wrap" id="philosophy">
          <div className="philosophy-visual">
            <div className="philosophy-arch image-frame">
              <Photo
                src={photography.construction}
                alt="Arched passages and natural materials taking shape inside the future salon"
              />
              <div className="monogram">M<span>&</span>M</div>
            </div>
            <div className="photo-note"><span>Figure A · The structural sanctuary</span><span>10100 Plum Dr.</span></div>
          </div>

          <div className="philosophy-copy">
            <p className="section-label">Chapter 01 <span>·</span> The atelier conception</p>
            <h2>Beauty feels different when <em>you can exhale.</em></h2>
            <p className="section-intro">
              We are creating a place that feels less like an appointment and more like being welcomed home. Considered details, generous time, and thoughtful care make room for you to slow down.
            </p>
            <div className="values-list">
              <article>
                <span className="value-number">01</span>
                <div><h3>Residential pace</h3><p>Time to talk, settle in, and leave feeling like yourself.</p></div>
              </article>
              <article>
                <span className="value-number">02</span>
                <div><h3>Pure, restorative care</h3><p>Thoughtful European color and botanical rituals, chosen with intention.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="sanctuary" id="spaces">
          <div className="section-wrap sanctuary-inner">
            <div className="section-heading sanctuary-heading">
              <div><p className="section-label section-label-light">A home for your hair</p><h2>Designed to make<br /><em>room for you.</em></h2></div>
              <p>Natural textures, soft light, and the quiet comfort of a place that lets you be fully present.</p>
            </div>

            <div className="space-cards">
              <article className="space-card space-card-large">
                <div className="space-photo image-frame">
                  <Photo
                    src={photography.styling}
                    alt="The salon styling atelier with arched brass mirrors and softly illuminated oak consoles"
                  />
                  <div className="space-overlay"><span>Main styling atelier · Render 01</span><span>Arched millwork</span></div>
                </div>
                <h3>The Styling Stations</h3>
                <p>Bespoke floating consoles, warm brass, and flattering diffused light—thoughtfully made for the details that matter.</p>
              </article>

              <article className="space-card space-card-secondary">
                <div className="space-photo image-frame">
                  <Photo
                    src={photography.lounge}
                    alt="A relaxed hospitality lounge with natural timber, travertine, and vintage linen chairs"
                  />
                  <div className="space-overlay"><span>The hospitality lounge</span><span>Timber & travertine</span></div>
                </div>
                <h3>The Living Hearth</h3>
                <p>Timber beams, vintage linen armchairs, and a complimentary pour-over or herbal infusion while you rest.</p>
              </article>
            </div>

            <div className="detail-grid">
              <div><span className="detail-symbol" aria-hidden="true">⌁</span><strong>Limewash plaster</strong><small>Breathable mineral walls</small></div>
              <div><span className="detail-symbol" aria-hidden="true">⌂</span><strong>Custom millwork</strong><small>Warm white oak</small></div>
              <div><span className="detail-symbol" aria-hidden="true">✳</span><strong>Warm 2700K sconces</strong><small>Soft, flattering light</small></div>
              <div><span className="detail-symbol" aria-hidden="true">≈</span><strong>Aromatherapy basin</strong><small>Quiet head spa rituals</small></div>
            </div>
          </div>
        </section>

        <section className="experience section-wrap" id="experience">
          <div className="section-heading experience-heading">
            <div><p className="section-label">Service menu prelude</p><h2>Experiences designed<br />for <em>restoration.</em></h2></div>
            <div className="experience-intro">
              <p>Every offering includes a thoughtful consultation, something lovely to drink, and a moment to settle in.</p>
              <Link className="full-menu-link" href="/services">Explore the full service menu <span aria-hidden="true">↗</span></Link>
            </div>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <div className="service-copy">
                  <div className="service-meta"><span>{service.number} <i>·</i> {service.category}</span><small>{service.duration}</small></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="service-price"><strong>{service.price}</strong><span>{service.note}</span></div>
              </article>
            ))}
          </div>

          <div className="consultation-note">
            <span className="consultation-mark" aria-hidden="true">✳</span>
            <p>Planning a bespoke transformation or color correction?</p>
            <a href="mailto:hello@maneandmaison.com?subject=Request%20a%20consultation">Request a consultation <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="opening section-wrap" id="opening">
          <div className="opening-card">
            <div className="opening-copy">
              <p className="status-pill"><span aria-hidden="true"></span> Sanctuary status · In development</p>
              <h2>Opening Fall 2026<br />in <em>Urbandale.</em></h2>
              <p>We are shaping plaster arches, commissioning custom oak millwork, and choosing clean, considered formulations. Follow along as the atelier comes to life.</p>
              <div className="social-actions">
                <a className="button button-dark" href="https://www.instagram.com/maneandmaisonsalon/" target="_blank" rel="noreferrer">Follow on Instagram <span aria-hidden="true">↗</span></a>
                <a className="button button-light" href="https://www.tiktok.com/@maneandmaison?_r=1&_t=ZP-96Wjfe30hlX" target="_blank" rel="noreferrer">Watch on TikTok <span aria-hidden="true">↗</span></a>
              </div>
            </div>

            <div className="milestone-card">
              <div className="milestone-heading"><span>Atelier milestones</span><small>Phase II · Interior buildout</small></div>
              <ol className="milestones">
                <li className="complete"><span className="milestone-indicator">✓</span><div><strong>Site acquisition & arch conception</strong><small>Plum Drive permits finalized</small></div></li>
                <li className="complete"><span className="milestone-indicator">✓</span><div><strong>Structural framing & arched doorways</strong><small>Custom partitions and wash lounge</small></div></li>
                <li className="current"><span className="milestone-indicator"><i></i></span><div><strong>Plaster, fluted millwork & oak flooring</strong><small>Underway · Summer 2026</small></div></li>
                <li className="upcoming"><span className="milestone-indicator">·</span><div><strong>Opening private previews</strong><small>VIP guest welcoming · Fall 2026</small></div></li>
              </ol>
            </div>
          </div>
        </section>

        <section className="invitation section-wrap" id="contact">
          <div className="invitation-mark">M<span>&</span>M</div>
          <p className="section-label">The invitation</p>
          <h2>Ready to feel<br /><em>taken care of?</em></h2>
          <p className="invitation-copy">Be among the first to experience our residential sanctuary when appointments open this fall.</p>
          <a className="button button-dark invitation-button" href="mailto:hello@maneandmaison.com?subject=Keep%20me%20updated">Join the invitation list <span aria-hidden="true">↗</span></a>
          <div className="contact-details">
            <span>⌖ <span>10100 Plum Dr Ste. 125, Urbandale, IA 50322</span></span>
            <a href="mailto:hello@maneandmaison.com">✉ <span>hello@maneandmaison.com</span></a>
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
              <div><a href="https://www.instagram.com/maneandmaisonsalon/" target="_blank" rel="noreferrer">Instagram</a><span>·</span><a href="https://www.tiktok.com/@maneandmaison?_r=1&_t=ZP-96Wjfe30hlX" target="_blank" rel="noreferrer">TikTok</a></div>
            </div>
          </div>
          <div className="footer-bottom"><p>© 2026 Mane & Maison. All rights reserved.</p><a href="#home">Back to top ↑</a></div>
        </div>
      </footer>
    </>
  );
}
