import Link from 'next/link';
import AgentPanel from '../components/AgentPanel';

const SERVICES = [
  {
    title: 'AI agents that handle customer conversations',
    body: 'Answer inbound around the clock, qualify the request, and hand you something you can act on instead of a message to return.',
    tag: 'Proven in ServiceWorxx',
  },
  {
    title: 'Automations that connect what you already pay for',
    body: 'The tools are already bought. They just don’t talk to each other. We make the handoffs happen without anyone re-typing anything.',
    tag: 'Ongoing work',
  },
  {
    title: 'Custom apps and platforms',
    body: 'When the workflow doesn’t fit off-the-shelf software, we build the software. Designed around how your business actually runs.',
    tag: 'Proven in Shop My Neighborhood',
  },
  {
    title: 'White-label and multi-tenant systems',
    body: 'One platform, many operators, each under their own brand. Built to be run by people who did not build it.',
    tag: 'Proven in SnapWorxx Pro',
  },
];

const WORK = [
  {
    name: 'ServiceWorxx',
    url: 'serviceworxx.com',
    href: 'https://serviceworxx.com',
    kind: 'AI agent · live',
    body: 'An AI agent for home-services businesses. It answers inbound around the clock, works out what the job actually is, and texts the owner a qualified job — not a message. It only knows what the owner tells it. It doesn’t guess.',
  },
  {
    name: 'Shop My Neighborhood',
    url: 'shopmyneighborhood.com',
    href: 'https://shopmyneighborhood.com',
    kind: 'Marketplace platform · live',
    body: 'Real local businesses, curated by county. Thousands of verified businesses across Lake and Orange counties, with deals and vouchers from local merchants — and an installable app vendors use to run their own listings.',
  },
  {
    name: 'SnapWorxx',
    url: 'snapworxx.com',
    href: 'https://snapworxx.com',
    kind: 'Multi-tenant software · live',
    body: 'QR-based photo sharing for events. Guests scan, shoot, and everything lands in one shared gallery. SnapWorxx Pro runs the same platform white-label, so other operators put their own brand on it.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-in">
          <span className="eyebrow">People · Ideas · Progress</span>
          <h1>
            AI and automation for small business &mdash; built into software that actually runs it.
          </h1>
          <p className="lede">
            ATLV Solutions builds AI and automation systems for local stores, vendors, and service
            businesses. When the automation needs a place to live, we build that too &mdash; the app,
            the platform, the system behind it.
          </p>
          <div className="hero-actions">
            <Link href="#start" className="btn btn-primary">
              Tell us what&rsquo;s slowing you down
            </Link>
            <Link href="#work" className="btn btn-ghost">
              See what we&rsquo;ve built
            </Link>
          </div>
          <p className="pill-line">ATLV Solutions LLC · Orlando, Florida</p>
        </div>
      </section>

      <section className="strip section-tight">
        <div className="wrap">
          <p className="strip-quote">
            The automation is the value. <span>The app is how it gets delivered.</span>
          </p>
        </div>
      </section>

      <section className="section" id="services">
        <div className="wrap">
          <div className="section-head">
            <h2>What we do</h2>
            <p>
              Small businesses run on the owner&rsquo;s time. Every one of these gives some of it
              back.
            </p>
          </div>
          <div className="grid">
            {SERVICES.map((s) => (
              <div className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <span className="card-tag">{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule" />

      <section className="section" id="work">
        <div className="wrap">
          <div className="section-head">
            <h2>What we&rsquo;ve built</h2>
            <p>
              All live, all under our own name &mdash; not client work we can&rsquo;t talk about.
            </p>
          </div>
          <div className="grid">
            {WORK.map((w) => (
              <div className="proof-card" key={w.name}>
                <div className="proof-name">
                  <h3>{w.name}</h3>
                  <a className="proof-url" href={w.href} target="_blank" rel="noopener noreferrer">
                    {w.url}
                  </a>
                </div>
                <p>{w.body}</p>
                <span className="proof-kind">{w.kind}</span>
              </div>
            ))}
          </div>
          <p className="proof-note">
            Every one of these started as an automation problem and ended as software. That&rsquo;s
            the pattern.
          </p>
        </div>
      </section>

      <hr className="rule" />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>What we take on</h2>
            <p>Knowing what we don&rsquo;t do is what keeps the rest of it good.</p>
          </div>
          <div className="scope">
            <div className="scope-col">
              <h3>In scope</h3>
              <ul>
                <li>AI agents and assistants</li>
                <li>Automation and integration between existing tools</li>
                <li>Custom app, platform, and software development</li>
                <li>The infrastructure underneath &mdash; hosting, data, integrations</li>
              </ul>
            </div>
            <div className="scope-col out">
              <h3>Not our lane</h3>
              <ul>
                <li>Marketing, ads, and social media management</li>
                <li>Branding and graphic design as standalone work</li>
                <li>General IT support &mdash; networks, hardware, break-fix</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="agent section" id="start">
        <div className="wrap">
          <AgentPanel />
        </div>
      </section>
    </>
  );
}
