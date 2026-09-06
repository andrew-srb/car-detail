"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "vcad-intro-seen";
const SCENE_MS = 3800;
const HOLD_MS = 700;
const WIPE_MS = 850;
const DURATION_MS = SCENE_MS + HOLD_MS + WIPE_MS;

function shouldAutoplay() {
  try {
    if (new URLSearchParams(window.location.search).has("intro")) return true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    return !reduced && !seen;
  } catch {
    return false;
  }
}

function Palm({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 220"
      className={className}
      aria-hidden
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path
        fill="currentColor"
        d="M58 218c2-46 3-92 4-138 18-6 38-4 54 8-16-2-34 2-46 14 22 2 40 14 52 32-22-10-40-8-54 2 16 12 26 30 30 52-14-18-30-26-46-24 6 16 8 36 4 58-2-18-10-34-22-44 2 22 0 44-8 64-8-20-22-34-40-40 14 14 22 32 22 52-18-12-38-16-60-10 20 4 36 16 44 34-22-6-44-2-64 12 24-4 44 4 56 22C36 196 48 172 58 218Z"
      />
      <rect x="56" y="80" width="8" height="140" rx="3" fill="currentColor" />
    </svg>
  );
}

export function CoastIntro() {
  const autoplay = useSyncExternalStore(
    () => () => {},
    shouldAutoplay,
    () => true,
  );
  const [dismissed, setDismissed] = useState(false);
  const [wiping, setWiping] = useState(false);
  const skipArmed = useRef(false);
  const finishing = useRef(false);
  const playing = autoplay && !dismissed;

  const finish = useCallback(() => {
    if (finishing.current) return;
    finishing.current = true;
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setWiping(true);
    window.setTimeout(() => setDismissed(true), WIPE_MS);
  }, []);

  useEffect(() => {
    if (!playing) return;
    skipArmed.current = false;
    finishing.current = false;
    setWiping(false);
    const arm = window.setTimeout(() => {
      skipArmed.current = true;
    }, 800);
    const timer = window.setTimeout(finish, SCENE_MS + HOLD_MS);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") finish();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(arm);
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
  }, [playing, finish]);

  return (
    <AnimatePresence>
      {playing ? (
        [
        <motion.div
          key="intro"
          className="fixed inset-0 z-[80] isolate overflow-hidden bg-black grain"
          initial={{ clipPath: "inset(0 0% 0 0%)" }}
          animate={{
            clipPath: wiping ? "inset(0 0% 0 100%)" : "inset(0 0% 0 0%)",
          }}
          transition={{ clipPath: { duration: WIPE_MS / 1000, ease: [0.65, 0, 0.35, 1] } }}
          onClick={() => {
            if (skipArmed.current) finish();
          }}
          role="dialog"
          aria-label="Vice City Auto Detail intro"
        >
          <motion.div
            className="absolute inset-0 scale-110 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/intro-coast.jpg?v=2')" }}
            initial={{ scale: 1.08, x: 0 }}
            animate={{ scale: 1.16, x: "-3%" }}
            transition={{ duration: DURATION_MS / 1000, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/20" />

          <motion.div
            className="pointer-events-none absolute -left-10 bottom-[-6%] text-navy"
            initial={{ x: 0 }}
            animate={{ x: "-8%" }}
            transition={{ duration: DURATION_MS / 1000, ease: "linear" }}
          >
            <Palm className="h-[26vh] w-auto opacity-90 sm:h-[48vh] md:h-[72vh]" />
          </motion.div>
          <motion.div
            className="pointer-events-none absolute right-[-8%] bottom-[-10%] text-navy"
            initial={{ x: 0 }}
            animate={{ x: "6%" }}
            transition={{ duration: DURATION_MS / 1000, ease: "linear" }}
          >
            <Palm className="h-[30vh] w-auto opacity-80 sm:h-[56vh] md:h-[82vh]" flip />
          </motion.div>

          <motion.div
            className="absolute bottom-[10%] left-0 w-[62vw] max-w-3xl mix-blend-screen sm:w-[48vw]"
            initial={{ x: "-28vw", scale: 0.62, opacity: 1 }}
            animate={{
              x: ["-28vw", "8vw", "8vw"],
              scale: [0.62, 0.92, 0.92],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: SCENE_MS / 1000,
              times: [0, 0.42, 1],
              ease: [0.16, 0.7, 0.2, 1],
            }}
          >
            {/* Decorative intro still — next/image wrapping fights mix-blend + motion. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/intro-car.png?v=2"
              alt=""
              className="relative w-full"
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: [0, 0, 1], y: [16, 16, 0] }}
            transition={{
              duration: SCENE_MS / 1000,
              times: [0, 0.38, 1],
              ease: "easeOut",
            }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal">
              Jacksonville, Florida
            </p>
            <h1 className="mt-3 font-display text-5xl leading-none tracking-[0.12em] text-cream neon-text sm:text-7xl md:text-8xl">
              VICE CITY
              <br />
              AUTO DETAIL
            </h1>
            <div className="mt-5 h-px w-40 bg-gradient-to-r from-transparent via-teal to-transparent" />
          </motion.div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              finish();
            }}
            className="absolute right-4 bottom-4 z-10 rounded-sm border border-white/30 bg-black/40 px-3 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-cream backdrop-blur-sm hover:text-teal"
          >
            Skip
          </button>
        </motion.div>,
        <motion.div
          key="intro-wipe"
          className="pointer-events-none fixed inset-y-0 z-[81] w-[42vw] bg-gradient-to-r from-transparent via-cream/60 to-transparent mix-blend-screen"
          initial={{ x: "-45%", opacity: 0 }}
          animate={
            wiping
              ? { x: "120vw", opacity: [0.95, 0.7, 0] }
              : { x: "-45%", opacity: 0 }
          }
          transition={{ duration: WIPE_MS / 1000, ease: [0.65, 0, 0.35, 1] }}
        />,
        ]
      ) : null}
    </AnimatePresence>
  );
}
