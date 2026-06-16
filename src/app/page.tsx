"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoaderPage() {
  const router = useRouter();
  const [p, setP] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setP((cur) => Math.min(100, cur + 1));
    }, 55);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (p < 100) return;
    const t = window.setTimeout(() => router.push("/letter"), 450);
    return () => window.clearTimeout(t);
  }, [p, router]);

  return (
    <div className="min-h-screen paper">
      <div className="mx-auto flex min-h-screen w-full max-w-[520px] flex-col px-5">
        <div className="pt-10 text-center text-3xl">🌹</div>

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="font-serif text-2xl font-semibold tracking-tight text-[color:var(--fg)]">
            Something special is loading for you…
          </h1>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            A small page. A real apology. No pressure.
          </p>

          <div className="mt-10 w-full">
            <div className="h-2 w-full rounded-full bg-black/10">
              <motion.div
                className="h-2 rounded-full bg-[color:var(--rose)]"
                initial={{ width: "0%" }}
                animate={{ width: `${p}%` }}
                transition={{ ease: "linear", duration: 0.2 }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px] tracking-[0.22em] text-[color:var(--muted)]">
              <span>LOADING</span>
              <span>{p}%</span>
            </div>
          </div>
        </div>

        <div className="pb-10 text-center text-[11px] tracking-[0.28em] text-[color:var(--muted)]">
          PREPARED WITH LOVE <span className="tracking-normal">♥</span>
        </div>
      </div>
    </div>
  );
}
