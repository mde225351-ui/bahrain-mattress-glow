import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BedDouble,
  Check,
  ChevronDown,
  Clock3,
  Droplets,
  Feather,
  Heart,
  Menu,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Wind,
  X,
} from "lucide-react";

import heroImage from "@/assets/anabiya-hero.jpg";
import bedroomImage from "@/assets/anabiya-bedroom.jpg";
import cleaningImage from "@/assets/anabiya-cleaning-detail.jpg";
import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { GlassTestimonialSwiper } from "@/components/ui/glass-testimonial-swiper";
import { Button } from "@/components/ui/button";
import { brand, reelSlots } from "@/lib/site-content";

const navigation = [
  { label: "Our approach", href: "#about" },
  { label: "The service", href: "#services" },
  { label: "The difference", href: "#difference" },
  { label: "In Bahrain", href: "#bahrain" },
];

const services = [
  { index: "01", icon: Droplets, title: "Deep mattress clean", detail: "Professional care for the surface you rest on, with attention to every quilted detail." },
  { index: "02", icon: Sparkles, title: "Targeted stain treatment", detail: "A thoughtful treatment for visible marks, selected with care for your mattress fabric." },
  { index: "03", icon: Wind, title: "Dust & dirt removal", detail: "A meticulous clean designed to lift everyday dust and dirt from mattress fibres." },
];

const benefits = [
  { icon: Sparkles, title: "A fresher-feeling bed", detail: "Refresh your mattress as part of the place you call home." },
  { icon: ShieldCheck, title: "A cleaner sleep space", detail: "Help keep the surface you sleep on clean and hygienic." },
  { icon: Heart, title: "Care that feels personal", detail: "An attentive service, thoughtfully centred on your mattress." },
  { icon: Feather, title: "More comfortable nights", detail: "Make room for a little more ease when you turn in." },
];

