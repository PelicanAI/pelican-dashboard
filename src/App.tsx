import { Activity } from 'lucide-react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { PelicanDemo } from './components/pelican-demo/PelicanDemo';
import { PatternsSection } from './components/patterns/PatternsSection';
import { MarketStatsGrid } from './components/market-stats/MarketStatsGrid';
import { useTheme } from './hooks/useTheme';

function App() {
  // Initialize theme on mount
  useTheme();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col grid-bg">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        {/* Hero/Demo Section */}
        <section className="mb-16 md:mb-20">
          <PelicanDemo />
        </section>

        {/* Patterns in Play Section */}
        <section className="mb-16 md:mb-20">
          <PatternsSection />
        </section>

        {/* Market Stats Section */}
        <section>
          <div className="text-center mb-8">
            <span className="badge-label mb-4">
              <Activity className="w-3.5 h-3.5" />
              Live Market Pulse
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--text-primary)] mb-2">
              Real-Time Market Movers
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              Track the stocks traders are watching right now. Updated every 30 seconds.
            </p>
          </div>
          <MarketStatsGrid />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
