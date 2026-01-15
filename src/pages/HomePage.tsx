import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/marketing/HeroSection';
import { PelicanDemo } from '../components/pelican-demo/PelicanDemo';
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

        {/* 3. Dashboard CTA */}
        <section className="dashboard-cta-section">
          <div className="section-inner">
            <div className="dashboard-cta animate-on-scroll">
              <div className="section-tag">Live Data</div>
              <h2 className="section-title">SEE WHERE THE MARKET IS SPEAKING</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '1rem auto 2rem' }}>
                Real-time market intelligence across US Stocks, Crypto, and Forex.
                Spot momentum, compression, and stress before the crowd.
              </p>
              <Link to="/dashboard" className="btn-primary">
                View Live Market Data →
              </Link>
            </div>
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
