import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MarketStatsSection } from '../components/market-stats/MarketStatsSection';

export function DashboardPage() {
  return (
    <div className="marketing-page">
      <div className="grid-bg"></div>
      <Header />
      <main className="min-h-screen pt-24">
        <MarketStatsSection />
      </main>
      <Footer />
    </div>
  );
}
