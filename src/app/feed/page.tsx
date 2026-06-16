"use client";

import { Shell } from "@/components/Shell";
import { PAGE_IMAGES } from "@/lib/images";
import { useHerName } from "@/lib/names";
import { motion } from "framer-motion";
import Link from "next/link";

const lines = [
  "I am sorry for the pain I caused, I never meant to hurt you.",
  "I should have been gentle, especially when life was already heavy for you.",
  "I’m sorry I didn’t reach out or be present for 5 long days, but i promise never to repeat it ever again.",
  "You deserved reassurance, not silence.",
  "I let my anger get the better of me. I have realised my mistake and I wont let this happen ever again",
  "I want to be a safe place for you—steady ,kind and always caring.",
  "I would still choose you in every universe.",
  "I’m here, consistently. I won't hurt you with my inconsistency, ever again.",
];

export default function FeedPage() {
  const her = useHerName();

  return (
    <Shell
      backgroundImage={PAGE_IMAGES.apology}
      footer={
        <div className="text-center text-[11px] tracking-[0.24em] text-[color:var(--muted)]">
          SCROLL SLOWLY · TAKE YOUR TIME
        </div>
      }
    >
      <div className="text-center">
        <div className="text-[11px] font-medium tracking-[0.34em] text-[color:var(--muted)]">
          THE APOLOGY
        </div>
        <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight">
          A message feed for {her.name}
        </h1>
      </div>

      <div className="mt-8 space-y-4">
        {lines.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="card rounded-3xl px-5 py-5"
          >
            {/* Added 'text-center' to the line below */}
            <div className="text-center text-sm leading-7 text-[color:var(--fg)]">{t}</div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="card rounded-3xl px-5 py-5"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-[color:var(--muted)]">
            <span>NOTE</span>
          </div>

          <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/5">
            <div className="text-[13px] leading-7 text-[color:var(--fg)]">
              Hey {her.name},
              <br />
              <br />
              I know you have been going through a really tough time. I am sorry I
              made it harder by getting angry and then disappearing emotionally.
              Those four days weren’t just my absence, they were silence when you
              needed presence.
              <br />
              <br />
              If you ever choose to give me a chance, I want to earn it slowly, with love and care,
              checking in, listening without being defensive, and being consistent
              with my efforts. I never wanted to hurt you like this.
              I know it has been repeated multiple times, but this time it is different.
              This time, it has struck an arrow, gotten me to a self realization.
              I would never make you feel disrespected or your emotions not being heard ever again.
              <br />
              <br />
              I just want you to feel cared for, like you always felt
              even after being distant. I hope this universe, my actions and my love brings us back together.
              Stronger than ever before, with more love, more care and more maturity from my side.
              Please trust me this time, I dont wanna leave you alone when you are grieving, I wanna fix my mistakes.
              <br />
              <br />
              Always wishing the best for you no matter what, I love you.
              Please be mine again. I will wait until forever, just to get your forgiveness.
              <br />
              <br />
              Your boy, your pookie,
              <br />
              Vardhaman{"<3"}
            </div>
          </div>
        </motion.div>
      </div>

      <Link
        href="/meter"
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--rose)] px-6 py-4 text-sm font-semibold tracking-[0.18em] text-white shadow-[0_18px_50px_rgba(178,31,58,0.20)] transition hover:translate-y-[-1px] hover:shadow-[0_22px_60px_rgba(178,31,58,0.22)] active:translate-y-0"
      >
        NEXT
      </Link>
    </Shell>
  );
}