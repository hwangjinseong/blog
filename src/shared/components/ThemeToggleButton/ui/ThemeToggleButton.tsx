import { useTheme } from "@/shared/hooks";
import { css } from "@/styled-system/css";
import { FiSun } from "react-icons/fi";
import { IoMoon } from "react-icons/io5";

function ThemeToggleButton() {
  const { theme, handleClickTheme } = useTheme();

  const icon = css({
    fontSize: "2xl",
    cursor: "pointer",
    color: theme === "light" ? "black" : "white",
  });

  return (
    <button onClick={handleClickTheme}>
      {theme === "light" ? (
        <FiSun className={icon} />
      ) : (
        <IoMoon className={icon} />
      )}
    </button>
  );
}

export default ThemeToggleButton;
