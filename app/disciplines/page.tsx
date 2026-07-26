import { CtaBand, SectionHeading, SitePage, Stats } from "../components/SiteChrome";

export default function Disciplines() {
  return (
    <SitePage>
      <section className="hero split-hero disciplines-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Domain Expertise</p>
            <h1>Precision editing across every <em>academic discipline</em></h1>
            <p className="hero-intro">We pair your research with peer-review editors who hold PhDs in your exact field, ensuring technical accuracy and methodological clarity.</p>
            <div className="button-row"><a className="button button-amber" href="/contact">Find Your Specialty</a><a className="button button-outline" href="#fields">View Fields</a></div>
          </div>
          <div className="hero-image frame-offset"><picture><source media="(max-width: 520px)" srcSet="/assets/disciplines-hero-mobile.png" /><img src="/assets/disciplines-hero-desktop.png" alt="A focused researcher reviewing printed academic journals by a large library window, soft natural daylight, shallow depth of field, 35mm lens" /></picture></div>
        </div>
      </section>

      <section className="disciplines-section soft-gray" id="fields">
        <div className="container">
          <div className="disciplines-heading">
            <SectionHeading eyebrow="Our Coverage" title="Four expert academic divisions" intro="Our editorial board is structured into specialized divisions, ensuring your manuscript is reviewed by scholars who speak your field's precise language." />
            <p className="coverage-note"><span>01—04</span>Every manuscript is assigned by subject, methodology, and target journal.</p>
          </div>
          <div className="discipline-layout">
            <article className="discipline-card discipline-card-image">
              <picture><source media="(max-width: 520px)" srcSet="/assets/disciplines-math-mobile.png" /><img src="/assets/disciplines-math-desktop.png" alt="Researcher working on a mathematical model on a laptop" /></picture>
              <div className="discipline-content">
                <p className="discipline-index">Division 01</p>
                <h3>Physical Sciences &amp; Engineering</h3>
                <p>Expert manuscript refinement for physics, chemistry, materials science, and all engineering branches. We focus on methodological clarity and mathematical precision.</p>
                <ul className="discipline-tags" aria-label="Physical sciences specialties"><li>Physics</li><li>Chemistry</li><li>Engineering</li></ul>
              </div>
            </article>
            <article className="discipline-card discipline-card-color discipline-card-navy">
              <div className="discipline-content">
                <p className="discipline-index">Division 02</p>
                <h3>Life Sciences &amp; Medicine</h3>
                <p>Rigorous editing for clinical medicine, biochemistry, genetics, and neuroscience, adhering strictly to AMA, ICMJE, and journal-specific guidelines.</p>
                <ul className="discipline-tags" aria-label="Life sciences specialties"><li>Clinical Medicine</li><li>Genetics</li><li>Neuroscience</li></ul>
              </div>
              <p className="discipline-mark" aria-hidden="true">LS</p>
            </article>
            <article className="discipline-card discipline-card-color discipline-card-sand">
              <div className="discipline-content">
                <p className="discipline-index">Division 03</p>
                <h3>Social Sciences &amp; Humanities</h3>
                <p>Nuanced styling for psychology, economics, sociology, literature, and history. We preserve your unique scholarly voice while elevating argumentative rigor.</p>
                <ul className="discipline-tags" aria-label="Social sciences specialties"><li>Psychology</li><li>Economics</li><li>Humanities</li></ul>
              </div>
              <p className="discipline-mark" aria-hidden="true">SH</p>
            </article>
            <article className="discipline-card discipline-card-image">
              <picture><source media="(max-width: 520px)" srcSet="/assets/disciplines-books-mobile.png" /><img src="/assets/disciplines-books-desktop.png" alt="Academic journals and books arranged on a library desk" /></picture>
              <div className="discipline-content">
                <p className="discipline-index">Division 04</p>
                <h3>Formal Sciences</h3>
                <p>Specialized support for computer science, mathematics, and statistics, ensuring precise notation, algorithm formatting, and clean code presentation.</p>
                <ul className="discipline-tags" aria-label="Formal sciences specialties"><li>Computer Science</li><li>Mathematics</li><li>Statistics</li></ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Stats eyebrow="Scholarly Rigor" title="Peer-review standards, guaranteed" items={[
        { value: "100%", label: "Editors hold PhDs" },
        { value: "12k+", label: "Papers peer-reviewed" },
        { value: "450+", label: "Target journals mastered" },
      ]} />
      <CtaBand tone="blue" title="Ensure peer-review readiness" copy="Submit your manuscript draft today for a complimentary initial evaluation by a subject-matter expert in your field." button="Find Your Specialty" />
    </SitePage>
  );
}
