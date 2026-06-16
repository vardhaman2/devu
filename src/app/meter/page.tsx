"use client";

import { Shell } from "@/components/Shell";
import { usePageRevealed } from "@/components/RevealContext";
import { PAGE_IMAGES } from "@/lib/images";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

function Meter({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="card rounded-3xl px-5 py-5">
      <div className="text-[11px] font-medium tracking-[0.32em] text-[color:var(--muted)]">
        {label}
      </div>
      <div className="mt-4 h-3 w-full rounded-full bg-black/10">
        <motion.div
          className="h-3 rounded-full"
          style={{ background: color }}
          initial={{ width: "0%" }}
          animate={{ width: `${Math.max(0, Math.min(120, value))}%` }}
          transition={{ ease: "linear", duration: 0.25 }}
        />
      </div>
      <div className="mt-3 text-xs tracking-[0.22em] text-[color:var(--muted)]">
        {value}%
      </div>
    </div>
  );
}

function MeterContent() {
  const revealed = usePageRevealed();
  const [forgive, setForgive] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const [cute, setCute] = useState(0);

  useEffect(() => {
    if (!revealed) {
      setForgive(0);
      setCute(0);
      setGlitch(false);
      return;
    }

    const id = window.setInterval(() => {
      setForgive((cur) => {
        const next = Math.min(85, cur + 1);
        if (next === 85) {
          setGlitch(true);
        }
        return next;
      });
      setCute((cur) => Math.min(120, cur + 2));
    }, 35);
    return () => window.clearInterval(id);
  }, [revealed]);

  useEffect(() => {
    if (!glitch) return;
    const id = window.setInterval(() => {
      setGlitch((g) => !g);
    }, 120);
    const stop = window.setTimeout(() => {
      window.clearInterval(id);
      setGlitch(false);
    }, 1200);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(stop);
    };
  }, [glitch]);

  return (
    <>
      <div className="text-center">
        <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight">
          The Forgiveness Meter
        </h1>
      </div>

      <div className="mt-8 space-y-4">
        <Meter label="THE FORGIVENESS METER - HOW SORRY I AM?" value={forgive} color="var(--rose)" />

        <div className="card rounded-3xl px-5 py-5">
          <div
            className={[
              "text-sm font-semibold tracking-[0.12em]",
              glitch ? "text-[color:var(--rose)]" : "text-[color:var(--fg)]",
            ].join(" ")}
            style={{
              textShadow: glitch
                ? "2px 0 rgba(255,107,154,.45), -2px 0 rgba(178,31,58,.25)"
                : "none",
              transform: glitch ? "translateX(1px)" : "none",
            }}
          >
            {forgive >= 85 ? "ERROR: TOO MUCH LOVE DETECTED" : "CALIBRATING…"}
          </div>
          <div className="mt-2 text-xs tracking-[0.22em] text-[color:var(--muted)]">
            System halted at 85%, it is unmeasurable.
          </div>
        </div>

        <Meter label="CUTENESS METER" value={cute} color="var(--pink)" />

        <div className="card rounded-3xl px-5 py-5">
          <div className="text-sm font-semibold tracking-[0.12em] text-[color:var(--fg)]">
            STATUS: BROKEN AT 120%
          </div>
          <div className="mt-2 text-xs tracking-[0.22em] text-[color:var(--muted)]">
            Technician’s note: “unfixable (you are too cute)”.
          </div>
        </div>
      </div>

      <Link
        href="/question"
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--rose)] px-6 py-4 text-sm font-semibold tracking-[0.18em] text-white shadow-[0_18px_50px_rgba(178,31,58,0.20)] transition hover:translate-y-[-1px] hover:shadow-[0_22px_60px_rgba(178,31,58,0.22)] active:translate-y-0"
      >
        FINAL QUESTION
      </Link>
    </>
  );
}

export default function MeterPage() {
  return (
    <Shell
      backgroundImage={PAGE_IMAGES.meter}
  
    >
      <MeterContent />
    </Shell>
  );
}
