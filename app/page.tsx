import Image from "next/image";
import Link from "next/link";
import { CoastIntro } from "@/components/CoastIntro";
import { PackageGrid } from "@/components/PackageGrid";
import { howItWorks, serviceAreas } from "@/lib/packages";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <CoastIntro />

      <section className="relative isolate min-h-[88vh] overflow-hidden grain">
        <Image
          src="/images/hero-car.jpg"
          alt="Freshly detailed sports car on a Florida coastal road at night"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-magenta/25 to-sunset/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-pink/15" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 md:justify-center md:pb-24">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">
            {site.tagline}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-6xl leading-[0.9] tracking-[0.08em] text-cream neon-text sm:text-8xl">
            Showroom gloss.
            <br />
            Your driveway.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream sm:text-lg">
            Fully equipped mobile auto detailing, prepared for salt air, UV,
            pollen, and beach sand.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-sm bg-magenta px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_0_24px_rgba(255,45,149,0.45)] hover:bg-pink"
            >
              Request a quote
            </Link>
            <Link
              href="/services"
              className="rounded-sm border border-teal/60 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-teal hover:bg-teal/10"
            >
              See packages
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-magenta/25 bg-cobalt/90">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-4">
          {[
            "100% mobile",
            "Jacksonville metro",
            "Owner-operated",
            "Satisfaction walkthrough",
          ].map((item) => (
            <p
              key={item}
              className="px-4 py-5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-cream"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="sunset-mesh px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">
            Packages
          </p>
          <h2 className="mt-2 font-display text-5xl tracking-[0.1em] sm:text-6xl">
            Starting prices
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-cream">
            Sedan rates shown. SUVs and trucks add a size fee. Condition can
            change the final number — you’ll always get a quote first.
          </p>
          <div className="mt-10">
            <PackageGrid />
          </div>
          <p className="mt-8 text-center text-base text-cream">
            Need add-ons like pet hair, headlights, or engine bay?{" "}
            <Link href="/services" className="text-teal hover:underline">
              Full menu on Services
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="sunset-mesh px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">
            How it works
          </p>
          <h2 className="mt-2 font-display text-5xl tracking-[0.1em]">
            Four steps. No drop-off.
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {howItWorks.map((item) => (
              <li key={item.step} className="border-t border-magenta/40 pt-5">
                <p className="font-display text-3xl text-teal">{item.step}</p>
                <h3 className="mt-3 font-display text-2xl tracking-[0.08em]">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-cream">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6">
        <Image
          src="/images/paint-gloss.jpg"
          alt="Water beading on freshly coated glossy paint"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/60 via-magenta/30 to-sunset/25" />
        <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">
              First Coast weather
            </p>
            <h2 className="mt-2 font-display text-5xl tracking-[0.1em]">
              Built for Florida cars
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream">
              Jacksonville paint lives a hard life: UV that fades clear coat,
              salt air from the Beaches, humidity that stains interiors, pollen
              that etches, and sand that swirls. Regular details and a sealant
              (or coating) keep the car looking like it just left the lot.
            </p>
          </div>
          <div className="border border-magenta/50 bg-navy/60 p-8 neon-border">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Founding customers
            </p>
            <p className="mt-3 font-display text-4xl tracking-[0.08em]">
              {site.foundingOffer}
            </p>
            <p className="mt-3 text-base text-cream">{site.foundingOfferNote}</p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-sm bg-magenta px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white hover:bg-pink"
            >
              Claim the rate
            </Link>
          </div>
        </div>
      </section>

      <section id="areas" className="scroll-mt-24 border-y border-teal/20 bg-cobalt px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">
            Service area
          </p>
          <h2 className="mt-2 font-display text-5xl tracking-[0.1em]">
            We come to you
          </h2>
          <ul className="mt-10 flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="border border-white/15 px-4 py-2 text-sm font-medium uppercase tracking-[0.14em] text-cream"
              >
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base text-cream">
            Nearby neighborhoods welcome — ask when you book.
          </p>
        </div>
      </section>

      <section className="sunset-mesh px-4 py-20 text-center sm:px-6">
        <p className="font-display text-5xl tracking-[0.1em] sm:text-6xl">
          Ready when you are
        </p>
        <p className="mx-auto mt-4 max-w-md text-base text-cream">
          Tell us the vehicle and the neighborhood. {site.owner} will confirm
          time and price.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-sm bg-magenta px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_0_24px_rgba(255,45,149,0.45)] hover:bg-pink"
          >
            Get a quote
          </Link>
          <a
            href={`tel:${site.phoneTel}`}
            className="rounded-sm border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-cream hover:border-teal hover:text-teal"
          >
            Call {site.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
