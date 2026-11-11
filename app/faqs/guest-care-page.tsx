"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Category = "all" | "cadence" | "pricing" | "sensory" | "wellness" | "opening";

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "All inquiries" },
  { id: "cadence", label: "Reservation & cadence" },
  { id: "pricing", label: "Pricing & gratuity" },
  { id: "sensory", label: "Quiet Chair experience" },
  { id: "wellness", label: "Chemical philosophy" },
  { id: "opening", label: "Fall 2026 opening" },
];

const cadenceQuestions = [
  {
    id: "single-chair",
    question: "Why do you operate under a strict 1:1 single-chair policy?",
    answers: [
      "In standard commercial salons, stylists frequently manage several clients at once—moving between foil applications while another guest waits at the washbasin. At Mane & Maison, we reserve each session for one guest.",
      "Your dedicated artisan is with you throughout your appointment, with unhurried time for consultation and care.",
    ],
  },
  {
    id: "session-length",
    question: "How long do appointments typically last, and why are they never compressed?",
    answers: [
      "Hair and scalp services benefit from having enough time for each step. Botanical glosses, gentle lifting, and scalp treatments all have their own timing.",
      "We leave a quiet buffer between guest sessions, so your service can follow its planned pace without cutting corners.",
    ],
  },
  {
    id: "cancellation",
    question: "What is your cancellation and rescheduling courtesy policy?",
    answers: [
      "Because each artisan reserves a dedicated block of time for you, a late cancellation can’t easily be filled by another guest.",
      "Please give at least 48 hours’ notice for changes. Changes made within 48 hours incur a 50% reservation fee; day-of absences are charged at 100%.",
    ],
  },
  {
    id: "running-late",
    question: "What if I am running late for my reserved sanctuary session?",
    answers: [
      "If you expect to arrive late, please let our atelier concierge know by phone or text as soon as you can.",
      "Arrivals more than 20 minutes past the reserved time may need a simplified service or a new appointment, so that technical steps aren’t rushed.",
    ],
  },
];

const wellnessQuestions = [
  {
    id: "products",
    question: "What products and color chemistry do you formulate with?",
    answers: [
      "We work with European color lines that are predominantly ammonia-free and enriched with oils such as argan, meadowfoam seed, and jojoba.",
      "Your artisan can talk through individual ingredients and sensitivities during consultation, then tailor the service to your hair and scalp.",
    ],
  },
  {
    id: "sensitive-scalp",
    question: "How does the Japanese Head Spa support sensitive or dry scalps?",
    answers: [
      "The ritual is adapted to your scalp profile. If sensitivity is present, we can skip stronger exfoliation and choose gentler options such as white clay, colloidal oat rinses, and cooler steam.",
      "Your artisan will check in throughout the service and adjust the ritual to your comfort.",
    ],
  },
  {
    id: "color-headspa",
    question: "Can I receive hair color and a deep head spa ritual during the same visit?",
    answers: [
      "After color, we use a soothing head bath designed for that service instead of a stronger detox scrub.",
      "For deeper scalp exfoliation and massage, we recommend booking a separate Head Spa session 7 to 10 days before or after a color appointment.",
    ],
  },
];

const inclusions = [
  {
    label: "Formulation chemistry",
    text: "Custom glosses, root melts, bond builders, and botanical restorative glazes are included in the quoted service rate.",
  },
  {
    label: "Wash & hydrotherapy",
    text: "Botanical scalp care, carbonated water rinses, and an ergonomic neck cradle for basin services.",
  },
  {
    label: "Finish & bespoke styling",
    text: "A tailored blowout, gentle diffusion, or thermal finish is included with every cut or color service.",
  },
  {
    label: "Atelier refreshments",
    text: "Single-origin coffee, herbal infusions, still or sparkling water, and seasonal bites.",
  },
];

const sensoryOptions = [
  {
    symbol: "◌",
    title: "The ‘Quiet Chair’ Option",
    paragraphs: [
      "You are never obligated to make small talk. Let your artisan know when booking or at the start of your consultation that you prefer a quiet appointment.",
      "Aside from essential service check-ins, your artisan will keep conversation minimal so you can read, rest, work, or reflect.",
    ],
    note: "Quiet is always welcome",
  },
  {
    symbol: "⌂",
    title: "Adult Rest & Additional Guests",
    paragraphs: [
      "To protect the retreat atmosphere, the sanctuary is designed for adults. Children under 13 are welcome only when they have a reserved service.",
      "We also ask companions without an appointment to avoid lingering in private styling suites.",
    ],
    note: "A low-decibel sanctuary",
  },
  {
    symbol: "⌘",
    title: "Attire & Remote Working",
    paragraphs: [
      "Wear whatever brings you ease. We’ll offer a stonewashed Belgian linen robe to protect your clothes during your service.",
      "Private Wi-Fi and lap pillows are available if you need to work during color development.",
    ],
    note: "Remote work welcome",
  },
];

