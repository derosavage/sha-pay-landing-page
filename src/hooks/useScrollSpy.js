import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view so the nav can highlight it.
 * Uses IntersectionObserver — cheap, off-main-thread and no scroll listeners.
 */
export function useScrollSpy(sectionIds, { offset = 120 } = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const visible = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visible.delete(entry.target.id);
          }
        });

        if (!visible.size) return;

        // Pick the topmost visible section, ignoring ones scrolled past.
        const candidates = [...visible.entries()].filter(
          ([, top]) => top < offset
        );
        const pool = candidates.length ? candidates : [...visible.entries()];
        pool.sort((a, b) => a[1] - b[1]);
        setActiveId(pool[0][0]);
      },
      {
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: [0, 0.15, 0.4],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
