import Image from "next/image";
import Link from "next/link";

const photography = {
  atelier:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBvfUskVhx7EcOeUqxTInOxseUe5Lfxny4UT-FbsTZswCYJTwWh6O08PM6yVgjK6g1LWzLd3tHPH8W1Mt-ngi7Cfm7j-4c7Rdnu4R39_vWytUKfIlqofOZgWEEb7ewcw4d7CAb5tVSlQwdij-NzVQ7M7x4y81L6R5MFTWCdF7zVY3HZ8BxrjUrOfnAIHyPhz-hG34WNov64pOfVlEHsD7ktTKheqWndjW9yqn2tosqc",
  arch:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDDNE99qlRb0v926kRXkNJNE7DSgqSn2ireN6rmTXQHLvIQcL4SqJI-9LxlHxAadYq9_h_yIK0CB5JTSgs2wdJgzQS3vaXX19IJo6jp4Zg_yxe8-Jvz39_KYED-_qJyytCnbC4tMPbA3lI3Erg4CVPPD04yHjTvw3kuzVojwQHTwIWs11WK1Xa8Z-9FVR39lizlPAx2kosi6V48pNPQoDl5ascOIysyExjsCFugUDyT",
  travertine:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCcl-Q_yVY8Bt7Fw_4Ocg4GJfEUg6UbmMiWswY2_eGOTYwRsxS_12kX8ahwSv38ou3PzX6-dOSqehxHL9gWtj3goU6cQiugo546yD1v0hRsUJjO4yU-ABfbiWOCwdVlPqox7p0HC84kXfPvNJwAuFsH8SBVPoEx7NHEK3AMJ1S4FnN6MNhyq2Am9gajSMUzGCQk06JJHf7to7-CIp3RJo73CcxnGaGr8Sp0DpyK--TL",
  materials:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBS45G0wyM2IkpYK4keMQNtzEodAMC2uQSffpLXu3akLsautLFCBF0wMVTS2a0TBtYxVPhtgkA7GgXgvAmuVM0Nfkm6KNOkpg4xgzjyXPCUuQacszeEUiNSMLVWVcKEdCaBMM40Ra3SlazEpUM9m1HXl9CaatNpPS_Zysq8DVUuyULrOjAP9IbNZbof7VkRLeNWiCXBo-qiPxGiaz5MWxpMmVGsIEK9TiLLHgsOrRNP",
  founder:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ-b2NB2846O83YDDrWgzRaf4FBOLjtt5n54LewsuaoZFmht1zCRBIIYO8EVztRIaCPnko920JEbrNl7rebC7_1Bpk_whvxKw2SrBOrzNgMX9WpQjtnabfrpv5Rc_9T2cxoH7RswbQfJG5_p1mJdIfR-k4fBnfzdN4YO21vWA6TNYpfoJiuLULd2GumV0cHg2itm-Ex9luXfMzCbzFba863OO3LW-YWSo007MVtMIz",
};

const architectureFeatures = [
  {
    label: "Acoustic engineering",
    title: "Sound-Softening Timber",
    text: "Ceiling joists and limewash help soften noise, leaving room for intimate conversation.",
  },
  {
    label: "Living room lounge",
    title: "Absence of Public Mirrors",
    text: "A fireside lounge welcomes guests before they enter the styling rooms.",
  },
  {
    label: "Circadian lighting",
    title: "2700K Indirect Luster",
    text: "Warm brass task sconces bring soft, balanced light to hair and skin.",
  },
];

const materials = [
  {
    number: "01",
    title: "Hand-Troweled Limewash",
    description: "Mineral plaster colored with natural earth oxides. Its matte texture softens light and gives each wall a gentle, lived-in finish.",
    origin: "Aquitaine, France",
    mark: "≈",
  },
  {
    number: "02",
    title: "Honed Travertine",
    description: "Tactile European limestone with quiet natural veining, chosen for the wash spaces and their restorative rituals.",
    origin: "Tivoli Quarries, Italy",
    mark: "⌁",
  },
  {
    number: "03",
    title: "Fluted White Oak",
    description: "Quarter-sawn millwork keeps tools and supplies tucked away, so visual calm carries through the room.",
    origin: "Midwest oak",
    mark: "▥",
  },
  {
    number: "04",
    title: "Living Raw Brass",
    description: "Uncoated brass fixtures will develop a natural patina through touch, water, and time.",
    origin: "Bespoke mill finish",
    mark: "✳",
  },
];

