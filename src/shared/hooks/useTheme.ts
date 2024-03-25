import { $theme } from "@/shared/atoms/$theme";
import { useRecoilState } from "recoil";

function useTheme() {
  const [theme, setTheme] = useRecoilState($theme);

  function handleClickTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return { theme, handleClickTheme };
}

export default useTheme;
