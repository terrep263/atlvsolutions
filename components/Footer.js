import Link from 'next/link';
import { WORDMARK } from '../lib/brand';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={WORDMARK} alt="ATLV Solutions" width="560" height="247" />
          <div className="footer-meta">
            ATLV Solutions LLC · Orlando, Florida
            <br />
            <a href="mailto:hello@atlvsolutions.net">hello@atlvsolutions.net</a>
          </div>
        </div>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
      <div className="wrap footer-meta" style={{ marginTop: '30px' }}>
        © {new Date().getFullYear()} ATLV Solutions LLC. All rights reserved.
      </div>
    </footer>
  );
}
