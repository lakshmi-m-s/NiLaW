import { useEffect, useState } from "react";
import { Reveal } from "../components/Reveal";

/** Start of wedding day (local time): April 26, 2026 */
const WEDDING_DAY = new Date(2026, 3, 26, 0, 0, 0, 0).getTime();

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function getRemaining(): Parts | null {
  const diff = WEDDING_DAY - Date.now();
  if (diff <= 0) return null;
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function WeddingCountdown() {
  const [parts, setParts] = useState<Parts | null>(() => getRemaining());

  useEffect(() => {
    const tick = () => setParts(getRemaining());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      className="section-gradient-countdown border-y border-gold/10 px-4 py-12 sm:px-6 sm:py-14 md:px-12 md:py-16"
      aria-labelledby="countdown-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-sans text-[0.625rem] font-medium uppercase tracking-[0.38em] text-gold/90">
            April 26, 2026
          </p>
          <h2
            id="countdown-heading"
            className="mt-4 font-serif text-[1.5rem] font-normal leading-tight tracking-[0.02em] text-charcoal sm:mt-5 sm:text-[1.875rem] md:text-[2.125rem]"
          >
            Until we say&nbsp;
            <span className="italic text-gold">I do</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-pretty font-sans text-[0.8125rem] font-light leading-relaxed text-charcoal/60 sm:text-[0.875rem]">
            A little clock for the heart — each moment brings us closer.
          </p>

          <div className="reveal-panel relative mt-10 overflow-hidden sm:mt-12">
            <div
              className="pointer-events-none absolute -left-8 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-8 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl"
              aria-hidden
            />

            {parts === null ? (
              <p className="relative z-[1] py-6 font-serif text-lg italic text-charcoal/70 md:text-xl">
                This beautiful day has arrived.
              </p>
            ) : (
              <div
                className="relative z-[1] grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
                role="timer"
                aria-live="polite"
                aria-atomic="true"
              >
                <CountCell label="Days" value={parts.days} />
                <CountCell label="Hours" value={pad(parts.hours)} />
                <CountCell label="Minutes" value={pad(parts.minutes)} />
                <CountCell label="Seconds" value={pad(parts.seconds)} />
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CountCell({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-gold/20 bg-gradient-to-b from-pearl/90 to-[#f5f0e8]/95 px-2 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:py-5">
      <span className="font-display text-[clamp(1.75rem,6vw,2.75rem)] font-medium tabular-nums leading-none tracking-[0.02em] text-charcoal">
        {value}
      </span>
      <span className="mt-2 font-sans text-[0.5625rem] font-medium uppercase tracking-[0.28em] text-charcoal/45 sm:text-[0.625rem] sm:tracking-[0.32em]">
        {label}
      </span>
    </div>
  );
}
