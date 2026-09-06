import type { Metadata } from "next";
import { PackageGrid } from "@/components/PackageGrid";
import { addOns, comparisonRows, faqs, packages } from "@/lib/packages";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: `Mobile detailing packages in Jacksonville from $${packages[0].sedanFrom}. Express, interior, full detail, and ceramic quotes.`,
};

export default function ServicesPage() {
  return (
    <div className="sunset-mesh">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">
          {site.city}
        </p>
        <h1 className="mt-2 font-display text-6xl tracking-[0.1em] neon-text sm:text-7xl">
          Packages &amp; pricing
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream">
          Transparent starting rates for sedans. SUV / minivan +$35. Truck / XL
          +$60. Heavy soil, pet hair, and neglected paint are quoted up so there
          are no surprises.
        </p>
        <div className="mt-12">
          <PackageGrid />
        </div>
      </section>

      <section className="border-y border-magenta/25 bg-navy/55 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl tracking-[0.1em]">What’s included</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-base">
              <thead>
                <tr className="border-b border-white/15 text-sm font-semibold uppercase tracking-[0.14em] text-cream">
                  <th className="py-3 pr-4 font-medium">Feature</th>
                  <th className="py-3 px-2 font-medium">Express</th>
                  <th className="py-3 px-2 font-medium">Interior</th>
                  <th className="py-3 px-2 font-medium text-teal">Full Detail</th>
                  <th className="py-3 px-2 font-medium">Ceramic</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-white/8">
                    <td className="py-3 pr-4 text-cream">{row.feature}</td>
                    {(["express", "interior", "full", "ceramic"] as const).map(
                      (key) => (
                        <td key={key} className="px-2 py-3">
                          {row[key] ? (
                            <span className="text-teal">Yes</span>
                          ) : (
                            <span className="text-cream/55">—</span>
                          )}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-4xl tracking-[0.1em]">Add-ons</h2>
        <p className="mt-2 text-base text-cream">
          Bolt these onto any package when you book.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {addOns.map((addon) => (
            <li
              key={addon.id}
              className="border border-magenta/20 bg-cobalt/60 p-5"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl tracking-[0.08em]">
                  {addon.name}
                </h3>
                <p className="text-base font-semibold text-magenta">{addon.price}</p>
              </div>
              <p className="mt-2 text-base leading-relaxed text-cream">
                {addon.detail}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-teal/25 bg-cobalt px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl tracking-[0.1em]">FAQ</h2>
          <dl className="mt-8 space-y-8">
            {faqs.map((item) => (
              <div key={item.q}>
                <dt className="font-display text-2xl tracking-[0.06em] text-cream">
                  {item.q}
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-cream">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
