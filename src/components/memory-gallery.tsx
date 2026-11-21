"use client";

import { useMemo, useState } from "react";
import {
  filterMemoryPreviews,
  memoryCategories,
  memoryPreviews,
  type MemoryCategory,
} from "@/lib/experience";

export function MemoryGallery() {
  const [category, setCategory] = useState<MemoryCategory>("All");
  const visibleItems = useMemo(
    () => filterMemoryPreviews(memoryPreviews, category),
    [category],
  );

  return (
    <>
      <div className="memory-toolbar" aria-label="Filter memory placeholders">
        {memoryCategories.map((item) => (
          <button
            className="filter-button"
            type="button"
            key={item}
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visibleItems.length} placeholder cards in {category}.
      </p>
      <div className="memory-grid">
        {visibleItems.map((item) => (
          <article className="memory-card" key={item.id}>
            <div className={`memory-art ${item.art}`} aria-hidden="true" />
            <div className="memory-card-body">
              <span className="label-pill"><span className="label-dot" /> Placeholder</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="memory-meta">
                <span>{item.category}</span>
                <span>Content pending</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}