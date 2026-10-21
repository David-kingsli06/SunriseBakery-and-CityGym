"use client";

import { useState } from "react";
import Logo from "./Logo";

/* Top navigation bar. Shared component: pass in the brand, links and
   button text, and it builds the header.
   brand: { name, tagline }   links: [{ href, label }]   cta: { label, href } */
export default function Header({ brand, links, cta }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[60] border-b border-line bg-cream/90 backdrop-blur-md">
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#home" aria-label={`${brand.name} home`}>
          <Logo brand={brand} />
        </a>

        <nav
          id="mainNav"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-20 flex-col border-b border-line bg-cream px-6 pb-4 pt-2 shadow-soft lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 text-[1.02rem] font-semibold text-cocoa hover:text-caramelDark lg:border-0 lg:py-1 lg:text-[0.95rem]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={cta.href} className="btn-primary hidden px-5 py-2.5 text-sm lg:inline-flex">
            {cta.label}
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mainNav"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`block h-0.5 w-6 rounded bg-cocoa transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 rounded bg-cocoa transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 rounded bg-cocoa transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
