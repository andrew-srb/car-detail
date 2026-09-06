import Link from "next/link";
import { packages, vehicleSizes, type VehicleSize, priceFor } from "@/lib/packages";

export function PackageCard({
  id,
  size = "sedan",
}: {
  id: (typeof packages)[number]["id"];
  size?: VehicleSize;
}) {
  const pkg = packages.find((p) => p.id === id);
  if (!pkg) return null;

  const price = pkg.quoteOnly ? null : priceFor(pkg.sedanFrom, size);
  const sizeLabel =
    vehicleSizes.find((v) => v.id === size)?.label.toLowerCase() ?? "sedan";

  return (
    <article
      className={`flex h-full flex-col border bg-cobalt/70 p-6 ${
        pkg.featured
          ? "neon-border border-magenta/70"
          : "border-magenta/20"
      }`}
    >
      {pkg.featured ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
          Most booked
        </p>
      ) : null}
      <h3 className="font-display text-3xl tracking-[0.08em] text-cream">
        {pkg.name}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-cream">{pkg.tagline}</p>
      <p className="mt-5 font-display text-5xl text-magenta">
        {price == null ? "Quote" : `$${price}`}
      </p>
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cream">
        {pkg.quoteOnly ? `From ~$${pkg.sedanFrom}` : `Starting · ${sizeLabel}`} · {pkg.duration}
      </p>
      <ul className="mt-6 flex-1 space-y-2 text-base text-cream">
        {pkg.includes.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-teal" />
            {item}
          </li>
        ))}
      </ul>
      <Link
        href={`/contact?service=${pkg.id}`}
        className={`mt-8 inline-flex justify-center rounded-sm px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition ${
          pkg.featured
            ? "bg-magenta text-white shadow-[0_0_20px_rgba(255,45,149,0.4)] hover:bg-pink"
            : "border border-teal/50 text-teal hover:bg-teal/10"
        }`}
      >
        {pkg.quoteOnly ? "Request a quote" : "Book this package"}
      </Link>
    </article>
  );
}
