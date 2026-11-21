import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "The Letter",
    description: "A dedicated space for words written and approved by the creator.",
    href: "/letter",
    label: "Read the letter",
    icon: "✉",
  },
  {
    number: "02",
    title: "Memory Museum",
    description: "A curated gallery for authentic stories, places, photographs, and notes.",
    href: "/memories",
    label: "Explore the museum",
    icon: "▧",
  },
  {
    number: "03",
    title: "Fantasy World",
    description: "A quiet imaginative landscape with optional points of discovery.",
    href: "/world",
    label: "Enter the world",
    icon: "✧",
  },
  {
    number: "04",
    title: "Our Journey",
    description: "An owner-curated sequence of verified milestones, without invented dates.",
    href: "/journey",
    label: "Follow the journey",
    icon: "⌁",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">A personal digital universe</span>
            <h1 className="display-title">
              A little world,
              <br />
              <em>kept with care.</em>
            </h1>
            <p className="hero-copy">
              YONG-YI is a place for letters, memories, stories, and small discoveries.
              Built to feel like a world of its own, while keeping what matters clear,
              personal, and private by design.
            </p>
            <div className="hero-actions">
              <Link className="button-primary" href="/memories">
                Explore the experience <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button-secondary" href="/letter">Open the letter</Link>
            </div>
            <p className="hero-note">A living project · Built one meaningful layer at a time</p>
          </div>
          <div className="hero-art" role="img" aria-label="Abstract illustration of a moon above layered green hills">
            <div className="art-orbit" />
            <div className="art-moon" />
            <span className="art-star" style={{ top: "17%", left: "22%" }} />
            <span className="art-star" style={{ top: "25%", right: "18%" }} />
            <span className="art-star" style={{ top: "52%", left: "16%" }} />
            <span className="art-star" style={{ top: "62%", right: "23%" }} />
            <div className="art-hill" />
            <div className="art-hill second" />
            <div className="art-label">The world of YONG-YI</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Four ways to explore</span>
              <h2 className="section-title">At the heart of YONG-YI</h2>
            </div>
            <p className="section-subtitle">
              Each experience has its own place, but they belong to one coherent world.
              The preview uses clearly marked placeholders until authentic content is added.
            </p>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <Link className="pillar-card" href={pillar.href} key={pillar.number}>
                <span className="pillar-icon" aria-hidden="true">{pillar.icon}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <span className="pillar-foot">{pillar.label} ↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 4 }}>
        <div className="container">
          <div className="notice">
            <strong>Preview experience:</strong> all sample cards and world details are illustrative
            placeholders. No personal memories, photographs, messages, or relationship dates have
            been added. Secure Creator Studio and private storage are not connected yet.
          </div>
        </div>
      </section>
    </>
  );
}