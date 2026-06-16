"use client";

import { Shell } from "@/components/Shell";
import { useHerName } from "@/lib/names";
import { PAGE_IMAGES } from "@/lib/images";
import { formatDuration, getDurationParts } from "@/lib/duration";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const MISSING_SINCE = new Date("2026-05-11T16:00:00+05:30").getTime();

export default function LetterHeadPage() {
  const her = useHerName();
  const since = useMemo(() => MISSING_SINCE, []);
  const [durationLabel, setDurationLabel] = useState("");

  useEffect(() => {
    const tick = () => {
      setDurationLabel(formatDuration(getDurationParts(since)));
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [since]);

  return (
    <Shell
      backgroundImage={PAGE_IMAGES.letter}
    >
      <div className="flex flex-col items-center text-center">
        {/* The white circle motion.div was removed from here */}

        <div className="mt-12 text-[11px] font-medium tracking-[0.34em] text-[color:var(--muted)]">
          A MESSAGE FOR YOU
        </div>

        <h1 className="mt-2 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-[color:var(--fg)]">
          {her.name}
        </h1>

        <div className="mt-10 w-full rounded-3xl bg-white/60 p-5 shadow-[0_18px_50px_rgba(31,26,23,0.08)] ring-1 ring-black/5">
      
          <div className="mt-2 text-xs tracking-[0.22em] text-[color:var(--muted)]">
            TIME SINCE I STARTED MISSING YOU MY LOVE
          </div>

          <div className="mt-4 font-serif text-xl font-semibold leading-relaxed text-[color:var(--rose)] sm:text-2xl">
            {durationLabel}
          </div>
        </div>

        <Link
          href="/feed"
          className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--rose)] px-6 py-4 text-sm font-semibold tracking-[0.18em] text-white shadow-[0_18px_50px_rgba(178,31,58,0.20)] transition hover:translate-y-[-1px] hover:shadow-[0_22px_60px_rgba(178,31,58,0.22)] active:translate-y-0"
        >
          READ MY HEART
        </Link>
      </div>
    </Shell>
  );
}