"use client";

import { useMemo } from "react";

export function useHerName() {
  const name = "Devanshi";

  const api = useMemo(
    () => ({
      name,
      save: () => {},
    }),
    [name]
  );

  return api;
}

