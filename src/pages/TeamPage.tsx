import { useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TeamSection } from '../components/marketing/TeamSection';
import { CTASection } from '../components/marketing/CTASection';

export function TeamPage() {
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
              <div className="section-tag">About</div>
              <h1 className="section-title">THE TEAM BEHIND PELICAN</h1>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '1.1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
                Built by traders, for traders. We've been where you are.
              </p>
            </div>
          </div>
        </section>

        <TeamSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
