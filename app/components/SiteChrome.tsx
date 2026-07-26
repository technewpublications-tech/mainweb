const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Disciplines", "/disciplines"],
  ["Our Process", "/process"],
  ["Contact", "/contact"],
] as const;

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Tech New Publication home">
          <img src="/assets/logo.png" alt="Tech New Publication" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main container">
        <div className="footer-brand">
          <h3>Tech New Publication</h3>
          <p>Rigorous manuscript refinement for high-impact journals.</p>
        </div>
        <div className="footer-links">
          <p className="eyebrow amber">Resources</p>
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>{label === "Disciplines" ? "Fields of Study" : label}</a>
          ))}
        </div>
        <div className="footer-office">
          <p className="eyebrow amber">Editorial Office</p>
          <a href="mailto:support@technewpublication.com">support@technewpublication.com</a>
          <p>Response within 24 business hours</p>
          <p>Manuscript evaluation desk</p>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>© 2026 Tech New Publication-Supporting global researchers on their path to publication.</p>
        <p className="amber">Scholarly Rigor • Methodological Clarity</p>
      </div>
    </footer>
  );
}

export function SitePage({ children }: { children: React.ReactNode }) {
  return <><Header /><main>{children}</main><Footer /></>;
}

export function SectionHeading({ eyebrow, title, intro, light = false }: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading${light ? " light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

export function CtaBand({ title, copy, button, tone = "gradient" }: {
  title: string;
  copy: string;
  button: string;
  tone?: "gradient" | "blue" | "navy";
}) {
  return (
    <section className={`cta-band ${tone}`}>
      <div className="cta-content">
        <h2>{title}</h2>
        <p>{copy}</p>
        <a className={`button ${tone === "navy" ? "button-amber" : "button-navy"}`} href="/contact">{button}</a>
      </div>
    </section>
  );
}

export function Stats({ eyebrow, title, items, dark = false }: {
  eyebrow: string;
  title: string;
  items: { value: string; label: string }[];
  dark?: boolean;
}) {
  return (
    <section className={`stats-section${dark ? " dark" : ""}`}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} light={dark} />
        <div className="stats-grid">
          {items.map((item) => <div className="stat" key={item.label}><h2>{item.value}</h2><p>{item.label}</p></div>)}
        </div>
      </div>
    </section>
  );
}

export function Steps({ eyebrow, title, items, compact = false }: {
  eyebrow: string;
  title: string;
  items: { title: string; copy: string }[];
  compact?: boolean;
}) {
  return (
    <section className={`steps-section${compact ? " compact" : ""}`}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="steps-grid">
          {items.map((item, index) => (
            <article className="step" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h4>{item.title}</h4>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
