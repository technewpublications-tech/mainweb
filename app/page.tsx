import { CtaBand, SectionHeading, SitePage, Stats } from "./components/SiteChrome";

export default function Home() {
  return (
    <SitePage>
      <section className="hero split-hero home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Scholarly Rigor</p>
            <h1>Refining your research for <em>high-impact</em> journals.</h1>
            <p className="hero-intro">We bridge the gap between groundbreaking data and stringent review standards. Align your manuscript with precise journal guidelines through expert peer-review simulation.</p>
            <div className="button-row">
              <a className="button button-amber" href="/contact">Evaluate Manuscript</a>
              <a className="button button-outline" href="/services">Our Services</a>
            </div>
          </div>
          <div className="hero-image frame-offset">
            <img src="/assets/home-hero.avif" alt="Medium close-up of a researcher's organized desk, a laptop showing a structured scientific manuscript layout, stacked academic journals, bright natural library daylight, shallow depth of field, 35mm lens" />
          </div>
        </div>
      </section>

      <section className="services-overview soft-gray">
        <div className="container">
          <SectionHeading eyebrow="Our Expertise" title="Manuscript refinement services" intro="Every paper has distinct requirements. We provide meticulous technical preparation tailored to your target index." />
          <div className="feature-grid three">
            <article><img className="feature-icon" src="/assets/icons/shield.svg" alt="" /><p className="micro-label">Simulation</p><h3>Peer-Review Simulation</h3><p>Our editors, all published scholars, evaluate your methodology&apos;s logical flow to pre-empt reviewer objections.</p></article>
            <article><img className="feature-icon" src="/assets/icons/layers.svg" alt="" /><p className="micro-label">Compliance</p><h3>Technical Formatting</h3><p>Complete alignment with complex journal guidelines, citation styles, and artwork requirements.</p></article>
            <article><img className="feature-icon" src="/assets/icons/pen-tool.svg" alt="" /><p className="micro-label">Clarity</p><h3>Language Optimization</h3><p>Polishing academic English to ensure your scientific insights are communicated with absolute precision.</p></article>
          </div>
        </div>
      </section>

      <Stats dark eyebrow="Academic Outcomes" title="Proven publishing success" items={[
        { value: "94%", label: "first-round acceptance rate" },
        { value: "12k+", label: "manuscripts refined" },
        { value: "450+", label: "high-impact journals targeted" },
      ]} />
      <CtaBand title="Ready for submission?" copy="Receive a preliminary evaluation of your manuscript's peer-review readiness from our editorial desk within twenty-four hours." button="Evaluate Manuscript" />
    </SitePage>
  );
}
