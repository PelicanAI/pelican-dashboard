export function ClosingCTA() {
  return (
    <div className="relative rounded-xl overflow-hidden border border-[var(--border-accent)] p-12 text-center mt-16">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-purple-dim)] to-transparent" />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-2">
          This dashboard doesn't tell you what to trade.
        </p>
        <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-2">
          It shows you where the market is speaking.
        </p>
        <p className="text-[var(--text-primary)] text-xl font-medium mb-8">
          Pelican helps you understand what matters.
        </p>
        
        <a href="/chat" className="btn-primary text-lg px-8 py-4">
          Start Trading →
        </a>
      </div>
    </div>
  );
}

