import { SectionHeading, SitePage, Steps } from "../components/SiteChrome";

const serviceSteps = [
  { title: "Manuscript Intake", copy: "Submit your draft and target journal list for initial scope and structural assessment." },
  { title: "Expert Evaluation", copy: "Two subject-matter specialists conduct double-blind peer-review simulation." },
  { title: "Technical Alignment", copy: "Our formatting editors rebuild references, figures, and tables to publisher specifications." },
  { title: "Final Verification", copy: "A senior managing editor signs off on the submission-ready manuscript package." },
];

export default function Services() {
  return (
    <SitePage>
      <section className="hero split-hero services-hero">
        <div className="container hero-grid image-left">
          <div className="hero-image frame-offset"><picture><source media="(max-width: 520px)" srcSet="/assets/services-hero-mobile.png" /><img src="/assets/services-hero-desktop.png" alt="Overhead shot of an organized academic desk, printed manuscript pages with red annotations, a laptop showing a LaTeX document, soft window light, shallow depth of field" /></picture></div>
          <div className="hero-copy">
            <p className="eyebrow">/ &nbsp;Manuscript Preparation</p>
            <h1>Refining manuscripts for <em>high-impact journals</em></h1>
            <p className="hero-intro">We align your scientific methodology and technical formatting with the exact compliance standards of Elsevier, IEEE, Springer, and Nature.</p>
            <a className="button button-amber" href="/contact">Request Service Quote</a>
          </div>
        </div>
      </section>

      <section className="services-overview soft-gray">
        <div className="container">
          <SectionHeading eyebrow="Core Services" title="Three pillars of publication readiness" intro="Every paper undergoes multi-layered evaluation by active peer reviewers and technical editors to ensure methodological integrity and compliance." />
          <div className="feature-grid three">
            <article><img className="feature-icon" src="/assets/icons/shield.svg" alt="" /><h3>Peer-Review Simulation</h3><p>Active journal editors evaluate your methodology, identify logical gaps, and review statistical integrity before submission.</p></article>
            <article><img className="feature-icon" src="/assets/icons/nib.svg" alt="" /><h3>Substantive Editing</h3><p>Academic linguists refine prose flow, eliminate stylistic ambiguity, and ensure precise technical terminology.</p></article>
            <article><img className="feature-icon" src="/assets/icons/layers.svg" alt="" /><h3>Technical Compliance</h3><p>Meticulous formatting of citations, figures, and layouts to match the exact guidelines of your target publisher.</p></article>
          </div>
        </div>
      </section>

      <Steps compact eyebrow="Our Methodology" title="The path to acceptance" items={serviceSteps} />

      <section className="packages-section">
        <div className="container">
          <SectionHeading light eyebrow="Service Packages" title="Transparent academic pricing" intro="Select the level of editorial intervention your research requires to meet the exacting standards of high-impact peer-reviewed indexes." />
          <div className="packages-grid">
            <article><h3>Technical Alignment</h3><p>Complete layout, citation, and figure compliance tailored to your target publisher guidelines.</p><div><h2>48h</h2><span>Standard Turnaround</span></div></article>
            <article><h3>Substantive Editing</h3><p>Linguistic refinement paired with complete technical formatting compliance for successful journal submission.</p><div><h2>5d</h2><span>Standard Turnaround</span></div></article>
            <article><h3>Peer-Review Simulation</h3><p>Double-blind peer-review simulation by active editors paired with comprehensive substantive editing.</p><div><h2>7d</h2><span>Standard Turnaround</span></div></article>
          </div>
          <a className="button button-amber packages-button" href="/contact">Submit Manuscript for Evaluation</a>
        </div>
      </section>
    </SitePage>
  );
}
