"use client";

import { useEffect, useState } from "react";
import SectionHeading from "../ui/SectionHeading";

/* Customer reviews: one shown at a time, with arrows and automatic change every 6 seconds */
export default function GymReviews({ reviews }) {
  const [current, setCurrent] = useState(0);

  const show = (index) => setCurrent((index + reviews.length) % reviews.length);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % reviews.length), 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const review = reviews[current];
  const initials = review.name.split(" ").map((part) => part[0]).join("").slice(0, 2);

  return (
    <section id="reviews" className="bg-cream py-20 text-center md:py-28">
      <div className="container-x">
        <SectionHeading centered eyebrow="Testimonials" title={<>What our members <em>say</em></>} />

        <div className="mx-auto min-h-[230px] max-w-3xl" aria-live="polite">
          <p className="rise font-serif text-lg italic leading-relaxed text-cocoa md:text-xl">
            <span className="block font-serif text-6xl leading-[0.6] text-caramel">&ldquo;</span>
            {review.quote}
          </p>
          <div className="mt-7 flex items-center justify-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-caramel font-serif text-lg font-bold text-white">
              {initials}
            </div>
            <div className="text-left">
              <strong className="block font-serif uppercase tracking-wide text-caramel">{review.name}</strong>
              <small className="text-bodytext">{review.since}</small>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <button type="button" onClick={() => show(current - 1)} aria-label="Previous review" className="flex h-11 w-11 items-center justify-center bg-caramel text-xl text-white transition hover:bg-caramelDark">‹</button>
          <button type="button" onClick={() => show(current + 1)} aria-label="Next review" className="flex h-11 w-11 items-center justify-center bg-caramel text-xl text-white transition hover:bg-caramelDark">›</button>
        </div>
      </div>
    </section>
  );
}
