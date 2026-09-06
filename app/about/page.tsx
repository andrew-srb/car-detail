import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${site.owner}, owner of ${site.name} — mobile car detailing across Jacksonville, Florida.`,
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden grain">
        <Image
          src="/images/interior-detail.jpg"
          alt="Detailed luxury car interior at night"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-magenta/30 via-navy/40 to-navy" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">
            Owner-operated
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-6xl tracking-[0.1em] neon-text sm:text-7xl">
            {site.owner}
          </h1>
          <p className="mt-4 max-w-xl text-lg font-medium text-cream">
            Jacksonville local. Mobile detailer. One van, pro-grade products,
            and a standard that doesn’t cut corners because the name on the
            door is his.
          </p>
        </div>
      </section>

      <section className="sunset-mesh px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl tracking-[0.1em]">
              Why Vice City
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream">
              {site.city} is neon sunsets, palm-lined A1A, and cars that take a
              beating — beach parking, afternoon storms, pollen season, and
              year-round UV. {site.name} is built for that: we bring the shop
              to your driveway so the car looks like the coast at dusk, not
              like it lived there.
            </p>
          </div>
          <div className="border border-magenta/30 bg-navy/45 p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              How we work
            </h3>
            <ul className="mt-5 space-y-4 text-base text-cream">
              <li>
                <span className="text-teal">Mobile.</span> Home, office, or
                apartment lot — we arrive stocked.
              </li>
              <li>
                <span className="text-teal">Honest quotes.</span> Size and
                condition set the price before a mitt hits the paint.
              </li>
              <li>
                <span className="text-teal">Florida-proof.</span> Wash, decon,
                seal, and interior work aimed at salt, UV, and sand.
              </li>
              <li>
                <span className="text-teal">Walkthrough.</span> You see the
                result before we pack up.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sunset-mesh px-4 py-20 text-center sm:px-6">
        <p className="font-display text-4xl tracking-[0.1em] sm:text-5xl">
          Let’s get your car right
        </p>
        <p className="mx-auto mt-4 max-w-md text-base text-cream">
          {site.hours}. {site.foundingOffer}.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-sm bg-magenta px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_0_24px_rgba(255,45,149,0.45)] hover:bg-pink"
        >
          Request a quote
        </Link>
      </section>
    </div>
  );
}
