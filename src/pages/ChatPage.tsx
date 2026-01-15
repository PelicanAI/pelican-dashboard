import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export function ChatPage() {
  return (
    <div className="marketing-page">
      <div className="grid-bg"></div>
      <Header />

      <main>
        <section className="chat-coming-soon">
          <div className="section-inner">
            <div className="coming-soon-content">
              <div className="section-tag">Coming Soon</div>
              <h1 className="section-title">PELICAN CHAT</h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '500px', margin: '1.5rem auto', lineHeight: 1.7 }}>
                The AI trading assistant is launching soon. Join our beta to be first in line.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                <Link to="/" className="btn-secondary">← Back to Home</Link>
                <a href="mailto:hello@pelicantrading.ai" className="btn-primary">
                  Request Beta Access
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
