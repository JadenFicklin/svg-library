import { create } from "zustand";
import { svgObjects } from "../svg-library/svgs";

const useSvgListZustand = create((set) => ({
  svgList: svgObjects,
  setSvgList: (newList) => set({ svgList: newList }),
}));

export default useSvgListZustand;
