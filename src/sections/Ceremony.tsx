import { Reveal } from "../components/Reveal";

const MAP_URL = "https://maps.app.goo.gl/jCt7z3gQVjFWdkTH8?g_st=ic";

export function Ceremony() {
  return (
    <section className="section-gradient-ceremony px-4 pt-16 pb-16 sm:px-6 sm:pt-20 sm:pb-20 md:px-12 md:pt-36 md:pb-36">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal className="reveal-panel">
          <h2 className="font-serif text-[1.625rem] font-normal leading-tight tracking-[0.02em] text-charcoal sm:text-[2.125rem] md:text-[2.5rem]">
            Thalikett
          </h2>
          <p className="mt-6 text-balance font-serif text-[1.3125rem] font-bold leading-snug tracking-[0.015em] text-gold sm:mt-10 sm:text-[1.75rem] md:text-[2rem]">
            Guruvayur Sree Krishna Temple
          </p>
          <p className="mt-4 font-sans text-[0.9375rem] font-light tracking-[0.04em] text-charcoal/58 sm:mt-5 sm:text-base">
            Muhurtham · 6:00 AM – 7:00 AM
          </p>
          <div className="relative mx-auto mt-6 w-full max-w-52 overflow-hidden rounded-lg border border-gold/20 bg-pearl/60 shadow-[0_8px_32px_-12px_rgba(26,22,18,0.12)] sm:mt-8 sm:max-w-60 md:max-w-64">
            <div className="aspect-[4/3] w-full">
              <img
                src={`${import.meta.env.BASE_URL}temple.jpg`}
                alt="Guruvayur Sree Krishna Temple"
                className="h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="mt-10 border-t border-gold/15 pt-10 sm:mt-12 sm:pt-12">
            <p className="text-balance font-sans text-[0.9375rem] font-light leading-[1.85] text-charcoal/[0.78] sm:text-[1.0625rem] md:text-lg md:leading-[1.9]">
              Followed by a traditional wedding ceremony and gathering at
            </p>
            <p className="mt-6 text-balance font-serif text-[1.3125rem] font-bold leading-snug tracking-[0.015em] text-gold sm:mt-10 sm:text-[1.75rem] md:text-[2rem]">
              Royal Convention Centre, Marampally
            </p>
            <p className="mt-4 font-sans text-[0.9375rem] font-light tracking-[0.04em] text-charcoal/58 sm:mt-5 sm:text-base">
              11:30 AM to 2:30 PM
            </p>
            <div className="relative mx-auto mt-6 w-full max-w-52 overflow-hidden rounded-lg border border-gold/20 bg-pearl/60 shadow-[0_8px_32px_-12px_rgba(26,22,18,0.12)] sm:mt-8 sm:max-w-60 md:max-w-64">
              <div className="aspect-[4/3] w-full">
                <img
                  src={`${import.meta.env.BASE_URL}auditorium.jpg`}
                  alt="Royal Convention Centre, Marampally"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-6 inline-flex min-h-[48px] w-full max-w-[18rem] touch-manipulation items-center justify-center overflow-hidden border border-gold/25 bg-pearl/75 px-8 py-3.5 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink/90 shadow-[0_1px_0_rgba(255,255,255,0.55)_inset,0_14px_36px_-14px_rgba(26,22,18,0.14)] backdrop-blur-[8px] transition-[border-color,box-shadow,color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.99] sm:mt-8 sm:min-h-[52px] sm:w-auto sm:max-w-none sm:min-w-[14rem] sm:px-12 sm:tracking-[0.28em] md:hover:border-gold/55 md:hover:bg-pearl md:hover:text-charcoal md:hover:shadow-[0_1px_0_rgba(255,255,255,0.75)_inset,0_0_0_1px_rgba(154,127,62,0.28),0_22px_48px_-16px_rgba(26,22,18,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-gold/45"
            >
              <span className="relative z-10">View Location</span>
              <span
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(120% 180% at 50% 0%, rgba(184, 154, 82, 0.09) 0%, transparent 55%)",
                }}
                aria-hidden
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
