import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { serviceAreas } from "@/lib/packages";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: `Book mobile car detailing with ${site.name} in Jacksonville. We come to your driveway.`,
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;

  return (
    <div className="sunset-mesh">
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-base font-semibold uppercase tracking-[0.18em] text-teal">
            Book a visit
          </p>
          <h1 className="mt-2 font-display text-6xl tracking-[0.1em] neon-text">
            Request a quote
          </h1>
          <p className="mt-4 text-base font-medium leading-relaxed text-cream sm:text-lg">
            {site.owner} will confirm availability and a price based on vehicle
            size and condition. Mobile service across the Jacksonville metro.
          </p>
          <dl className="mt-10 space-y-5 text-base">
            <div>
              <dt className="text-base font-semibold uppercase tracking-[0.12em] text-teal">
                Call / text
              </dt>
              <dd className="mt-1">
                <a href={`tel:${site.phoneTel}`} className="text-lg font-semibold text-cream hover:text-teal">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold uppercase tracking-[0.12em] text-teal">
                Email
              </dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="text-lg font-semibold text-cream hover:text-teal">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold uppercase tracking-[0.12em] text-teal">
                Hours
              </dt>
              <dd className="mt-1 font-medium text-cream">{site.hours}</dd>
            </div>
            <div>
              <dt className="text-base font-semibold uppercase tracking-[0.12em] text-teal">
                Areas
              </dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="border border-white/15 px-2.5 py-1.5 text-base font-medium uppercase tracking-wide text-cream"
                  >
                    {area}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
          <p className="mt-10 max-w-sm text-base font-medium leading-relaxed text-cream">
            {site.foundingOffer}. {site.foundingOfferNote}
          </p>
        </div>
        <div className="border border-magenta/30 bg-navy/50 p-6 sm:p-8">
          <QuoteForm defaultService={service} />
        </div>
      </section>
    </div>
  );
}
