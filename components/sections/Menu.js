"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

/* Menu grid with filter buttons. Clicking a filter shows only that category. */
export default function Menu({ filters, items }) {
  const [active, setActive] = useState("all");
  const visible = items.filter((item) => active === "all" || item.cat === active);

  return (
    <section id="menu" className="bg-sand py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            centered
            eyebrow="Our Menu"
            title={<>Good things are <em>baking</em></>}
            lead="From golden pastries to irresistible cakes and comforting cups of coffee, there is always something to brighten your day."
          />
        </Reveal>

        <div className="mb-10 flex flex-wrap justify-center gap-2.5" role="group" aria-label="Filter menu">
          {filters.map((filter) => {
            const isActive = active === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActive(filter.id)}
                aria-pressed={isActive}
                className={`rounded-full border px-5 py-2.5 text-[0.92rem] font-semibold transition ${
                  isActive
                    ? "border-caramel bg-caramel text-white"
                    : "border-line bg-card text-cocoa hover:border-caramel hover:text-caramelDark"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {visible.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-card border border-line bg-card shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 pb-6">
                <h3 className="font-serif text-xl font-semibold text-cocoa">{item.name}</h3>
                <p className="mt-1.5 text-[0.93rem]">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
