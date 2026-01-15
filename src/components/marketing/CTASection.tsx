import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="cta-section">
      <div className="section-inner animate-on-scroll">
        <h2>
          READY TO TRADE<br />
          <span style={{ color: 'var(--accent-purple)' }}>SMARTER?</span>
        </h2>
        <p>
          Join traders who are already using AI to find better setups,
          test ideas faster, and stay ahead of the market.
        </p>
        <Link to="/chat" className="btn-primary">Start Trading Free →</Link>
      </div>
    </section>
  );
}
