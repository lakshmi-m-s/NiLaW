import { Reveal } from "../components/Reveal";

export function Ceremony() {
  return (
    <section className="section-gradient-ceremony px-4 pt-16 pb-10 sm:px-6 sm:pt-20 sm:pb-12 md:px-12 md:pt-36 md:pb-20">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal className="reveal-panel">
          <h2 className="font-serif text-[1.625rem] font-normal leading-tight tracking-[0.02em] text-charcoal sm:text-[2.125rem] md:text-[2.5rem]">
            Thalikett
          </h2>
          <p className="mt-6 font-sans text-[0.9375rem] font-light leading-[1.75] text-charcoal/[0.82] sm:mt-10 sm:text-[1.0625rem] md:text-lg md:leading-[1.8]">
            Sree Krishna Temple Guruvayur
          </p>
          <p className="mt-4 font-sans text-[0.9375rem] font-light tracking-[0.04em] text-charcoal/58 sm:mt-5 sm:text-base">
            Muhurtham · 6:00 AM – 7:00 AM
          </p>
          <div className="relative mx-auto mt-6 w-full max-w-52 overflow-hidden rounded-lg border border-gold/20 bg-pearl/60 shadow-[0_8px_32px_-12px_rgba(26,22,18,0.12)] sm:mt-8 sm:max-w-60 md:max-w-64">
            <div className="aspect-[4/3] w-full">
              <img
                src="/temple.jpg"
                alt="Sree Krishna Temple, Guruvayur"
                className="h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
