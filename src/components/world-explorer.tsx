"use client";

import { useState } from "react";

const places = [
  {
    id: "archive",
    label: "The Archive",
    title: "The Archive of Quiet Things",
    description: "A story space for letters, notes, and words the owner chooses to keep. No personal content is included in this preview.",
  },
  {
    id: "observatory",
    label: "The Observatory",
    title: "The Little Observatory",
    description: "A place to look outward, follow constellations, and discover optional world details.",
  },
  {
    id: "conservatory",
    label: "The Conservatory",
    title: "The Glass Conservatory",
    description: "A calm garden setting for future interactive details and owner-approved collectibles.",
  },
];

export function WorldExplorer() {
  const [activeId, setActiveId] = useState(places[0].id);
  const activePlace = places.find((place) => place.id === activeId) ?? places[0];

  return (
    <section className="world-scene" aria-label="Interactive fantasy world preview">
      <div className="world-stars" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => (
          <span
            key={index}
            className="art-star"
            style={{
              top: `${8 + ((index * 19) % 66)}%`,
              left: `${4 + ((index * 31) % 90)}%`,
              opacity: 0.4 + ((index % 5) * 0.12),
            }}
          />
        ))}
      </div>
      <div className="world-moon" aria-hidden="true" />
      <div className="world-mountain back" aria-hidden="true" />
      <div className="world-mountain front" aria-hidden="true" />
      <div className="world-foreground" aria-hidden="true" />
      <div className="world-content">
        <span className="eyebrow" style={{ color: "#f5e8d0" }}>A world to wander</span>
        <h2>A quiet place<br />between stories.</h2>
        <p>
          Explore the preview locations. Each point has a simple, keyboard-accessible
          alternative to spatial navigation.
        </p>
        <div className="poi-list" aria-label="World locations">
          {places.map((place) => (
            <button
              className="poi-button"
              key={place.id}
              type="button"
              aria-pressed={activeId === place.id}
              onClick={() => setActiveId(place.id)}
            >
              {place.label}
            </button>
          ))}
        </div>
        <div className="poi-detail" aria-live="polite">
          <strong>{activePlace.title}</strong>
          <span>{activePlace.description}</span>
        </div>
      </div>
    </section>
  );
}