const tenets = [
  {
    numeral: "I",
    title: "Unhurried Cadence",
    subtitle: "Zero double-booking",
    text: "Appointments are planned with generous time. Your artisan can focus on one guest at a time, without overlapping timers or rushing through the details.",
    protocol: "Protocol 01 · Pure presence",
  },
  {
    numeral: "II",
    title: "Low-Tox Chemistry",
    subtitle: "Scalp & fiber integrity",
    text: "Ammonia-free color, camellia seed oils, and botanical infusions support thoughtful care from scalp to ends.",
    protocol: "Protocol 02 · Considered care",
  },
  {
    numeral: "III",
    title: "The Quiet Chair",
    subtitle: "Permission to rest",
    text: "Guests may request a silent appointment: no small talk or expectations, just peaceful company and careful craft.",
    protocol: "Protocol 03 · Sensory consent",
  },
  {
    numeral: "IV",
    title: "Acoustic & Olfactory Calm",
    subtitle: "The head spa suite",
    text: "A quieter water suite, cedarwood and bergamot notes, and warm steam make space for a restorative pause.",
    protocol: "Protocol 04 · Atmosphere",
  },
];

const milestones = [
  {
    phase: "Phase 01",
    title: "Spatial Planning & Permits",
    text: "Acoustic isolation, hydrotherapy plumbing plans, and architectural permitting for the fireplace lounge.",
    timing: "Q1 2026 · Urbandale civil approval",
    status: "Completed",
  },
  {
    phase: "Phase 02",
    title: "European Oak Millwork",
    text: "Cabinetry, arched passage framing, and fluted oak storage for a more considered salon floor.",
    timing: "Spring 2026 · Studio Arch construction",
    status: "Completed",
  },
  {
    phase: "Phase 03",
    title: "Limewash & Hydro-Spas",
    text: "French limewash plaster, living brass fittings, and Japanese waterfall basin calibration.",
    timing: "Summer 2026 · Artisan finishing",
    status: "In progress",
  },
  {
    phase: "Phase 04",
    title: "Private Previews",
    text: "Preview gatherings for atelier waitlist members, followed by the sanctuary opening.",
    timing: "Fall 2026 · Grand hospitality launch",
    status: "Upcoming",
  },
];

function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <Image src={src} alt={alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 70vw, 60vw" unoptimized className={`cover-image ${className}`} />;
}

