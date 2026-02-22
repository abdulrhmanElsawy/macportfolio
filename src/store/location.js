import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "#constants";

const DEFAULT_LOCATION = locations?.work ?? Object.values(locations ?? {})[0] ?? null;

const isValidLocation = (value) =>
  value != null && typeof value === "object" && "id" in value;

const useLocationStore = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location) =>
      set((state) => {
        state.activeLocation = isValidLocation(location)
          ? location
          : DEFAULT_LOCATION;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  }))
);

export default useLocationStore;