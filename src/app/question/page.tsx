"use client";

import { Shell } from "@/components/Shell";
import { PAGE_IMAGES } from "@/lib/images";
import { useHerName } from "@/lib/names";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { useState } from "react";

export default function QuestionPage() {
  const her = useHerName();
  const [done, setDone] = useState(false);

  const blast = () => {
    const duration = 1800;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        startVelocity: 38,
        spread: 360,
        ticks: 190,
        origin: { x: Math.random(), y: Math.random() * 0.25 },
        colors: ["#b21f3a", "#ff6b9a", "#1f1a17", "#ffffff"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <Shell
      backgroundImage={done ? PAGE_IMAGES.forgiven : PAGE_IMAGES.question}
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="grid place-items-center"
        >
          <div className="text-5xl">🌹</div>
          <div className="mt-6 font-serif text-4xl font-semibold tracking-tight">
            You are still my love. 
            <br />Always. <br/>Especially on hard days, {her.name}.
          </div>
          <div className="mt-6 text-sm text-[color:var(--muted)]">
            I am really sorry baby, please let me fix my mistakes.
          </div>
        </motion.div>

        <div className="mt-10 w-full">
          {!done ? (
            <button
              type="button"
              onClick={() => {
                setDone(true);
                blast();
              }}
              className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--rose)] px-6 py-4 text-sm font-semibold tracking-[0.18em] text-white shadow-[0_18px_50px_rgba(178,31,58,0.20)] transition hover:translate-y-[-1px] hover:shadow-[0_22px_60px_rgba(178,31,58,0.22)] active:translate-y-0"
            >
              FORGIVE ME?
            </button>
          ) : (
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="card grid w-full place-items-center rounded-3xl py-10"
            >
              <div className="text-6xl text-[color:var(--rose)]">♥</div>
              <div className="mt-4 text-[11px] font-medium tracking-[0.34em] text-[color:var(--muted)]">
                I AM SORRY, I LOVE YOU
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Shell>
  );
}

