import { useEffect } from 'react';

const features = [
  {
    icon: '💬',
    title: 'JUST ASK',
    description: "Type questions like you'd ask a trading buddy. 'What's moving in semis today?' 'Show me SPY's worst drawdowns.' No syntax, no learning curve.",
  },
  {
    icon: '🧪',
    title: 'TEST IDEAS IN SECONDS',
    description: 'Describe any strategy in plain English and see if it actually works. Win rates, drawdowns, Sharpe ratios—without writing a single line of code.',
  },
  {
    icon: '🧠',
    title: 'KNOWS YOUR STYLE',
    description: 'Pelican remembers your positions, your watchlist, and how you like to trade. Every conversation picks up where you left off.',
  },
  {
    icon: '🔍',
    title: "FINDS WHAT YOU'D MISS",
    description: 'Surface unusual volume, divergences, and setups across thousands of tickers. Let AI do the scanning while you focus on decisions.',
  },
  {
    icon: '📤',
    title: 'SHARE & LOOK PRO',
    description: 'Generate branded tables and analysis ready for Twitter, Discord, or clients. One click from insight to shareable content.',
  },
  {
    icon: '🚫',
    title: 'KILL THE TAB CHAOS',
    description: 'Stop bouncing between TradingView, spreadsheets, and ChatGPT. One interface for research, analysis, and idea generation.',
  },
];

export function FeaturesSection() {
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

    document.querySelectorAll('.feature-card').forEach((el) => {
      observer.observe(el);
    });

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
      (card as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features">
      <div className="section-inner">
        <div className="section-header animate-on-scroll">
          <div className="section-tag">Capabilities</div>
          <h2 className="section-title">WHAT PELICAN DOES</h2>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card bracket-box">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
