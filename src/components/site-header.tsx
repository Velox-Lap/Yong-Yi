import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/letter", label: "The Letter" },
  { href: "/memories", label: "Memory Museum" },
  { href: "/journey", label: "Our Journey" },
  { href: "/world", label: "Fantasy World" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="YONG-YI home">
          <span className="brand-mark" aria-hidden="true">Y</span>
          <span className="brand-copy">
            <span className="brand-name">YONG-YI</span>
            <span className="brand-caption">A little world, kept with care</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <Link className="creator-link" href="/creator">Creator Studio</Link>
        </div>
      </div>
    </header>
  );
}