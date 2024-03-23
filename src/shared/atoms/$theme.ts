import { atom } from "recoil";

type Theme = "light" | "dark";

export const $theme = atom<Theme>({
  key: "$theme",
  default: "light",
});
