import type { Metadata } from "next";

export const metadata: Metadata = { title: "Our Journey" };

const stages = [
  {
    number: "01",
    title: "A chapter to be named",
    description: "Add an owner-confirmed milestone and its context here.",
  },
  {
    number: "02",
    title: "A moment to remember",
    description: "A place for a verified event, with a date only when it is known.",
  },
  {
    number: "03",
    title: "The next page",
    description: "A future chapter can be added when the creator chooses to share it.",
  },
];

export default function JourneyPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <span className="eyebrow">The relationship journey</span>
        <h1 className="page-title">A story, in its own time.</h1>
        <p className="page-lead">
          The journey will be a sequence of creator-approved milestones. No dates or events
          are shown until they are provided or confirmed by the owner.
        </p>
      </section>
      <section className="content-panel" style={{ marginBottom: 64 }}>
        <div className="section-heading">
          <div>
            <span className="label-pill"><span className="label-dot" /> Timeline placeholders</span>
            <h2 className="section-title">Chapters of the journey</h2>
          </div>
        </div>
        <div className="timeline">
          {stages.map((stage) => (
            <article className="timeline-item" key={stage.number}>
              <div className="timeline-marker" aria-hidden="true">✧</div>
              <div className="timeline-copy">
                <span className="eyebrow">Milestone {stage.number}</span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}