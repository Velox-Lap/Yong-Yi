import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creator Studio",
  robots: { index: false, follow: false },
};

export default function CreatorPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <span className="eyebrow">For the project owner</span>
        <h1 className="page-title">Creator Studio</h1>
        <p className="page-lead">
          A future workspace for writing, organizing, previewing, and publishing owner-approved
          content.
        </p>
      </section>
      <section className="content-panel placeholder-panel" style={{ marginBottom: 64 }}>
        <div>
          <div className="placeholder-symbol" aria-hidden="true">⌘</div>
          <span className="label-pill"><span className="label-dot" /> Not connected</span>
          <h2>Secure authoring is not ready yet.</h2>
          <p>
            Authentication, viewer permissions, private database tables, and private media
            storage have not been configured. This is an informational preview, not a protected
            admin interface. Do not enter personal content here.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link className="button-secondary" href="/">Return home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}