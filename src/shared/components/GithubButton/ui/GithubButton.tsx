import { css } from "@/styled-system/css";
import { FaGithub } from "react-icons/fa";
import { navigateToGithub } from "../lib";
import { useTheme } from "@/shared/hooks";

function GithubButton() {
  const { theme } = useTheme();

  const iconStyle = css({
    fontSize: "16px",
    sm: { fontSize: "20px" },
    cursor: "pointer",
    color: theme === "light" ? "black" : "white",
  });

  return <FaGithub onClick={navigateToGithub} className={iconStyle} />;
}
export default GithubButton;
