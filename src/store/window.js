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
        const topZ = Math.max(
            state.nextZIndex,
            ...Object.values(state.windows).map((w) => w.zIndex ?? 0)
        );
        win.isOpen = true;
        win.zIndex = topZ;
        win.data = data ?? win.data;
        state.nextZIndex = topZ + 1;
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

    minimizeWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
    }),

    toggleMaximize: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        if (!win.isOpen) return;
        win.isMaximized = !win.isMaximized;
    }),

  })),
);

export default useWindowStore;