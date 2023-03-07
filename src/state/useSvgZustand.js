import { create } from "zustand";

const useSvgZustand = create((set) => ({
  size: 50,
  stroke: 1.5,
  initialColor: "#000000",
  setSize: (number) => set({ size: number }),
  setStroke: (number) => set({ stroke: number / 20 }),
  setInitialColor: (colorString) => set({ initialColor: colorString }),
}));

export default useSvgZustand;
