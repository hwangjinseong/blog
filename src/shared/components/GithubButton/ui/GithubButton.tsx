import { css } from "@/styled-system/css";
import { FaGithub } from "react-icons/fa";
import { navigateToGithub } from "../lib";
import { useTheme } from "@/shared/hooks";

function GithubButton() {
  const { theme } = useTheme();

  const iconStyle = css({
    fontSize: "xl",
    sm: { fontSize: "2xl" },
    cursor: "pointer",
    color: theme === "light" ? "black" : "white",
  });

  return <FaGithub onClick={navigateToGithub} className={iconStyle} />;
}
export default GithubButton;
