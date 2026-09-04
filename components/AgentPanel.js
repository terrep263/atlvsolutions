'use client';

import { useState } from 'react';

const AGENT_URL = process.env.NEXT_PUBLIC_AGENT_URL || '';

export default function AgentPanel() {
  const [open, setOpen] = useState(false);

  return (
    <div className="agent-shell">
      {!open ? (
        <div className="agent-gate">
          <h2>Tell us what&rsquo;s slowing you down</h2>
          <p>
            Start a conversation the way your own customer would. Our agent will ask what your
            business does, where the time goes, and what you&rsquo;ve already tried &mdash; then hand
            it to us with enough detail to give you a straight answer.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '.94rem' }}>
            It only knows what we&rsquo;ve told it. It doesn&rsquo;t guess.
          </p>
          <button className="btn btn-primary" onClick={() => setOpen(true)} type="button">
            Start the conversation
          </button>
        </div>
      ) : AGENT_URL ? (
        <iframe
          className="agent-frame"
          src={AGENT_URL}
          title="ATLV Solutions intake agent"
          allow="clipboard-write"
        />
      ) : (
        <div className="agent-fallback">
          The agent isn&rsquo;t connected yet. In the meantime, email{' '}
          <a href="mailto:hello@atlvsolutions.net">hello@atlvsolutions.net</a> and tell us what
          you&rsquo;re trying to fix.
        </div>
      )}
    </div>
  );
}
