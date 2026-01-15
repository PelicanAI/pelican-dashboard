import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { PelicanDemo } from './components/pelican-demo/PelicanDemo';
import { MarketStatsSection } from './components/market-stats/MarketStatsSection';
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

        {/* Market Stats Section */}
        <MarketStatsSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
