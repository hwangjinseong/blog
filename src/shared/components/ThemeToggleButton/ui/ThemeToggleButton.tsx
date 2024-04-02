import { useTheme } from "@/shared/hooks";
import { css } from "@/styled-system/css";
import { FiSun } from "react-icons/fi";
import { IoMoon } from "react-icons/io5";

function ThemeToggleButton() {
  const { theme, handleClickTheme } = useTheme();

  const iconStyle = css({
    fontSize: "16px",
    sm: { fontSize: "20px" },
    cursor: "pointer",
    color: theme === "light" ? "black" : "white",
  });

  return (
    <button onClick={handleClickTheme}>
      {theme === "light" ? (
        <FiSun className={iconStyle} />
      ) : (
        <IoMoon className={iconStyle} />
      )}
    </button>
  );
}

export default ThemeToggleButton;
