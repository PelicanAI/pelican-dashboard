import { useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { FeaturesSection } from '../components/marketing/FeaturesSection';
import { CTASection } from '../components/marketing/CTASection';

export function FeaturesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="marketing-page">
      <div className="grid-bg"></div>
      <Header />

      <main>
        <section className="page-header">
          <div className="section-inner">
            <div className="section-header animate-on-scroll">
              <div className="section-tag">Features</div>
              <h1 className="section-title">EVERYTHING PELICAN CAN DO</h1>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '1.1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
                One interface for all your trading research. No code required.
              </p>
            </div>
          </div>
        </section>

        <FeaturesSection />

        {/* Additional Features Detail */}
        <section className="what-section">
          <div className="section-inner">
            <div className="what-content">
              <div className="what-text animate-on-scroll">
                <h2>TALK TO YOUR DATA</h2>
                <p>
                  Pelican understands plain English queries about any ticker, any timeframe.
                  Ask complex questions and get instant, actionable answers.
                </p>
                <p>
                  Whether you're looking for momentum plays, scanning for setups,
                  or backtesting a new strategy, just describe what you want.
                </p>
              </div>
              <div className="what-platform bracket-box animate-on-scroll">
                <div className="platform-header">
                  <div className="platform-dot red"></div>
                  <div className="platform-dot yellow"></div>
                  <div className="platform-dot green"></div>
                </div>
                <div className="platform-line">
                  <span className="platform-prompt">pelican&gt;</span>{' '}
                  <span className="platform-command">backtest buying SPY dips over 2%</span>
                </div>
                <div className="platform-line">
                  <span className="platform-output">Analyzing 156 instances (2020-2024)...</span>
                </div>
                <div className="platform-line">
                  <span className="platform-success">✓</span>{' '}
                  <span className="platform-output">Win Rate:</span>{' '}
                  <span className="platform-value">67.4%</span>
                </div>
                <div className="platform-line">
                  <span className="platform-success">✓</span>{' '}
                  <span className="platform-output">Sharpe Ratio:</span>{' '}
                  <span className="platform-value">1.84</span>
                </div>
                <div className="platform-line">
                  <span className="platform-success">✓</span>{' '}
                  <span className="platform-output">Max Drawdown:</span>{' '}
                  <span className="platform-value">-8.2%</span>
                </div>
                <div className="platform-line">
                  <span className="platform-prompt">pelican&gt;</span>{' '}
                  <span className="platform-command">Generating report<span className="cursor-blink">_</span></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
