import { Link } from 'react-router-dom';

const creditTypes = [
  { name: 'Conversation', amount: '2', example: 'Chat, mentoring, quick questions' },
  { name: 'Basic Analysis', amount: '25', example: 'RSI, MACD, comparisons' },
  { name: 'Event Study', amount: '75', example: 'Historical pattern analysis' },
  { name: 'Deep Analysis', amount: '200', example: 'Multi-day tick, backtests' },
];

const pricingTiers = [
  {
    name: 'STARTER',
    for: 'Exploration & Learning',
    price: '$29',
    period: '/mo',
    credits: '1,000',
    creditsLabel: 'Credits / Month',
    effective: '~$0.029 per credit',
    features: [
      'Full AI assistant access',
      'Live data on 10,000+ tickers',
      'Trading education & coaching',
      'Basic technical analysis',
    ],
    buttonText: 'Get Started',
    buttonStyle: 'btn-secondary',
    featured: false,
  },
  {
    name: 'PRO',
    for: 'Active Traders',
    price: '$99',
    period: '/mo',
    credits: '3,500',
    creditsLabel: 'Credits / Month',
    effective: '~$0.028 per credit',
    features: [
      'Everything in Starter',
      'Plain-English backtesting',
      'Event studies & correlation',
      'One-click shareable reports',
      'Remembers your trading context',
    ],
    buttonText: 'Start Pro',
    buttonStyle: 'btn-primary',
    featured: true,
    badge: 'MOST POPULAR',
  },
  {
    name: 'POWER',
    for: 'Heavy & Professional Users',
    price: '$249',
    period: '/mo',
    credits: '10,000',
    creditsLabel: 'Credits / Month',
    effective: '~$0.025 per credit',
    features: [
      'Everything in Pro',
      'Multi-day tick analysis',
      'Institutional flow detection',
      'Extended backtest periods',
      'Priority support',
    ],
    buttonText: 'Go Power',
    buttonStyle: 'btn-secondary',
    featured: false,
  },
];

const marketComparison = [
  { name: 'Bloomberg', price: '~$24,000' },
  { name: 'Refinitiv Eikon', price: '~$22,000' },
  { name: 'FactSet', price: '~$12,000' },
  { name: 'Pelican', price: '$348 – $2,988', isPelican: true },
];

interface PricingSectionProps {
  simplified?: boolean;
}

export function PricingSection({ simplified = false }: PricingSectionProps) {
  return (
    <section id="pricing" className="pricing-section">
      <div className="section-inner">
        <div className="section-header animate-on-scroll">
          <div className="section-tag">Pricing</div>
          <h2 className="section-title">SIMPLE, CREDIT-BASED PRICING</h2>
        </div>

        {/* Credits Explainer */}
        <div className="credits-explainer animate-on-scroll">
          <h3>How Credits Work</h3>
          <p>
            Credits represent analytical workload. Simple queries cost fewer credits,
            complex analyses cost more. Credits reset monthly and do not roll over.
          </p>
          <div className="credit-types-grid">
            {creditTypes.map((type) => (
              <div key={type.name} className="credit-type bracket-box">
                <div className="credit-type-name">{type.name}</div>
                <div className="credit-type-amount">
                  {type.amount} <span>credits</span>
                </div>
                <div className="credit-type-example">{type.example}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="pricing-tiers">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`pricing-card bracket-box animate-on-scroll ${tier.featured ? 'featured' : ''}`}
            >
              {tier.badge && <div className="pricing-badge">{tier.badge}</div>}
              <div className="pricing-tier-name">{tier.name}</div>
              <div className="pricing-for">{tier.for}</div>
              <div className="pricing-amount">
                {tier.price}<span>{tier.period}</span>
              </div>
              <div className="pricing-period">Cancel anytime</div>
              <div className="pricing-credits">
                <div className="pricing-credits-amount">{tier.credits}</div>
                <div className="pricing-credits-label">{tier.creditsLabel}</div>
              </div>
              <div className="pricing-effective">{tier.effective}</div>
              <div className="pricing-features">
                {tier.features.map((feature, index) => (
                  <div key={index} className="pricing-feature">
                    <span className="pricing-check">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
              <Link
                to="/chat"
                className={tier.buttonStyle}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {tier.buttonText}
              </Link>
            </div>
          ))}
        </div>

        {/* Market Comparison - only show if not simplified */}
        {!simplified && (
          <div className="market-comparison animate-on-scroll">
            <h3>VS. INSTITUTIONAL TERMINALS</h3>
            <p>Institutional-grade reasoning at a fraction of the cost</p>
            <div className="market-grid">
              {marketComparison.map((item) => (
                <div
                  key={item.name}
                  className={`market-item ${item.isPelican ? 'pelican-item' : ''}`}
                >
                  <div className="market-item-name">{item.name}</div>
                  <div className="market-item-price">{item.price}</div>
                  <div className="market-item-annual">/year</div>
                </div>
              ))}
            </div>
            <div className="savings-badge">~99% CHEAPER THAN INSTITUTIONAL TERMINALS</div>
          </div>
        )}
      </div>
    </section>
  );
}
