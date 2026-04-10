import { useEffect, useRef, useState } from "react";

const defaultOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px 0px -6% 0px",
  threshold: 0.1,
};

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = defaultOptions
) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.unobserve(entry.target);
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options.rootMargin, options.threshold]);

  return { ref, visible };
}
