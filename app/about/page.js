import Link from 'next/link';

export const metadata = {
  title: 'About',
  description:
    'Thirty years of watching how people actually behave. Technology since 1978. ATLV Solutions builds systems designed around how businesses and their customers really work.',
};

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>About ATLV Solutions</h1>
          <p>Thirty years of watching how people actually behave. Technology since 1978.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <p>
            Most technology fails small businesses for the same reason: it&rsquo;s built around how
            someone assumed people would use it, not how they actually do. A customer doesn&rsquo;t
            leave a voicemail. An owner doesn&rsquo;t log into a dashboard. A system that needs
            babysitting stops getting used by week three.
          </p>
          <p>
            I&rsquo;ve spent over thirty years in human behavior and behavioral science, served in
            the military, and worked in technology since 1978. That combination is the whole method.
            Behavioral science tells you what people will really do. Military service teaches you to
            build systems that hold up when nobody&rsquo;s watching. Three decades in technology
            means I&rsquo;ve seen enough waves to know which parts of this one are real.
          </p>

          <div className="triad">
            <div className="triad-item">
              <strong>People</strong>
              <span>Understand how they actually behave, not how the software assumes they will.</span>
            </div>
            <div className="triad-item">
              <strong>Ideas</strong>
              <span>Shape the solution around them, using the parts of this wave that hold up.</span>
            </div>
            <div className="triad-item">
              <strong>Progress</strong>
              <span>Build the thing that moves them forward, and make it run unattended.</span>
            </div>
          </div>

          <p style={{ marginTop: '34px' }}>
            <strong>People. Ideas. Progress.</strong> That&rsquo;s not a slogan &mdash; it&rsquo;s the
            order the work happens in. Understand the people first. Shape the idea around them. Build
            the thing that moves them forward.
          </p>

          <h2>How we work</h2>
          <p>
            We start with the bottleneck, not the technology. What takes the most time, what gets
            dropped, what the owner is doing at 9pm that a system should be doing at 9pm. Then we
            build the smallest thing that removes it, and we make it run without supervision.
          </p>
          <p>
            When an automation needs somewhere to live, we build that too. That&rsquo;s the
            difference between advice and a working system &mdash; and it&rsquo;s why our own
            products are the portfolio. Every one of them started as an automation problem and ended
            as software.
          </p>

          <h2>Where we are</h2>
          <p>
            ATLV Solutions LLC is based in Orlando, Florida, and works with businesses across Central
            Florida and beyond. Digital work isn&rsquo;t bounded by geography &mdash; but knowing a
            local market is.
          </p>

          <p style={{ marginTop: '40px' }}>
            <Link href="/#start" className="btn btn-primary">
              Tell us what&rsquo;s slowing you down
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
