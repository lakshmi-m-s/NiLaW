import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Reveal } from "../components/Reveal";
import { GALLERY_IMAGE_PATHS } from "../config/galleryImages";

function gallerySrc(path: string) {
  const trimmed = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${trimmed}`;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function GalleryImg({ path, onError }: { path: string; onError: () => void }) {
  return (
    <div className="h-40 w-40 shrink-0 overflow-hidden rounded-lg border border-gold/20 bg-pearl/40 shadow-[0_8px_28px_-14px_rgba(26,22,18,0.1)]">
      <img
        src={gallerySrc(path)}
        alt=""
        className="h-full w-full object-cover object-center"
        loading="lazy"
        decoding="async"
        onError={onError}
      />
    </div>
  );
}

export function PhotoGallery() {
  const configured = useMemo(
    () => GALLERY_IMAGE_PATHS.map((p) => p.trim()).filter(Boolean),
    []
  );
  const [paths, setPaths] = useState(configured);
  const prefersReducedMotion = usePrefersReducedMotion();

  if (configured.length === 0) return null;
  if (paths.length === 0) return null;

  const dropPath = (path: string) =>
    setPaths((prev) => prev.filter((p) => p !== path));

  /** Two copies for seamless -50% loop (N ≥ 2); two tiles for N === 1 */
  const beltPaths = useMemo(() => [...paths, ...paths], [paths]);

  const durationSec = paths.length === 1 ? 15 : paths.length * 7;

  const beltShellRef = useRef<HTMLDivElement>(null);
  const beltIdleTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const [beltScrollPaused, setBeltScrollPaused] = useState(false);

  const clearBeltIdleTimer = useCallback(() => {
    if (beltIdleTimerRef.current) clearTimeout(beltIdleTimerRef.current);
  }, []);

  const scheduleBeltResume = useCallback(() => {
    clearBeltIdleTimer();
    beltIdleTimerRef.current = setTimeout(() => {
      const el = beltShellRef.current;
      if (el && el.scrollLeft === 0) setBeltScrollPaused(false);
    }, 1800);
  }, [clearBeltIdleTimer]);

  const onBeltShellScroll = useCallback(() => {
    const el = beltShellRef.current;
    if (!el) return;
    if (el.scrollLeft !== 0) {
      clearBeltIdleTimer();
      setBeltScrollPaused(true);
    } else {
      scheduleBeltResume();
    }
  }, [scheduleBeltResume, clearBeltIdleTimer]);

  useEffect(() => {
    return () => clearBeltIdleTimer();
  }, [clearBeltIdleTimer]);

  return (
    <section className="section-gradient-invite border-y border-gold/10 px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="text-center">
            <p className="font-sans text-[0.625rem] font-medium uppercase tracking-[0.32em] text-gold/95">
              Gallery
            </p>
            <h2 className="mt-4 font-serif text-[1.625rem] font-normal leading-tight tracking-[0.02em] text-charcoal sm:mt-5 sm:text-[2rem] md:text-[2.25rem]">
              Moments
            </h2>
          </div>

          <div className="reveal-panel mt-10 overflow-x-visible overflow-y-hidden py-4 sm:mt-12 sm:py-5 -mx-2 sm:-mx-3 md:mx-0">
            {prefersReducedMotion ? (
              <ul className="flex list-none flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
                {paths.map((path, i) => (
                  <li key={`still-${path}-${i}`}>
                    <GalleryImg path={path} onError={() => dropPath(path)} />
                  </li>
                ))}
              </ul>
            ) : (
              <div
                ref={beltShellRef}
                className="gallery-marquee-shell -mx-1 sm:-mx-2"
                onScroll={onBeltShellScroll}
              >
                <div
                  className={`gallery-marquee-track ${
                    paths.length === 1 ? "gallery-marquee-track--single" : "gallery-marquee-track--loop"
                  }${beltScrollPaused ? " gallery-marquee-track--scroll-paused" : ""}`}
                  style={{ animationDuration: `${durationSec}s` }}
                >
                  {beltPaths.map((path, i) => (
                    <GalleryImg
                      key={`belt-${path}-${i}`}
                      path={path}
                      onError={() => dropPath(path)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