function Photo({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} alt={alt} fill sizes="(max-width: 760px) 100vw, 60vw" unoptimized className="cover-image" />;
}

function Accordion({
  id,
  question,
  answers,
  open,
  onToggle,
}: {
  id: string;
  question: string;
  answers: string[];
  open: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <article className={`guest-faq-item${open ? " is-open" : ""}`}>
      <button className="guest-faq-toggle" type="button" aria-expanded={open} aria-controls={`answer-${id}`} onClick={() => onToggle(id)}>
        <span>{question}</span><span className="guest-faq-icon" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div className="guest-faq-answer" id={`answer-${id}`} hidden={!open}>
        {answers.map((answer) => <p key={answer}>{answer}</p>)}
      </div>
    </article>
  );
}

export default function GuestCarePage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  function chooseCategory(category: Category) {
    setActiveCategory(category);
    setOpenQuestion(null);
    const target = category === "all" ? "cadence" : category;
    window.setTimeout(() => document.getElementById(`guest-${target}`)?.scrollIntoView({ behavior: "smooth", block: "start" }), 20);
  }

  function toggleQuestion(id: string) {
    setOpenQuestion((current) => current === id ? null : id);
  }

  return (
    <>
      <div className="announcement"><p>Opening Fall 2026 <span aria-hidden="true">·</span> Follow our journey on Instagram</p></div>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="Mane & Maison home"><Image src="/logo.png" alt="Mane & Maison" width={185} height={82} priority unoptimized className="brand-logo" /></Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/philosophy">About & philosophy</Link><Link href="/#spaces">The sanctuary</Link><Link href="/services">Services & experiences</Link><Link href="/team">Our team</Link><Link href="/faqs" aria-current="page">FAQs & guest care</Link><Link href="/contact">Contact</Link>
          </nav>
          <Link className="header-cta" href="/contact">Contact us <span aria-hidden="true">↗</span></Link>
          <details className="mobile-menu"><summary aria-label="Open navigation menu"><span></span><span></span></summary><nav aria-label="Mobile navigation"><Link href="/philosophy">About & philosophy</Link><Link href="/#spaces">The sanctuary</Link><Link href="/services">Services & experiences</Link><Link href="/team">Our team</Link><Link href="/faqs" aria-current="page">FAQs & guest care</Link><Link href="/contact">Contact</Link></nav></details>
        </div>
      </header>

      <main className="guest-care-page">
        <section className="guest-care-hero">
          <div className="guest-care-glow guest-care-glow-one" aria-hidden="true"></div><div className="guest-care-glow guest-care-glow-two" aria-hidden="true"></div>
          <div className="guest-care-container">
            <div className="guest-care-heading">
              <p className="guest-care-eyebrow"><span></span> Mane & Maison Atelier <i>·</i> Guest etiquette & guidance</p>
              <h1>Everything you need to know about our <em>unhurried</em> sanctuary.</h1>
              <p>Clear guidance designed to protect your time, our artisans’ focus, and your hair’s long-term care.</p>
              <div className="guest-care-filters" role="group" aria-label="Filter guest care topics">
                {filters.map((filter) => <button type="button" key={filter.id} className={activeCategory === filter.id ? "guest-filter is-active" : "guest-filter"} aria-pressed={activeCategory === filter.id} onClick={() => chooseCategory(filter.id)}>{filter.label}</button>)}
              </div>
            </div>

            <div className="guest-care-visuals">
              <article className="guest-visual-main image-frame">
                <Photo src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1gdPbNC2pwHrNVYX4p1vahErBrj3oqn-8UBPuKkvTBsXIlp6a7_Eo15J1c_563D1MsiU0CxyuA_p_uQaYC3GZU_Ub6BuxgWJE-77ec2eyQNolvyR05W2aymcQVGXksdPZHqNddgNjvytZyd2YzFf1Ahq7R_drr4l2gvRn5NVo1UydCfnOGLoWKi72x1pnOgK5F14p_M7X8pVGXdWf8nsA9aQxc31L959AZqH26SqH" alt="A sunlit atelier with limewash walls, arched doors, oak cabinetry, and a linen styling chair" />
                <div className="guest-visual-shade" aria-hidden="true"></div><div className="guest-visual-copy"><span>Atmosphere standard 01</span><h2>Devoted 1:1 Attention Without Parallel Clamour</h2><p>Private treatment suites, dedicated time, and no rushed washbowls.</p></div>
              </article>
              <article className="guest-visual-secondary image-frame">
                <Photo src="https://lh3.googleusercontent.com/aida-public/AB6AXuAev5u7d1xDiclw5DjH004EJh6yI6YGJi9-KfvR3-6agZxc65amUA7E38ocsy8YVxGleohIxak0n5uBygFoukbAUuJSUTzrNngBMDum1dcVsCHoi5rAlqQzE7G4_Sq6Muut4M8DfI4YeJkTGceQbk9NEM31ZPpw_ie4JoTOMtVyNgnKX9oqrswl_IUEOl2f6rQK23Ab4ZraQxTSp1nq1pb4xDsx3CdOluDcTR2HHE8p" alt="Travertine wash basin detail with a curved brass faucet, linen towels, lavender, and olive branches" />
                <div className="guest-visual-shade" aria-hidden="true"></div><div className="guest-visual-top"><span>Acoustic calm</span><small>Urbandale, IA</small></div><div className="guest-visual-copy"><h2>Organic tactile surfaces, zero harsh chemicals.</h2><p>Hand-mixed natural pigments & low-decibel Japanese hydrotherapy.</p></div>
              </article>
            </div>
          </div>
        </section>

        {(activeCategory === "all" || activeCategory === "cadence") && (
          <section className="guest-topic-section cadence-topic" id="guest-cadence">
            <div className="guest-care-container cadence-grid">
              <aside className="cadence-intro"><p className="guest-chapter">Protocol chapter I</p><h2>The unhurried reservation cadence.</h2><p>We reject the frantic pace of conveyor-belt salons. Time with us is protected and dedicated to your visit.</p><div className="duration-card"><span aria-hidden="true">◷</span><div><small>Average session duration</small><p>From <strong>90 minutes</strong> for precision cuts to <strong>4.5 hours</strong> for a comprehensive color and head spa visit.</p></div></div></aside>
              <div className="guest-accordion-list">{cadenceQuestions.map((item) => <Accordion key={item.id} {...item} open={openQuestion === item.id} onToggle={toggleQuestion} />)}</div>
            </div>
          </section>
        )}

        {(activeCategory === "all" || activeCategory === "pricing") && (
          <section className="guest-topic-section pricing-topic" id="guest-pricing">
            <div className="guest-care-container pricing-grid">
              <div className="pricing-copy"><p className="guest-chapter">Radical simplicity</p><h2>Zero hidden add-ons. Completely gratuity-free.</h2><p>The awkward ritual of calculating tips at checkout has no place in thoughtful hospitality. Our rates are all-inclusive, so guests can leave in calm.</p><div className="pricing-promise"><span aria-hidden="true">✓</span> All-inclusive rates · No surprise invoice surcharges</div></div>
              <div className="included-card"><div className="included-heading"><div><p className="guest-chapter">The all-inclusive standard</p><h3>What is included in your quoted service rate?</h3></div><span aria-hidden="true">✳</span></div><div className="included-grid">{inclusions.map((item) => <article key={item.label}><span>{item.label}</span><p>{item.text}</p></article>)}</div><div className="included-footer"><p>Questions about a specific service?</p><Link href="/services">View the full treatment menu <span aria-hidden="true">↗</span></Link></div></div>
            </div>
          </section>
        )}

        {(activeCategory === "all" || activeCategory === "sensory") && (
          <section className="guest-topic-section sensory-topic" id="guest-sensory">
            <div className="guest-care-container"><div className="guest-section-heading"><p className="guest-chapter">Protocol chapter II</p><h2>Sensory wellness & the ‘Quiet Chair’ experience.</h2><p>An intentional environment for mental restoration, with mindful acoustic guidance and thoughtful comfort options.</p></div><div className="sensory-grid">{sensoryOptions.map((option) => <article key={option.title}><span className="sensory-symbol" aria-hidden="true">{option.symbol}</span><h3>{option.title}</h3>{option.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<small><i>✓</i>{option.note}</small></article>)}</div></div>
          </section>
        )}

        {(activeCategory === "all" || activeCategory === "wellness") && (
          <section className="guest-topic-section wellness-topic" id="guest-wellness">
            <div className="guest-care-container wellness-grid"><aside className="wellness-intro"><p className="guest-chapter">Protocol chapter III</p><h2>Biological scalp wellness & low-tox alchemy.</h2><p>We choose color and scalp care with attention to comfort, ingredients, and your individual hair and scalp profile.</p><div className="wellness-notes"><article><span aria-hidden="true">✳</span><div><h3>Gentler atmosphere</h3><p>Our atelier is planned around cedarwood, dried sage, and low-odor services.</p></div></article><article><span aria-hidden="true">⌕</span><div><h3>Scalp consultation</h3><p>Head spa rituals begin with a close look at scalp condition and comfort needs.</p></div></article></div></aside><div className="guest-accordion-list">{wellnessQuestions.map((item) => <Accordion key={item.id} {...item} open={openQuestion === item.id} onToggle={toggleQuestion} />)}</div></div>
          </section>
        )}

        {(activeCategory === "all" || activeCategory === "opening") && (
          <section className="guest-topic-section opening-topic" id="guest-opening">
            <div className="guest-care-container"><div className="opening-card-guest"><div className="opening-copy-guest"><p className="guest-chapter">Urbandale sanctuary · Opening Fall 2026</p><h2>How founding reservations & previews work.</h2><p>Our home at <strong>10100 Plum Dr Ste. 125, Urbandale, Iowa</strong> is taking shape with natural plaster, European oak, and custom acoustic details.</p><p>Founding waitlist members receive early booking links before public scheduling opens. Opening month appointments will be capped to preserve an unhurried pace.</p><div className="opening-actions-guest"><a className="button button-dark" href="mailto:hello@maneandmaison.com?subject=Join%20the%20Founding%20Waitlist">Join the founding waitlist <span aria-hidden="true">↗</span></a><Link className="button button-light" href="/philosophy">Explore our philosophy</Link></div></div><aside className="guest-timeline"><div className="guest-timeline-heading"><span>Key timeline</span><small>2026 milestones</small></div><ol><li><i>01</i><div><strong>July 2026</strong><span>Architectural walkthrough previews for founding patrons.</span></div></li><li><i>02</i><div><strong>August 2026</strong><span>Private booking access by email.</span></div></li><li><i>03</i><div><strong>Fall 2026</strong><span>First ceremonial sanctuary appointments begin.</span></div></li></ol><blockquote>“A space designed not for quick throughput, but lasting physical peace.”</blockquote></aside></div></div>
          </section>
        )}

        <section className="guest-contact-section"><div className="guest-care-container"><div className="guest-contact-mark" aria-hidden="true">✉</div><p className="guest-chapter">Direct concierge</p><h2>Have an inquiry not answered here?</h2><p>Our atelier concierge can help with consultation questions, allergies, bridal suites, and specific sensory requests.</p><a className="button button-dark" href="mailto:hello@maneandmaison.com?subject=Atelier%20inquiry">Reach out to our concierge <span aria-hidden="true">↗</span></a></div></section>
      </main>

      <footer className="site-footer"><div className="section-wrap footer-inner"><div className="footer-main"><div className="footer-intro"><p className="section-label section-label-light">A sanctuary for thoughtful haircare</p><h2>Ready to feel<br />taken care of?</h2><p>A residential hospitality experience where salon artistry meets intentional European calm. Designed for slow living and personal restoration.</p><Link className="footer-cta" href="/services">Explore our experiences <span aria-hidden="true">↗</span></Link></div><div className="footer-address"><p className="section-label section-label-light">Sanctuary address</p><address>10100 Plum Dr Ste. 125<br />Urbandale, IA 50322<br /><small>By appointment · Fall 2026</small></address><p className="section-label section-label-light correspondence-label">Direct correspondence</p><a href="mailto:hello@maneandmaison.com">hello@maneandmaison.com</a></div><div className="footer-dispatch"><p className="section-label section-label-light">Explore Mane & Maison</p><p>Learn about our philosophy and meet the resident artisans.</p><Link href="/philosophy">Our philosophy <span aria-hidden="true">↗</span></Link><p className="section-label section-label-light social-label">Follow the journey</p><div><a href="https://www.instagram.com/maneandmaisonsalon/" target="_blank" rel="noreferrer">Instagram</a><span>·</span><a href="https://www.tiktok.com/@maneandmaison?_r=1&_t=ZP-96Wjfe30hlX" target="_blank" rel="noreferrer">TikTok</a></div></div></div><div className="footer-bottom"><p>© 2026 Mane & Maison. All rights reserved.</p><Link href="/">Back to homepage ↑</Link></div></div></footer>
    </>
  );
}
