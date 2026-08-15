import { create } from "zustand";
import { persist } from "zustand/middleware";

type WatchState = {
  codes: string[];
  toggle: (code: string) => void;
  has: (code: string) => boolean;
};

export const useWatchlist = create<WatchState>()(
  persist(
    (set, get) => ({
      codes: [],
      toggle: (code) =>
        set((s) => ({
          codes: s.codes.includes(code)
            ? s.codes.filter((c) => c !== code)
            : [...s.codes, code],
        })),
      has: (code) => get().codes.includes(code),
    }),
    { name: "tracker-watchlist" },
  ),
);
