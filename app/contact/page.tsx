import { ContactForm } from "../components/ContactForm";
import { SectionHeading, SitePage } from "../components/SiteChrome";

export default function Contact() {
  return (
    <SitePage>
      <section className="contact-intro">
        <div className="container">
          <div className="contact-heading"><p className="eyebrow">Confidential Evaluation</p><h1>Secure manuscript <em>evaluation desk</em></h1><p className="hero-intro">Submit your research draft or abstract with complete confidence. Tech New Publication provides a secure, encrypted portal for scholars to request preliminary assessments, ensuring your intellectual property is fully protected from first contact.</p></div>
          <div className="trust-grid">
            <article><img src="/assets/icons/shield.svg" alt="" /><h3>Binding NDA protection</h3><p>Your intellectual property is fully protected from the moment of contact. We execute binding, comprehensive non-disclosure agreements before any editorial review, ensuring your proprietary research, methodologies, and data remain strictly confidential.</p></article>
            <article><img src="/assets/icons/target.svg" alt="" /><h3>Rapid 24-hour response</h3><p>Academic timelines are demanding. Our editorial desk conducts a swift, preliminary evaluation of your draft, delivering a comprehensive technical formatting audit and a transparent pricing quote within twenty-four business hours.</p></article>
            <article><img src="/assets/icons/award.svg" alt="" /><h3>PhD-level editorial rigor</h3><p>Your manuscript is handled exclusively by active scholars. Every editor on our team holds a PhD, has a proven publication record, and understands the rigorous expectations of high-impact, peer-reviewed journals.</p></article>
          </div>
        </div>
      </section>

      <section className="contact-form-section soft-gray">
        <div className="container contact-form-grid">
          <div><SectionHeading eyebrow="Submission Portal" title="Editorial review request" /><p>Provide your manuscript details, abstract, or draft below to initiate our rigorous evaluation process. An editor specializing in your specific academic discipline will review your submission, assess its methodological clarity, and outline the precise steps needed for peer-review readiness.</p></div>
          <ContactForm />
        </div>
      </section>
    </SitePage>
  );
}
