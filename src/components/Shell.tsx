"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { REVEAL_DELAY_MS, RevealProvider } from "./RevealContext";

const steps = [
  { href: "/letter/", label: "Letter" }, // Added trailing slashes to match deployment paths
  { href: "/feed/", label: "Apology" },
  { href: "/meter/", label: "Meter" },
  { href: "/question/", label: "Question" },
];

export function Shell({
  children,
  footer,
  backgroundImage,
}: {
  children: React.ReactNode;
  footer?: React.ReactNode;
  backgroundImage?: string;
}) {
  const pathname = usePathname();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setRevealed(false);
    const timer = window.setTimeout(() => setRevealed(true), REVEAL_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  // HELPER FUNCTION: Injects the /devu subfolder prefix dynamically if it's missing
  const getCleanAssetPath = (src: string | undefined) => {
    if (!src) return "";
    if (src.startsWith("http") || src.startsWith("data:")) return src;
    return src.startsWith("/devu") ? src : `/devu${src}`;
  };

  return (
    <div className="relative min-h-screen">
      {backgroundImage ? (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
          <img
            src={getCleanAssetPath(backgroundImage)} // Modified to catch background updates
            alt=""
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-[1.7px] saturate-[0.88]"
          />
          <div className="absolute inset-0 bg-[#f9f8f3]/62" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-[#f9f8f3]/15 to-[#f9f8f3]/35" />
        </div>
      ) : null}

      <RevealProvider revealed={revealed}>
        <motion.div
          className="relative z-10"
          initial={false}
          animate={{
            opacity: revealed ? 1 : 0,
            y: revealed ? 0 : 16,
          }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ pointerEvents: revealed ? "auto" : "none" }}
          aria-hidden={!revealed}
        >
          <header className="mx-auto flex w-full max-w-[550px] items-center justify-between px-5 pt-6">
            <div className="flex items-center gap-2 text-xs tracking-[0.24em] text-[color:var(--muted)]">
              <span className="text-sm">🌹</span>
              <span>PREPARED WITH LOVE,<br /> FOR MY BABY</span>
            </div>

            <nav className="hidden items-center gap-2 sm:flex">
              {steps.map((s) => {
                // Safely checks path match patterns for highlighting nav elements
                const active = pathname === s.href || pathname === s.href.replace(/\/$/, "");
                return (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={[
                      "rounded-full px-3 py-1 text-xs transition",
                      active
                        ? "bg-black/5 text-[color:var(--fg)]"
                        : "text-[color:var(--muted)] hover:bg-black/5 hover:text-[color:var(--fg)]",
                    ].join(" ")}
                  >
                    {s.label}
                  </Link>
                );
              })}
            </nav>
          </header>

          <main className="mx-auto w-full max-w-[520px] px-5 pb-10 pt-10">
            {children}
          </main>

          {footer ? (
            <footer className="mx-auto w-full max-w-[520px] px-5 pb-10">
              {footer}
            </footer>
          ) : null}
        </motion.div>
      </RevealProvider>
    </div>
  );
}
