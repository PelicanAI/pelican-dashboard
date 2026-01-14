import { usePromptRotation } from '../../hooks/usePromptRotation';
import { PromptDisplay } from './PromptDisplay';
import { ResponseStream } from './ResponseStream';
import { PromptQueue } from './PromptQueue';
import { CTASection } from './CTASection';

export function PelicanDemo() {
  const { currentPrompt, nextPrompts, timeUntilNext, progress } = usePromptRotation();

  return (
    <div className="space-y-6">
      {/* Section header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="badge-label">
            <span className="text-[var(--accent-purple)]">//</span> See Pelican in Action
          </span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--text-primary)] mb-3">
          AI-Powered Market Intelligence
        </h1>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
          Watch Pelican answer real trading questions in real-time. No fluff, just actionable insights.
        </p>
      </div>

      {/* Demo area */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <PromptDisplay prompt={currentPrompt} />
          <ResponseStream
            response={currentPrompt.response}
            promptId={currentPrompt.id}
          />
        </div>
        <div className="space-y-4">
          <PromptQueue
            nextPrompts={nextPrompts}
            timeUntilNext={timeUntilNext}
            progress={progress}
          />
          <CTASection />
        </div>
      </div>
    </div>
  );
}
