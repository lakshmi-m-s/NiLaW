export function Hero() {
  return (
    <header className="relative isolate flex min-h-[100svh] min-h-[100dvh] w-full min-w-0 flex-col items-center justify-center overflow-x-hidden text-center">
      {/* Single image fills the hero — no letterboxing or extra vertical space */}
      <img
        src="/hero.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        decoding="async"
        fetchPriority="high"
      />

      {/* Soft vignette — text legibility */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 95% 75% at 50% 42%, rgba(20, 17, 14, 0.05) 0%, transparent 52%),
            radial-gradient(ellipse 140% 100% at 50% 100%, rgba(18, 15, 12, 0.32) 0%, transparent 48%),
            radial-gradient(ellipse 120% 60% at 50% 0%, rgba(18, 15, 12, 0.16) 0%, transparent 42%),
            linear-gradient(to bottom, rgba(16, 14, 11, 0.12) 0%, rgba(16, 14, 11, 0.04) 42%, rgba(14, 12, 10, 0.22) 100%)
          `,
        }}
        aria-hidden
      />

      <div className="relative z-10 flex w-full max-w-[min(100%,22rem)] translate-y-[6cm] flex-col items-center px-4 pb-[max(4rem,calc(env(safe-area-inset-bottom)+1.5rem))] pt-[max(1.25rem,env(safe-area-inset-top))] opacity-0 animate-hero-in sm:max-w-[min(100%,26rem)] sm:px-6 sm:pb-[max(4.5rem,calc(env(safe-area-inset-bottom)+1.75rem))] sm:pt-[max(1.5rem,env(safe-area-inset-top))] sm:px-8 md:max-w-3xl">
        <p className="-translate-y-[calc(0.5rem+2.45cm)] text-balance font-display text-[clamp(2rem,8.5vw,4.85rem)] font-medium leading-[1.06] tracking-[0.03em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35),0_1px_2px_rgba(0,0,0,0.25)] sm:-translate-y-[calc(1.25rem+3cm)] sm:tracking-[0.04em] md:-translate-y-[calc(1.75rem+3cm)]">
          Lakshmi <span className="font-normal italic text-white/95">&</span>{" "}
          Nikhil
        </p>
        <div className="mt-9 flex w-full translate-y-[3cm] flex-col items-center gap-7 sm:mt-14 sm:gap-10">
          <p className="max-w-[min(100%,20rem)] text-balance font-display text-[clamp(1rem,3.85vw,1.75rem)] font-bold uppercase tracking-[0.2em] text-[#f2d66a] [text-shadow:0_2px_10px_rgba(0,0,0,0.78),0_1px_3px_rgba(0,0,0,0.65),0_0_36px_rgba(232,197,71,0.55),0_0_64px_rgba(232,197,71,0.28)] sm:max-w-none sm:tracking-[0.28em] md:tracking-[0.32em]">
            Save the Date
          </p>
          <div className="flex w-full flex-col items-center gap-3 sm:gap-4">
            <p className="font-sans text-[clamp(0.9375rem,3.05vw,1.3125rem)] font-semibold tracking-[0.16em] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.45),0_4px_20px_rgba(0,0,0,0.35),0_10px_36px_rgba(0,0,0,0.22)] sm:tracking-[0.2em] md:tracking-[0.24em]">
              April 26, 2026
            </p>
            <p className="font-sans text-[clamp(0.75rem,2.35vw,0.9375rem)] font-semibold tracking-[0.2em] text-white/92 [text-shadow:0_1px_3px_rgba(0,0,0,0.5),0_4px_18px_rgba(0,0,0,0.28)] sm:tracking-[0.24em] md:text-[1rem] md:tracking-[0.28em]">
              #NiLaW
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-1/2 z-10 flex -translate-x-1/2 translate-y-[0.25cm] flex-col items-center gap-2 text-white/70 sm:bottom-10 sm:gap-2.5"
        aria-hidden
      >
        <span className="text-[9px] font-light uppercase tracking-[0.48em] text-white/75 sm:text-[10px] sm:tracking-[0.52em]">
          Scroll
        </span>
        <span className="relative flex h-9 w-5 items-start justify-center sm:h-10">
          <span className="absolute top-0 h-full w-px bg-gradient-to-b from-white/55 via-white/35 to-transparent" />
          <span className="absolute top-1 h-2 w-2 rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.45)] animate-scroll-dot" />
        </span>
      </div>
    </header>
  );
}
