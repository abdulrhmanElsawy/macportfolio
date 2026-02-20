import { create } from "zustand";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { immer } from "zustand/middleware/immer";
const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) {
            console.warn(`Window with key "${windowKey}" does not exist`);
            return;
        }
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
    }),

    closeWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) {
            console.warn(`Window with key "${windowKey}" does not exist`);
            return;
        }
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
    }),

    focusWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) {
            console.warn(`Window with key "${windowKey}" does not exist`);
            return;
        }
        if (!win.isOpen) {
            console.warn(`Cannot focus closed window "${windowKey}"`);
            return;
        }
        win.zIndex = state.nextZIndex++;
    }),

  })),
);

export default useWindowStore;