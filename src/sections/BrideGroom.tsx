import { Reveal } from "../components/Reveal";

export function BrideGroom() {
  return (
    <section className="section-gradient-bride-groom border-y border-gold/10 px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-40">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-12 sm:gap-[4.5rem] md:grid-cols-2 md:gap-16 lg:gap-24">
          <Reveal delayMs={80}>
            <div className="mx-auto max-w-md border-t border-gold/20 pt-9 text-center md:mx-0 md:max-w-none md:pt-14 md:text-left">
              <p className="font-sans text-[0.625rem] font-medium uppercase tracking-[0.32em] text-gold/95">
                Bride
              </p>
              <h3 className="mt-4 font-serif text-[2.375rem] font-normal leading-none tracking-[0.02em] text-charcoal sm:mt-5 sm:text-[2.625rem] md:text-5xl">
                Lakshmi M S
              </h3>
              <p className="mt-7 font-sans text-[0.75rem] uppercase tracking-[0.2em] text-charcoal/48 sm:mt-9 sm:text-[0.8125rem]">
                Daughter of
              </p>
              <p className="mt-3.5 text-balance font-sans text-[0.9375rem] font-light leading-[1.65] text-charcoal/[0.84] sm:text-base md:text-[1.0625rem] md:leading-[1.7]">
                Mr. M. K. Saseendran &amp; Mrs. Anitha Saseendran
              </p>
              <p className="mt-6 text-pretty font-sans text-sm font-light leading-[1.7] text-charcoal/62 sm:text-[0.9375rem]">
                Mullassery House, Okkal P.O., 683550, Thannipuzha
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={160}>
            <div className="mx-auto max-w-md border-t border-gold/20 pt-9 text-center md:mx-0 md:max-w-none md:pt-14 md:text-left">
              <p className="font-sans text-[0.625rem] font-medium uppercase tracking-[0.32em] text-gold/95">
                Groom
              </p>
              <h3 className="mt-4 font-serif text-[2.375rem] font-normal leading-none tracking-[0.02em] text-charcoal sm:mt-5 sm:text-[2.625rem] md:text-5xl">
                Nikhil Vijay
              </h3>
              <p className="mt-7 font-sans text-[0.75rem] uppercase tracking-[0.2em] text-charcoal/48 sm:mt-9 sm:text-[0.8125rem]">
                Son of
              </p>
              <p className="mt-3.5 text-balance font-sans text-[0.9375rem] font-light leading-[1.65] text-charcoal/[0.84] sm:text-base md:text-[1.0625rem] md:leading-[1.7]">
                Mr. Vijayakumar M. S. &amp; Mrs. Preetha Vijay
              </p>
              <p className="mt-6 text-pretty font-sans text-sm font-light leading-[1.7] text-charcoal/62 sm:text-[0.9375rem]">
                Ragam, Manimooppan Road, Vaduthala, Ernakulam
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={120}>
          <div className="love-tagline-wash mt-16 sm:mt-24 md:mt-32">
            <p className="text-balance text-center font-serif text-[1.0625rem] font-light italic leading-relaxed tracking-[0.02em] text-charcoal/[0.58] sm:text-lg md:text-[1.25rem]">
              Two hearts, one beautiful journey.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
