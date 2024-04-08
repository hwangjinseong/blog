import { atom } from "recoil";
import { ThemeType } from "../types/model";

export const $theme = atom<ThemeType>({
  key: "$theme",
  default: "light",
});
