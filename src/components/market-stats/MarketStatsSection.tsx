import { StockWidgets } from './StockWidgets';
import { CryptoWidgets } from './CryptoWidgets';
import { ForexWidgets } from './ForexWidgets';
import { ClosingCTA } from './ClosingCTA';

export function MarketStatsSection() {
  return (
    <section>
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="badge-label">
          <span className="text-[var(--accent-purple)]">//</span> Live Market Intelligence
        </span>
        <h2 className="font-display text-4xl mt-4">
          Where the Market Is Speaking
        </h2>
        <p className="text-[var(--text-secondary)] mt-2 max-w-2xl mx-auto">
          Real-time conditions across stocks, crypto, and forex. Updated every 30 seconds.
        </p>
      </div>

      {/* US Stocks */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <img 
            src="/icons/us-stocks.png" 
            alt="US Stocks" 
            className="h-8 w-auto icon-glow"
            onError={(e) => {
              console.error('Failed to load US Stocks icon from /icons/us-stocks.png');
              // Fallback to emoji
              e.currentTarget.style.display = 'none';
              const fallback = document.createElement('span');
              fallback.textContent = '📊';
              fallback.className = 'text-xl';
              e.currentTarget.parentNode?.insertBefore(fallback, e.currentTarget);
            }}
          />
          <h3 className="font-display text-2xl">US STOCKS</h3>
        </div>
        <StockWidgets />
      </div>

      {/* Crypto */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <img 
            src="/icons/crypto.png" 
            alt="Crypto" 
            className="h-8 w-auto icon-glow"
            onError={(e) => {
              console.error('Failed to load Crypto icon from /icons/crypto.png');
              // Fallback to emoji
              e.currentTarget.style.display = 'none';
              const fallback = document.createElement('span');
              fallback.textContent = '🪙';
              fallback.className = 'text-xl';
              e.currentTarget.parentNode?.insertBefore(fallback, e.currentTarget);
            }}
          />
          <h3 className="font-display text-2xl">CRYPTO</h3>
        </div>
        <CryptoWidgets />
      </div>

      {/* Forex */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <img 
            src="/icons/forex.png" 
            alt="Forex" 
            className="h-8 w-auto icon-glow"
            onError={(e) => {
              console.error('Failed to load Forex icon from /icons/forex.png');
              // Fallback to emoji
              e.currentTarget.style.display = 'none';
              const fallback = document.createElement('span');
              fallback.textContent = '🌍';
              fallback.className = 'text-xl';
              e.currentTarget.parentNode?.insertBefore(fallback, e.currentTarget);
            }}
          />
          <h3 className="font-display text-2xl">FOREX</h3>
        </div>
        <ForexWidgets />
      </div>

      {/* Closing CTA */}
      <ClosingCTA />
    </section>
  );
}

