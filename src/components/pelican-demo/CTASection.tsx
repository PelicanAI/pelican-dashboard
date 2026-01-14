import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Mail } from 'lucide-react';

export function CTASection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 800));

    console.log('Email signup:', {
      email,
      timestamp: new Date(),
      source: 'dashboard-cta',
    });

    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="relative rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border-accent)] p-6">
      {/* Gradient background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-purple-dim)] to-transparent" />

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            className="relative z-10"
          >
            <h3 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-2">
              Ask Pelican Anything
            </h3>
            <p className="text-[var(--text-secondary)] mb-5 text-sm">
              Get instant answers to your market questions. Join the waitlist for early access.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input-field pl-10"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full group"
              >
                {isLoading ? (
                  'Joining...'
                ) : (
                  <>
                    Get Early Access
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center py-4"
          >
            <CheckCircle className="w-12 h-12 text-[var(--color-positive)] mx-auto mb-3" />
            <h3 className="font-display text-2xl text-[var(--text-primary)] mb-2">
              You're on the list!
            </h3>
            <p className="text-[var(--text-secondary)] text-sm">
              We'll notify you when Pelican is ready for you.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
