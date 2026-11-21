import type { Metadata } from "next";
import { MemoryGallery } from "@/components/memory-gallery";

export const metadata: Metadata = { title: "Memory Museum" };

export default function MemoriesPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <span className="eyebrow">The memory museum</span>
        <h1 className="page-title">Small things, given a place.</h1>
        <p className="page-lead">
          A curated gallery for owner-provided memories. Filter the preview cards by type;
          each one is explicitly illustrative and contains no real relationship history.
        </p>
      </section>
      <section className="content-panel" style={{ marginBottom: 64 }}>
        <div className="section-heading">
          <div>
            <span className="label-pill"><span className="label-dot" /> Demo content only</span>
            <h2 className="section-title">The collection</h2>
          </div>
          <p className="section-subtitle">
            Authentic media and descriptions will be added only through the approved private
            Creator Studio workflow.
          </p>
        </div>
        <MemoryGallery />
      </section>
    </div>
  );
}