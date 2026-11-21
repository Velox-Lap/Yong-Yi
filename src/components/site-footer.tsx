import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">YONG-YI</div>
          <div className="footer-note">A personal digital world, built with intention.</div>
        </div>
        <div className="footer-note">
          Preview experience · Illustrative placeholders only
          <br />
          <Link href="/creator">Creator Studio</Link>
        </div>
      </div>
    </footer>
  );
}