import { CtaBand, SectionHeading, SitePage, Steps } from "../components/SiteChrome";

const processSteps = [
  { title: "Initial Structural Assessment", copy: "Your designated PhD editor evaluates methodological clarity, logical progression, and overall alignment with target journal guidelines." },
  { title: "Peer-Review Simulation", copy: "Two independent subject-matter experts perform a double-blind review to identify potential technical objections before submission." },
  { title: "Precision Technical Formatting", copy: "We adjust citations, reference lists, figures, and margins to match the exact style sheet of your selected index." },
  { title: "Post-Review Support", copy: "Receive detailed guidance on drafting responses to journal editors and executing subsequent manuscript revisions." },
];

export default function Process() {
  return (
    <SitePage>
      <section className="process-hero full-hero">
        <div className="full-hero-overlay" />
        <div className="full-hero-content">
          <p className="eyebrow">Rigorous Editorial Workflow</p>
          <h1>From draft to <em>high-impact</em> publication</h1>
          <p>Our systematic manuscript refinement process prepares your research for the world&apos;s most demanding peer-reviewed journals.</p>
          <a className="button button-amber" href="/contact">Start Evaluation</a>
        </div>
      </section>

      <Steps eyebrow="The Path to Acceptance" title="Our four-stage editorial method" items={processSteps} />

      <section className="standards-section">
        <div className="container standards-grid">
          <div><p className="eyebrow">Scholarly Rigor Guaranteed</p><h2>Uncompromising peer-review readiness standards</h2><h2 className="big-stat">94.2%</h2><p className="stat-caption">First-round submission acceptance rate</p></div>
          <div className="standards-copy"><p>We do not offer superficial proofreading. Our editorial board consists entirely of active researchers and published PhDs who understand the unwritten rules of high-impact indexing.</p><p>By simulating the exact scrutiny of elite journal reviewers, we isolate gaps in your data presentation and strengthen your core scientific narrative.</p><p>Every manuscript undergoes a secondary compliance check by a senior formatting specialist before final delivery.</p></div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <SectionHeading eyebrow="Common Inquiries" title="Clear answers for researchers" />
          <div className="faq-grid">
            <article><h4>Who edits my manuscript?</h4><p>Your paper is assigned to an active researcher with a PhD in your specific discipline, ensuring complete comprehension of your scientific intent.</p></article>
            <article><h4>What if my paper is rejected?</h4><p>Our post-editing support includes comprehensive assistance with revising your manuscript and drafting precise responses to the journal&apos;s editorial board.</p></article>
            <article><h4>How do you protect my data?</h4><p>We sign strict non-disclosure agreements before any document transfer. Your intellectual property remains entirely secure throughout our workflow.</p></article>
            <article><h4>Which journals do you support?</h4><p>We format manuscripts for all major high-impact indexes, including Elsevier, Springer, IEEE, Nature, and various open-access publications.</p></article>
          </div>
        </div>
      </section>
      <CtaBand tone="navy" title="Ready for peer review" copy="Submit your abstract today for a complimentary initial evaluation of your manuscript's structural readiness." button="Upload Manuscript" />
    </SitePage>
  );
}
