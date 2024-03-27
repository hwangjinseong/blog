import { css } from "@/styled-system/css";
import { FaGithub } from "react-icons/fa";
import { navigateToGithub } from "../lib";
import { useTheme } from "@/shared/hooks";

function GithubButton() {
  const { theme } = useTheme();

  return (
    <FaGithub
      onClick={navigateToGithub}
      className={css({
        fontSize: "2xl",
        cursor: "pointer",
        color: theme === "light" ? "black" : "white",
      })}
    />
  );
}
export default GithubButton;
