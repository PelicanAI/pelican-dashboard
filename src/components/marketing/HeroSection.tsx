import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-tag">Beta Access</div>
          <h1>
            THE AI PLATFORM<br />
            THAT <span className="highlight">THINKS</span><br />
            LIKE YOU TRADE
          </h1>
          <p className="hero-subtitle">
            Institutional-grade market intelligence through natural conversation.
            Backtest strategies, analyze patterns, and execute with precision—all in one interface.
          </p>
          <div className="hero-cta">
            <Link to="/chat" className="btn-primary">Start Trading →</Link>
            <a href="#features" className="btn-secondary">See Features</a>
          </div>
          <div className="stats-bar">
            <div className="stat">
              <div className="stat-value">10K+</div>
              <div className="stat-label">Tickers Covered</div>
            </div>
            <div className="stat">
              <div className="stat-value">Plain English</div>
              <div className="stat-label">No Code Required</div>
            </div>
            <div className="stat">
              <div className="stat-value">1-Click</div>
              <div className="stat-label">Shareable Reports</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/logo.svg" alt="Pelican Logo" className="hero-logo-large" />
        </div>
      </div>
    </section>
  );
}
