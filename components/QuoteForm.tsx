"use client";

import { FormEvent, useMemo, useState } from "react";
import { packages, serviceAreas, vehicleSizes } from "@/lib/packages";
import { site } from "@/lib/site";

const conditions = ["Light", "Moderate", "Heavy"] as const;

export function QuoteForm({ defaultService }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    neighborhood: "",
    vehicle: "sedan",
    service: defaultService && packages.some((p) => p.id === defaultService) ? defaultService : "full",
    condition: "Moderate",
    notes: "",
  });

  const mail = useMemo(() => {
    const pkg = packages.find((p) => p.id === form.service);
    const size = vehicleSizes.find((v) => v.id === form.vehicle);
    const subject = encodeURIComponent(
      `Detail quote — ${form.name || "new request"}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        `Neighborhood: ${form.neighborhood}`,
        `Vehicle: ${size?.label ?? form.vehicle}`,
        `Package: ${pkg?.name ?? form.service}`,
        `Condition: ${form.condition}`,
        "",
        form.notes || "(no notes)",
      ].join("\n"),
    );
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  }, [form]);

  const sms = useMemo(() => {
    const pkg = packages.find((p) => p.id === form.service);
    const text = encodeURIComponent(
      `Hi Stacy — ${form.name} in ${form.neighborhood || "Jacksonville"} needs a ${pkg?.name ?? "detail"} on a ${form.vehicle}. ${form.phone}`,
    );
    return `sms:${site.phoneTel}?&body=${text}`;
  }, [form]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    window.location.href = mail;
    setSent(true);
  }

  function update(key: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  if (sent) {
    return (
      <div className="border border-teal/40 bg-cobalt/70 p-8 text-center">
        <p className="font-display text-3xl tracking-[0.12em] text-teal">
          Quote ready to send
        </p>
        <p className="mt-3 text-base leading-relaxed text-cream">
          Your mail app should be open with the details filled in. If it didn’t,
          use the buttons below.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={mail}
            className="rounded-sm bg-magenta px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white"
          >
            Open email
          </a>
          <a
            href={sms}
            className="rounded-sm border border-teal/50 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-teal"
          >
            Text Stacy
          </a>
        </div>
      </div>
    );
  }

  const field =
    "w-full rounded-sm border border-white/15 bg-navy/70 px-3 py-3 text-base text-cream outline-none placeholder:text-cream/50 focus:border-teal";
  const label = "grid gap-1.5 text-base font-semibold uppercase tracking-[0.12em] text-cream";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={label}>
          Name
          <input
            required
            className={field}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </label>
        <label className={label}>
          Phone
          <input
            required
            type="tel"
            className={field}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </label>
      </div>
      <label className={label}>
        Email
        <input
          required
          type="email"
          className={field}
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
        />
      </label>
      <label className={label}>
        Neighborhood
        <select
          className={field}
          value={form.neighborhood}
          onChange={(e) => update("neighborhood", e.target.value)}
        >
          <option value="">Select an area</option>
          {serviceAreas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={label}>
          Vehicle
          <select
            className={field}
            value={form.vehicle}
            onChange={(e) => update("vehicle", e.target.value)}
          >
            {vehicleSizes.map((v) => (
              <option key={v.id} value={v.id}>
                {v.label}
              </option>
            ))}
          </select>
        </label>
        <label className={label}>
          Package
          <select
            className={field}
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
          >
            {packages.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className={label}>
        Condition
        <select
          className={field}
          value={form.condition}
          onChange={(e) => update("condition", e.target.value)}
        >
          {conditions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
      <label className={label}>
        Notes
        <textarea
          rows={4}
          className={field}
          placeholder="Pet hair, beach sand, stains, preferred day…"
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
        />
      </label>
      <button
        type="submit"
        className="mt-2 rounded-sm bg-magenta px-5 py-3.5 text-base font-semibold uppercase tracking-[0.14em] text-white shadow-[0_0_24px_rgba(255,45,149,0.4)] hover:bg-pink"
      >
        Send quote request
      </button>
      <p className="text-center text-base font-medium text-cream">
        Opens your email with the details. Or{" "}
        <a href={sms} className="text-teal underline-offset-2 hover:underline">
          text {site.phoneDisplay}
        </a>
        .
      </p>
    </form>
  );
}
