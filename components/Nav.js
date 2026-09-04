import Link from 'next/link';
import { WORDMARK } from '../lib/brand';

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link href="/" className="nav-mark" aria-label="ATLV Solutions — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={WORDMARK} alt="ATLV Solutions" width="560" height="247" />
        </Link>
        <nav className="nav-links">
          <Link href="/#services" className="nav-hide">Services</Link>
          <Link href="/#work" className="nav-hide">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/#start" className="btn btn-primary" style={{ padding: '9px 18px', fontSize: '.94rem' }}>
            Start
          </Link>
        </nav>
      </div>
    </header>
  );
}
