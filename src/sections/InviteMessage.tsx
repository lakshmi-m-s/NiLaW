import { Reveal } from "../components/Reveal";

export function InviteMessage() {
  return (
    <section className="section-gradient-invite border-y border-gold/10 px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="invite-line-sparkle text-pretty font-sans text-[0.9375rem] leading-[1.85] tracking-[0.02em] sm:text-[1.0625rem] sm:tracking-[0.022em] md:text-lg md:leading-[1.9] md:tracking-[0.025em]">
            We warmly invite you to be part of our special day and the memories we&apos;ll cherish forever.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
