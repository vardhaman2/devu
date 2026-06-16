"use client";

import { createContext, useContext } from "react";

export const REVEAL_DELAY_MS = 1000;

const RevealContext = createContext(false);

export function RevealProvider({
  revealed,
  children,
}: {
  revealed: boolean;
  children: React.ReactNode;
}) {
  return (
    <RevealContext.Provider value={revealed}>{children}</RevealContext.Provider>
  );
}

export function usePageRevealed() {
  return useContext(RevealContext);
}
