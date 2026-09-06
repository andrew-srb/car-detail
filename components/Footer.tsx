import Link from "next/link";
import { serviceAreas } from "@/lib/packages";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-magenta/30 bg-cobalt">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl tracking-[0.16em] neon-text">
            {site.shortName.toUpperCase()}
          </p>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            Auto Detail
          </p>
          <p className="mt-4 max-w-xs text-base leading-relaxed text-cream">
            Owner-operated mobile detailing by {site.owner}. We come to you
            across {site.city}.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">Visit</p>
          <ul className="mt-3 space-y-2 text-base text-cream">
            <li>
              <Link href="/services" className="hover:text-teal">
                Services &amp; pricing
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-teal">
                About Stacy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal">
                Request a quote
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-teal">Hours</p>
          <p className="mt-2 text-base text-cream">{site.hours}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
            Areas we serve
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="rounded-sm border border-white/15 px-2.5 py-1.5 text-sm font-medium uppercase tracking-wide text-cream"
              >
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base text-cream">
            <a href={`tel:${site.phoneTel}`} className="hover:text-teal">
              {site.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="hover:text-teal">
              {site.email}
            </a>
          </p>
        </div>
      </div>
      <div className="art-deco-line" />
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-sm text-cream sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}. Prices shown are starting
          rates for sedans. Final quote depends on vehicle size and condition.
        </p>
        <p>Jacksonville, Florida</p>
      </div>
    </footer>
  );
}
