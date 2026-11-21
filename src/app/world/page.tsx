import type { Metadata } from "next";
import { WorldExplorer } from "@/components/world-explorer";

export const metadata: Metadata = { title: "Fantasy World" };

export default function WorldPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <span className="eyebrow">The personal fantasy world</span>
        <h1 className="page-title">A quiet place between stories.</h1>
        <p className="page-lead">
          The world is an optional layer of atmosphere and discovery. The location controls below
          are keyboard accessible, and the content remains available without WebGL.
        </p>
      </section>
      <section style={{ marginBottom: 64 }}>
        <WorldExplorer />
        <p className="hero-note">
          Interactive 2D preview · 3D scene engine not yet enabled · No personal content embedded
        </p>
      </section>
    </div>
  );
}