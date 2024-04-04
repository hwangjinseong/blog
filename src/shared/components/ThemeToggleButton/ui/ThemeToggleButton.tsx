import { useTheme } from "@/shared/hooks";
import { css } from "@/styled-system/css";
import { hstack } from "@/styled-system/patterns";
import { BsFillSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { IoMoon } from "react-icons/io5";
import { PiSunFill } from "react-icons/pi";
import { RiSunFill } from "react-icons/ri";

function ThemeToggleButton() {
  const { theme, handleClickTheme } = useTheme();

  const buttonStyle = hstack({
    width: "36px",
    height: "36px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5rem",
    cursor: "pointer",
    _hover: {
      bg: theme === "light" ? "gray.100" : "gray.700",
    },
  });

  const iconStyle = css({
    fontSize: "18px",
    sm: { fontSize: "24px" },
    color: theme === "light" ? "yellow.300" : "white",
  });

  return (
    <button onClick={handleClickTheme} className={buttonStyle}>
      {theme === "light" ? (
        <RiSunFill className={iconStyle} />
      ) : (
        <IoMoon className={iconStyle} />
      )}
    </button>
  );
}

export default ThemeToggleButton;
