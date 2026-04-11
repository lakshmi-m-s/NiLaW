import { useMemo, useState } from "react";
import { Reveal } from "../components/Reveal";
import { GALLERY_IMAGE_PATHS } from "../config/galleryImages";

function gallerySrc(path: string) {
  const trimmed = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${trimmed}`;
}

export function PhotoGallery() {
  const configured = useMemo(
    () => GALLERY_IMAGE_PATHS.map((p) => p.trim()).filter(Boolean),
    []
  );
  const [paths, setPaths] = useState(configured);

  if (configured.length === 0) return null;
  if (paths.length === 0) return null;

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

          <div className="reveal-panel mt-10 sm:mt-12">
            <ul className="grid list-none grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-5">
              {paths.map((path, i) => (
                <li key={`${path}-${i}`} className="overflow-hidden rounded-lg border border-gold/20 bg-pearl/40 shadow-[0_8px_28px_-14px_rgba(26,22,18,0.1)]">
                  <img
                    src={gallerySrc(path)}
                    alt=""
                    className="aspect-square w-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                    onError={() => setPaths((prev) => prev.filter((p) => p !== path))}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