const process = [
  { index: "01", title: "Get in touch", detail: "Contact us by WhatsApp, call or email to enquire about mattress cleaning." },
  { index: "02", title: "Discuss your mattress", detail: "Tell us what you would like cleaned and share any questions." },
  { index: "03", title: "Book a visit", detail: "Arrange a suitable time directly with ANABIYA HOMES." },
  { index: "04", title: "Wake up fresh", detail: "Enjoy a cleaner-feeling mattress at home." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ANABIYA HOMES | Mattress Cleaning in Bahrain" },
      { name: "description", content: "Wake up fresh with a cleaner mattress. Discover professional mattress cleaning, stain treatment and dust removal from ANABIYA HOMES in Bahrain." },
      { property: "og:title", content: "ANABIYA HOMES | Mattress Cleaning in Bahrain" },
      { property: "og:description", content: "Professional mattress care in Bahrain. Wake up fresh with a cleaner mattress." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function Wordmark({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`wordmark${footer ? " wordmark--footer" : ""}`} href="#home" aria-label="ANABIYA HOMES — home">
      <span className="wordmark__crest" aria-hidden="true">A<span>.</span></span>
      <span className="wordmark__text"><span>ANABIYA</span><small>H O M E S</small></span>
    </a>
  );
}

function SectionEyebrow({ number, children }: { number: string; children: string }) {
  return <div className="section-eyebrow"><span>{number}</span><i aria-hidden="true" />{children}</div>;
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -24px 0px" });
    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <div className="site-header__inner">
          <Wordmark />
          <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
            <Button asChild className="header-booking"><a href={`https://wa.me/${brand.phoneLink.slice(1)}?text=${encodeURIComponent("Hello ANABIYA HOMES, I’d like to enquire about mattress cleaning.")}`} target="_blank" rel="noreferrer">Book a clean <ArrowUpRight aria-hidden="true" /></a></Button>
          </nav>
          <Button type="button" variant="outline" size="icon" className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <img className="hero__photo" src={heroImage} width={1920} height={1200} alt="Professional cleaner caring for a mattress in a refined bedroom" fetchPriority="high" />
        <div className="hero__wash" aria-hidden="true" />
        <div className="hero__content">
          <p className="hero__eyebrow"><span />MATTRESS CARE, CONSIDERED<span /></p>
          <h1 id="hero-title">A fresher<br />kind of <em>rest.</em></h1>
          <p className="hero__tagline">{brand.tagline}</p>
          <p className="hero__description">Professional mattress cleaning, delivered with the care your home deserves.</p>
          <div className="hero__actions">
            <Button asChild className="button-gold button-gold--large"><a href={`https://wa.me/${brand.phoneLink.slice(1)}?text=${encodeURIComponent("Hello ANABIYA HOMES, I’d like to book a mattress cleaning.")}`} target="_blank" rel="noreferrer"><Send aria-hidden="true" />Book via WhatsApp<ArrowUpRight aria-hidden="true" /></a></Button>
            <a className="hero__secondary" href="#services">Discover our care <ArrowDown aria-hidden="true" /></a>
          </div>
          <div className="hero__signature"><i aria-hidden="true" /><span>Thoughtful mattress care</span><span className="hero__signature-place">Bahrain</span></div>
        </div>
        <a className="hero__side-note" href="#about"><span>THE ART OF A FRESHER BED</span><span className="hero__side-line" /></a>
        <div className="hero__bottom"><span>ANABIYA HOMES</span><span>01 — A CLEANER WAY TO REST</span></div>
      </section>

      <section className="intro section-padding" id="about">
        <div className="intro__grid page-container">
          <div className="intro__visual" data-reveal>
            <img src={bedroomImage} width={1200} height={1504} alt="An immaculate, restful bedroom with crisp white bedding" loading="lazy" />
            <div className="intro__caption"><span className="intro__caption-mark">A.</span><span>FOR THE FEELING<br />OF A FRESH BED</span></div>
            <div className="intro__image-frame" aria-hidden="true" />
          </div>
          <div className="intro__copy" data-reveal>
            <SectionEyebrow number="01">A LITTLE ABOUT US</SectionEyebrow>
            <h2>Rest begins<br />with what’s <em>beneath.</em></h2>
            <p className="intro__lead">A clean, comfortable bed changes the feeling of coming home.</p>
            <p>At {brand.name}, we bring professional mattress cleaning to homes across {brand.location}. Our service focuses on the surface you rest on—thoughtfully cared for, with attention to dust, dirt and visible stains.</p>
            <p>Because the little rituals of a well-kept home should feel every bit as good as they look.</p>
            <a className="text-link" href="#services">Get to know our service <ArrowRight aria-hidden="true" /></a>
            <div className="intro__seal"><BadgeCheck aria-hidden="true" /><span>Thoughtful<br />mattress care</span></div>
          </div>
        </div>
      </section>

      <section className="services section-padding" id="services">
        <div className="page-container">
          <div className="section-heading" data-reveal>
            <div><SectionEyebrow number="02">MATTRESS CLEANING</SectionEyebrow><h2>Care for the<br /><em>heart of your bedroom.</em></h2></div>
            <p>A considered clean, centred on your mattress and the way you use it.</p>
          </div>
          <div className="service-list">
            {services.map(({ index, icon: Icon, title, detail }) => (
              <article className="service-row" key={title} data-reveal>
                <span className="service-row__index">{index}</span><span className="service-row__icon"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3><p>{detail}</p><ArrowUpRight className="service-row__arrow" aria-hidden="true" />
              </article>
            ))}
          </div>
          <div className="services__bottomline"><span>MADE FOR THE PLACE YOU CALL HOME</span><a className="text-link" href={`https://wa.me/${brand.phoneLink.slice(1)}`} target="_blank" rel="noreferrer">Ask about mattress care <ArrowRight aria-hidden="true" /></a></div>
        </div>
      </section>

      <section className="difference section-padding" id="difference">
        <div className="difference__inner page-container">
          <div className="difference__heading" data-reveal><SectionEyebrow number="03">THE ANABIYA DIFFERENCE</SectionEyebrow><h2>Nothing less<br />than <em>considered.</em></h2><p>Simple things matter when it comes to a good night’s rest. Our mattress cleaning service is built around attentive care and a cleaner feeling at home.</p></div>
          <div className="difference__features">
            {benefits.map(({ icon: Icon, title, detail }, index) => <article key={title} className="difference-card" data-reveal><div className="difference-card__icon"><Icon aria-hidden="true" /></div><div><span>0{index + 1} / CARE</span><h3>{title}</h3><p>{detail}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="showcase section-padding" id="showcase">
        <div className="page-container">
          <div className="section-heading section-heading--showcase" data-reveal>
            <div><SectionEyebrow number="04">A CLOSER LOOK</SectionEyebrow><h2>A little more<br /><em>care in every pass.</em></h2></div>
            <p>Get to know our mattress-cleaning approach through the details.</p>
          </div>
          <div className="showcase__grid" data-reveal>
            <div><FeatureCarousel /></div>
            <div className="showcase__note"><div className="showcase__note-icon"><BedDouble aria-hidden="true" /></div><p className="eyebrow">THE BED, RECONSIDERED</p><h3>See the care<br />up <em>close.</em></h3><p>Every mattress has its own fabric, texture and story. Reach out to discuss the right care for yours.</p><a className="text-link" href={`https://wa.me/${brand.phoneLink.slice(1)}?text=${encodeURIComponent("Hello ANABIYA HOMES, I have a question about mattress cleaning.")}`} target="_blank" rel="noreferrer">Ask us about your mattress <ArrowRight aria-hidden="true" /></a></div>
          </div>
        </div>
      </section>

      <section className="before-after section-padding" id="before-after">
        <div className="page-container">
          <div className="before-after__heading" data-reveal><SectionEyebrow number="05">THE TRANSFORMATION</SectionEyebrow><h2>Before &amp; after,<br /><em>when it’s yours to share.</em></h2><p>Every mattress is different. We’ll share real customer transformations here as they become available.</p></div>
          <div className="before-after__frames" data-reveal>
            <article className="photo-placeholder"><img src={bedroomImage} width={1200} height={1504} alt="Bedroom image awaiting a real before photograph" loading="lazy" /><span className="photo-placeholder__label">BEFORE</span><div className="photo-placeholder__caption"><span>YOUR BEFORE PHOTO</span><span>REAL CUSTOMER PHOTOGRAPH</span></div></article>
            <span className="before-after__divider" aria-hidden="true"><ArrowRight /></span>
            <article className="photo-placeholder"><img src={cleaningImage} width={1200} height={1504} alt="Mattress cleaning image awaiting a real after photograph" loading="lazy" /><span className="photo-placeholder__label">AFTER</span><div className="photo-placeholder__caption"><span>YOUR AFTER PHOTO</span><span>REAL CUSTOMER PHOTOGRAPH</span></div></article>
          </div>
          <p className="before-after__note"><Check aria-hidden="true" /> Genuine ANABIYA HOMES results will appear here when available.</p>
        </div>
      </section>

      <section className="gallery section-padding" id="gallery">
        <div className="page-container">
          <div className="section-heading gallery__heading" data-reveal><div><SectionEyebrow number="06">AT HOME WITH ANABIYA</SectionEyebrow><h2>A fresh point<br /><em>of view.</em></h2></div><p>A glimpse into the care behind a more comfortable bed.</p></div>
          <div className="gallery-grid" data-reveal>
            <figure className="gallery-grid__large"><img src={heroImage} width={1920} height={1200} alt="Professional mattress care in an elegant bedroom" loading="lazy" /><figcaption><span>THE DETAIL</span><ArrowUpRight aria-hidden="true" /></figcaption></figure>
            <figure className="gallery-grid__tall"><img src={cleaningImage} width={1200} height={1504} alt="Close-up of professional mattress cleaning" loading="lazy" /><figcaption><span>THE CRAFT</span><ArrowUpRight aria-hidden="true" /></figcaption></figure>
            <figure className="gallery-grid__wide"><img src={bedroomImage} width={1200} height={1504} alt="A bright bedroom with fresh white linens" loading="lazy" /><figcaption><span>THE FEELING</span><ArrowUpRight aria-hidden="true" /></figcaption></figure>
          </div>
        </div>
      </section>

      <section className="reels section-padding" id="reels">
        <div className="page-container">
          <div className="section-heading reels__heading" data-reveal><div><SectionEyebrow number="07">SHORT MOMENTS, THOUGHTFULLY MADE</SectionEyebrow><h2>Follow the<br /><em>fresh feeling.</em></h2></div><p>Our little window into mattress care at home.</p></div>
          <div className="reels-grid" data-reveal>
            {reelSlots.map((slot, index) => <article className="reel-placeholder" key={slot} aria-label={`${slot} empty vertical video placeholder`}><div className="reel-placeholder__inner"><span className="reel-placeholder__top">ANABIYA / MOMENTS</span><div className="reel-placeholder__symbol"><span /><span /></div><span className="reel-placeholder__instruction">YOUR VIDEO<br />WILL LIVE HERE</span><span className="reel-placeholder__number">0{index + 1}</span></div></article>)}
          </div>
        </div>
      </section>

      <section className="testimonials section-padding" id="testimonials">
        <div className="testimonials__inner page-container">
          <div className="testimonials__heading" data-reveal><SectionEyebrow number="08">A WORD FROM OUR CLIENTS</SectionEyebrow><h2>Good care is<br /><em>worth sharing.</em></h2><p>Real notes from our clients will find a home here.</p></div>
          <div data-reveal><GlassTestimonialSwiper /></div>
        </div>
      </section>

      <section className="process section-padding" id="process">
        <div className="page-container">
          <div className="section-heading" data-reveal><div><SectionEyebrow number="09">HOW IT WORKS</SectionEyebrow><h2>Simple, from<br /><em>hello to fresh.</em></h2></div><p>A few straightforward steps to a cleaner-feeling mattress.</p></div>
          <div className="process-grid">
            {process.map((step) => <article className="process-step" key={step.index} data-reveal><span className="process-step__number">{step.index}</span><h3>{step.title}</h3><p>{step.detail}</p></article>)}
          </div>
          <div className="process__cta"><span>Ready when you are.</span><Button asChild className="button-gold"><a href={`https://wa.me/${brand.phoneLink.slice(1)}?text=${encodeURIComponent("Hello ANABIYA HOMES, I’d like to enquire about a mattress cleaning.")}`} target="_blank" rel="noreferrer">Let’s talk on WhatsApp <ArrowUpRight aria-hidden="true" /></a></Button></div>
        </div>
      </section>

      <section className="bahrain section-padding" id="bahrain">
        <div className="page-container">
          <div className="bahrain__heading" data-reveal><SectionEyebrow number="10">PROUDLY IN BAHRAIN</SectionEyebrow><h2>At home,<br /><em>across Bahrain.</em></h2><p>ANABIYA HOMES offers professional mattress cleaning in Bahrain. Get in touch to discuss your area.</p></div>
          <div className="bahrain__map" data-reveal>
            <iframe title="Interactive OpenStreetMap showing Bahrain" src="https://www.openstreetmap.org/export/embed.html?bbox=50.345%2C25.75%2C50.85%2C26.36&amp;layer=mapnik" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div className="bahrain__map-caption"><span className="bahrain__map-mark"><span /></span><span>BAHRAIN<br /><small>OUR SERVICE AREA</small></span><a href="https://www.openstreetmap.org/#map=10/26.0667/50.5577" target="_blank" rel="noreferrer" aria-label="Open interactive map of Bahrain"><ArrowUpRight /></a></div>
          </div>
          <p className="bahrain__fineprint"><ChevronDown aria-hidden="true" /> Area shown is Bahrain; no specific service address is indicated.</p>
        </div>
      </section>

      <section className="contact section-padding" id="contact">
        <div className="contact__inner page-container" data-reveal>
          <div className="contact__heading"><SectionEyebrow number="11">A CLEANER BED, CLOSER THAN YOU THINK</SectionEyebrow><h2>Let’s talk about<br /><em>a fresher rest.</em></h2><p>For mattress cleaning enquiries and bookings in Bahrain, reach out directly.</p><Button asChild className="button-gold button-gold--large"><a href={`https://wa.me/${brand.phoneLink.slice(1)}?text=${encodeURIComponent("Hello ANABIYA HOMES, I’d like to enquire about mattress cleaning.")}`} target="_blank" rel="noreferrer"><Send aria-hidden="true" />Book on WhatsApp<ArrowUpRight aria-hidden="true" /></a></Button></div>
          <div className="contact__ways">
            <a className="contact-way" href={`tel:${brand.phoneLink}`}><span className="contact-way__icon"><Phone aria-hidden="true" /></span><span><small>GIVE US A CALL</small><strong>{brand.phoneDisplay}</strong></span><ArrowUpRight className="contact-way__arrow" aria-hidden="true" /></a>
            <a className="contact-way" href={`https://wa.me/${brand.phoneLink.slice(1)}`} target="_blank" rel="noreferrer"><span className="contact-way__icon contact-way__icon--whatsapp"><Send aria-hidden="true" /></span><span><small>MESSAGE US ON WHATSAPP</small><strong>{brand.phoneDisplay}</strong></span><ArrowUpRight className="contact-way__arrow" aria-hidden="true" /></a>
            <a className="contact-way" href={`mailto:${brand.email}`}><span className="contact-way__icon contact-way__icon--email"><span aria-hidden="true">@</span></span><span><small>DROP US AN EMAIL</small><strong>{brand.email}</strong></span><ArrowUpRight className="contact-way__arrow" aria-hidden="true" /></a>
            <div className="contact__location"><Clock3 aria-hidden="true" /><span><small>WHERE WE ARE</small><strong>Serving {brand.location}</strong></span></div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__main page-container"><div className="site-footer__brand"><Wordmark footer /><p>Thoughtful mattress care for a fresher feeling at home.</p></div><nav className="site-footer__nav" aria-label="Footer navigation">{navigation.slice(0, 3).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}<a href="#contact">Contact</a></nav><a className="site-footer__back" href="#home">BACK TO THE TOP <ArrowUpRight aria-hidden="true" /></a></div>
        <div className="site-footer__bottom page-container"><span>© {new Date().getFullYear()} {brand.name}</span><span>PROFESSIONAL MATTRESS CLEANING · {brand.location.toUpperCase()}</span><a href={`mailto:${brand.email}`}>{brand.email}</a></div>
      </footer>
    </main>
  );
}