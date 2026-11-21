import type { Metadata } from "next";

export const metadata: Metadata = { title: "The Letter" };

export default function LetterPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <span className="eyebrow">The first chapter</span>
        <h1 className="page-title">A letter, written with intention.</h1>
        <p className="page-lead">
          This page is reserved for the creator&apos;s own words. The letter will appear here
          only after authentic content has been written, reviewed, and published.
        </p>
      </section>
      <section className="content-panel placeholder-panel">
        <div>
          <div className="placeholder-symbol" aria-hidden="true">✉</div>
          <span className="label-pill"><span className="label-dot" /> Owner content required</span>
          <h2>Your letter begins here.</h2>
          <p>
            [OWNER CONTENT REQUIRED] — no personal message has been generated or inserted.
            The secure authoring and publication workflow will be implemented after authentication
            and private content storage are approved.
          </p>
        </div>
      </section>
      <div style={{ height: 64 }} />
    </div>
  );
}