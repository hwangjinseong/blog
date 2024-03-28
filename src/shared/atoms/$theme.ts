import { atom } from "recoil";
import { Theme } from "../types/Theme";

export const $theme = atom<Theme>({
  key: "$theme",
  default: "light",
});
