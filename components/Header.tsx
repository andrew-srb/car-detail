"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#areas", label: "Areas" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-magenta/40 bg-magenta/20 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group min-w-0" onClick={() => setOpen(false)}>
          <p className="font-display text-2xl leading-none tracking-[0.18em] text-cream neon-text sm:text-[1.7rem]">
            {site.name.toUpperCase()}
          </p>
          <p className="mt-0.5 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            Jacksonville · Mobile
          </p>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-[0.16em] text-cream transition hover:text-teal"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-sm bg-magenta px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_0_24px_rgba(255,45,149,0.45)] transition hover:bg-pink"
          >
            Book a detail
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/20 text-cream md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`h-px w-5 bg-cream transition ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-cream transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-5 bg-cream transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-magenta/40 bg-navy/80 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-base font-semibold uppercase tracking-[0.16em] text-cream"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-sm bg-magenta px-4 py-3 text-center text-base font-semibold uppercase tracking-[0.16em] text-white"
              onClick={() => setOpen(false)}
            >
              Book a detail
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
