import { Reveal } from "../components/Reveal";

export function Footer() {
  return (
    <footer className="section-gradient-footer border-t border-gold/15 px-4 py-14 pb-[max(3.5rem,env(safe-area-inset-bottom))] text-center sm:px-8 sm:py-24 md:py-28">
      <Reveal>
        <p className="font-sans text-[0.8125rem] font-light uppercase tracking-[0.22em] text-charcoal/50 sm:text-[0.875rem] sm:tracking-[0.26em]">
          Sharing our happiness with
        </p>
        <p className="mt-4 text-balance font-serif text-[1.1875rem] font-normal tracking-[0.03em] text-charcoal sm:mt-5 sm:text-xl md:text-[1.375rem]">
          Parvathi M S, Vivek Vijay
        </p>
        <div className="mx-auto mt-9 max-w-[min(100%,21rem)] sm:mt-11">
          <p className="text-pretty font-sans text-sm font-light leading-[1.75] text-charcoal/[0.62] sm:text-[0.9375rem]">
            Sending little paw-some love from
          </p>
          <p className="mt-2 font-sans text-sm font-light leading-relaxed text-charcoal/[0.62] sm:mt-2.5 sm:text-[0.9375rem]">
            Enzo 🐾 &amp; Tony 🐾
          </p>
        </div>
        <p className="mt-11 font-sans text-[0.625rem] tracking-[0.32em] text-charcoal/32 sm:mt-14 sm:text-[0.6875rem] sm:tracking-[0.36em]">
          #NiLaW
        </p>
      </Reveal>
    </footer>
  );
}
