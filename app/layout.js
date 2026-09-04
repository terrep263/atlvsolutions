import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://atlvsolutions.net'),
  title: {
    default: 'ATLV Solutions — AI and automation for small business',
    template: '%s · ATLV Solutions',
  },
  description:
    'ATLV Solutions builds AI and automation systems for local stores, vendors, and service businesses — and the software that delivers them.',
  icons: { icon: '/icon.svg' },
  openGraph: {
    title: 'ATLV Solutions — AI and automation for small business',
    description:
      'AI and automation for small business, built into software that actually runs it.',
    url: 'https://atlvsolutions.net',
    siteName: 'ATLV Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATLV Solutions — AI and automation for small business',
    description:
      'AI and automation for small business, built into software that actually runs it.',
  },
};

export const viewport = {
  themeColor: '#050B18',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
