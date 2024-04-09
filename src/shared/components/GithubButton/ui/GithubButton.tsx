import { css } from "@/styled-system/css";
import { FaGithub } from "react-icons/fa";
import { navigateToGithub } from "../lib";
import { useTheme } from "@/shared/hooks";
import { hstack } from "@/styled-system/patterns";

function GithubButton() {
  const { theme } = useTheme();

  const buttonStyle = hstack({
    width: "36px",
    height: "36px",
    justifyContent: "center",
    alignItems: "center",
    rounded: "md",
    cursor: "pointer",
    WebkitTapHighlightColor: "transparent !important",
    _hover: {
      bg: theme === "light" ? "gray.100" : "gray.700",
    },
  });

  const iconStyle = css({
    fontSize: "24px",
    sm: { fontSize: "26px" },
    cursor: "pointer",
  });

  return (
    <button className={buttonStyle}>
      <FaGithub onClick={navigateToGithub} className={iconStyle} />
    </button>
  );
}
export default GithubButton;
