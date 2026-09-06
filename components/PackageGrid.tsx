"use client";

import { useState } from "react";
import { PackageCard } from "@/components/PackageCard";
import { packages, vehicleSizes, type VehicleSize } from "@/lib/packages";

export function PackageGrid({ ids }: { ids?: (typeof packages)[number]["id"][] }) {
  const [size, setSize] = useState<VehicleSize>("sedan");
  const list = ids ? packages.filter((p) => ids.includes(p.id)) : packages;

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <p className="mr-2 text-sm font-semibold uppercase tracking-[0.16em] text-cream">
          Vehicle size
        </p>
        {vehicleSizes.map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => setSize(v.id)}
            className={`rounded-sm border px-3 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition ${
              size === v.id
                ? "border-magenta bg-magenta/20 text-cream"
                : "border-white/15 text-cream/70 hover:border-teal/50"
            }`}
          >
            {v.label}
            {v.adder ? ` · +$${v.adder}` : ""}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {list.map((pkg) => (
          <PackageCard key={pkg.id} id={pkg.id} size={size} />
        ))}
      </div>
    </div>
  );
}
