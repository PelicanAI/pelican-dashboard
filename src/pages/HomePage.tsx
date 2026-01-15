import { useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/marketing/HeroSection';
import { PelicanDemo } from '../components/pelican-demo/PelicanDemo';
import { MarketStatsSection } from '../components/market-stats/MarketStatsSection';
import { CTASection } from '../components/marketing/CTASection';
import { PricingSection } from '../components/marketing/PricingSection';

export function HomePage() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

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
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Pelican Demo */}
        <section className="demo-section">
          <div className="section-inner">
            <PelicanDemo />
          </div>
        </section>

        {/* 3. Market Stats */}
        <section className="market-section">
          <div className="section-inner">
            <MarketStatsSection />
          </div>
        </section>

        {/* 4. CTA Section */}
        <CTASection />

        {/* 5. Pricing Section */}
        <PricingSection simplified />
      </main>

      <Footer />
    </div>
  );
}