export default function PhilosophyPage() {
  return (
    <>
      <div className="announcement"><p>Opening Fall 2026 <span aria-hidden="true">·</span> Follow our journey on Instagram</p></div>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="Mane & Maison home"><Image src="/logo.png" alt="Mane & Maison" width={185} height={82} priority unoptimized className="brand-logo" /></Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/philosophy" aria-current="page">About & philosophy</Link>
            <Link href="/#spaces">The sanctuary</Link>
            <Link href="/services">Services & experiences</Link>
            <Link href="/team">Our team</Link>
            <Link href="/faqs">FAQs & guest care</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <Link className="header-cta" href="/contact">Join the invitation <span aria-hidden="true">↗</span></Link>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu"><span></span><span></span></summary>
            <nav aria-label="Mobile navigation">
              <Link href="/philosophy" aria-current="page">About & philosophy</Link>
              <Link href="/#spaces">The sanctuary</Link>
              <Link href="/services">Services & experiences</Link>
              <Link href="/team">Our team</Link>
              <Link href="/faqs">FAQs & guest care</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </details>
        </div>
      </header>

      <main className="philosophy-page">
        <section className="philosophy-hero">
          <div className="section-wrap">
            <p className="philosophy-breadcrumb">Mane & Maison archive <i>·</i> <strong>Chapter 02 — The Philosophy</strong> <i>·</i> Urbandale, Iowa</p>
            <h1>Conceived as a sanctuary.<br />Built like an heirloom <em>home.</em></h1>
            <div className="philosophy-hero-bottom">
              <div className="philosophy-hero-story">
                <p>Mane & Maison was born from an intentional rejection of salon industrialization—the relentless drone of high-velocity dryers, fluorescent mirrored corridors, and the impersonal speed of modern chair turns. In Urbandale, we set out to build an antidote: an intimate residential atelier where European architectural calm meets unhurried hair mastery.</p>
                <div className="philosophy-actions"><a className="button button-dark" href="#manifesto">Read the manifesto <span aria-hidden="true">↓</span></a><a className="button button-light" href="#materials">Materiality index</a></div>
              </div>
              <div className="atelier-facts">
                <div><strong>2,800</strong><span>Sq ft atelier</span></div>
                <div><strong>1 : 1</strong><span>Devoted ratio</span></div>
                <div><strong>Fall ’26</strong><span>Urbandale, IA</span></div>
                <p><span></span> Site 10100 Plum Dr Ste. 125 · Construction phase</p>
              </div>
            </div>
          </div>
        </section>

        <section className="spatial-section">
          <div className="section-wrap">
            <div className="philosophy-section-heading">
              <div><p className="philosophy-kicker">Spatial curation & light studies</p><h2>Designed with <em>warmth</em> in mind.</h2></div>
              <p>Inspired by Parisian private apartments and Mediterranean limewash residences, the atelier is planned for sensory calm over commercial capacity.</p>
            </div>
            <div className="spatial-feature image-frame">
              <Photo src={photography.atelier} alt="A salon atelier concept with limewash walls, arched passageways, white oak cabinetry, and warm natural light" />
              <div className="spatial-feature-shade" aria-hidden="true"></div>
              <span className="spatial-render-label">The great salon gallery · Concept rendering</span>
              <div className="spatial-feature-cards">
                {architectureFeatures.map((feature) => <article key={feature.title}><span>{feature.label}</span><h3>{feature.title}</h3><p>{feature.text}</p></article>)}
              </div>
            </div>

            <div className="spatial-story-grid">
              <div className="spatial-story-copy">
                <p className="philosophy-tag">Spatial philosophy</p>
                <h3>Why residential architecture changes the salon experience.</h3>
                <p>Conventional salons are often built for turnover: shiny surfaces, rows of chairs, and echoing rooms that hurry guests through a service loop. We questioned those conventions.</p>
                <p>Soft plaster arches and deeply padded seating create styling alcoves with a slower rhythm, giving both stylist and guest room for a more considered experience.</p>
                <div className="spatial-checks"><span><i>✓</i> Individual cloak suites</span><span><i>✓</i> Dedicated tea library</span></div>
              </div>
              <div className="spatial-detail-cards">
                <article><div className="spatial-detail-photo image-frame"><Photo src={photography.arch} alt="A softly curved limewash archway and linen curtain in warm morning light" /></div><div><span>Structure 01</span><h4>Curved Acoustic Portals</h4><p>Architectural arches that soften footfall and ambient murmurs.</p></div></article>
                <article><div className="spatial-detail-photo image-frame"><Photo src={photography.travertine} alt="Honed travertine wash basin with a warm brass faucet and folded linen towels" /></div><div><span>Structure 02</span><h4>Travertine Hydro-Beds</h4><p>Flat-lay basins designed for comfort during restorative wash rituals.</p></div></article>
              </div>
            </div>
          </div>
        </section>

        <section className="materiality-section" id="materials">
          <div className="section-wrap">
            <div className="materiality-intro">
              <div className="materiality-photo image-frame"><Photo src={photography.materials} alt="A tactile study of limewash, raw linen, travertine, and aged brass details" /><div className="materiality-caption"><strong>Tactile sample board</strong><span>Materials selected for Urbandale Suite 125</span></div></div>
              <div><p className="philosophy-kicker">The materiality index</p><h2>Raw, breathable materials that <em>age gracefully</em> over decades.</h2><p>Every surface inside Mane & Maison is chosen for authenticity. An honest palette of earth elements gives the atelier a richer patina with time.</p></div>
            </div>
            <div className="materials-grid">
              {materials.map((material) => <article key={material.number}><div className="material-card-top"><span>Index {material.number}</span><i aria-hidden="true">{material.mark}</i></div><h3>{material.title}</h3><p>{material.description}</p><div className="material-origin"><small>Origin</small><strong>{material.origin}</strong></div></article>)}
            </div>
          </div>
        </section>

        <section className="manifesto-section" id="manifesto">
          <div className="section-wrap">
            <div className="manifesto-heading"><p className="philosophy-kicker">The slow salon manifesto</p><h2>The Four Tenets of <em>Slow Haircraft.</em></h2><p>How we rethink salon culture to protect hair integrity and make room for human peace.</p></div>
            <div className="tenets-grid">
              {tenets.map((tenet) => <article key={tenet.numeral}><span className="tenet-number">{tenet.numeral}</span><h3>{tenet.title}</h3><small>{tenet.subtitle}</small><p>{tenet.text}</p><span className="tenet-protocol">{tenet.protocol}</span></article>)}
            </div>
            <div className="manifesto-quote"><p>“We don’t believe in changing who you are; we believe in carving out the hours needed for your natural grace to emerge.”</p><a href="#timeline">View buildout timeline <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>

        <section className="founder-letter">
          <div className="section-wrap founder-letter-grid">
            <div className="founder-visual-column">
              <div className="founder-portrait image-frame"><Photo src={photography.founder} alt="Founder Elena Vance at a table with architectural plans and travertine samples" /><div className="founder-caption"><span>Founder & creative director</span><strong>Elena Vance</strong><small>Master Color Métier · 14 years atelier practice</small></div></div>
              <div className="architect-credit"><span aria-hidden="true">⌂</span><div><small>Spatial planning</small><strong>Studio Arch Design & Associates, Des Moines</strong></div></div>
            </div>
            <div className="founder-letter-copy"><p className="philosophy-tag">Epistle & intent</p><h2>“Does this invite a <em>deeper breath?</em>”</h2><p>For over a decade behind the chair, I saw how commercial salon environments could make an appointment feel hurried: the glare, the chemical tang, stylists moving between wash basins.</p><p>Hair is deeply personal. It holds history, transitions, celebrations, and vulnerability. Treating it like an assembly-line product felt like a loss of what salon hospitality could be.</p><p>When we designed Mane & Maison for Urbandale, every archway, linen curtain, and handmade ceramic cup came back to one question: <em>Does this invite a deeper breath?</em></p><p>We can’t wait to open our double wooden doors and welcome you home.</p><div className="founder-signature"><div><strong>Elena Vance</strong><span>Urbandale, Iowa · 2026</span></div><span className="atelier-seal"><i></i> Atelier seal</span></div></div>
          </div>
        </section>

        <section className="timeline-section" id="timeline">
          <div className="section-wrap">
            <div className="timeline-heading"><p className="philosophy-kicker">Urbandale buildout horizon</p><h2>The Journey to <em>Fall 2026.</em></h2><p>Follow the craft milestones as 10100 Plum Dr Suite 125 becomes a slow haircare residence.</p></div>
            <div className="timeline-grid">
              {milestones.map((milestone, index) => <article className={`timeline-card${index === 2 ? " timeline-card-current" : ""}`} key={milestone.phase}><span className="timeline-status">{milestone.status}</span><small>{milestone.phase}</small><h3>{milestone.title}</h3><p>{milestone.text}</p><span className="timeline-date">{milestone.timing}</span></article>)}
            </div>
            <div className="founding-invitation"><div><p className="philosophy-kicker">Exclusive opening calendar</p><h3>Be the first to step across our threshold.</h3><p>With one guest at a time, Fall 2026 preview appointments will be limited to 48 founding guests.</p></div><div><a className="button button-dark" href="mailto:hello@maneandmaison.com?subject=Join%20the%20atelier%20waitlist">Join the waitlist <span aria-hidden="true">↗</span></a><a className="button button-light" href="mailto:hello@maneandmaison.com?subject=Stylist%20inquiry">Stylist inquiries</a></div></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <div className="footer-main">
            <div className="footer-intro"><p className="section-label section-label-light">A sanctuary for thoughtful haircare</p><h2>Ready to feel<br />taken care of?</h2><p>A residential hospitality experience where salon artistry meets intentional European calm. Designed for slow living and personal restoration.</p><Link className="footer-cta" href="/services">Explore our experiences <span aria-hidden="true">↗</span></Link></div>
            <div className="footer-address"><p className="section-label section-label-light">Sanctuary address</p><address>10100 Plum Dr Ste. 125<br />Urbandale, IA 50322<br /><small>By appointment · Fall 2026</small></address><p className="section-label section-label-light correspondence-label">Direct correspondence</p><a href="mailto:hello@maneandmaison.com">hello@maneandmaison.com</a></div>
            <div className="footer-dispatch"><p className="section-label section-label-light">Explore Mane & Maison</p><p>Meet the resident artisans or return to the atelier story.</p><Link href="/team">Meet our artisans <span aria-hidden="true">↗</span></Link><p className="section-label section-label-light social-label">Follow the journey</p><div><a href="https://www.instagram.com/maneandmaisonsalon/" target="_blank" rel="noreferrer">Instagram</a><span>·</span><a href="https://www.tiktok.com/@maneandmaison?_r=1&_t=ZP-96Wjfe30hlX" target="_blank" rel="noreferrer">TikTok</a></div></div>
          </div>
          <div className="footer-bottom"><p>© 2026 Mane & Maison. All rights reserved.</p><Link href="/">Back to homepage ↑</Link></div>
        </div>
      </footer>
    </>
  );
}
