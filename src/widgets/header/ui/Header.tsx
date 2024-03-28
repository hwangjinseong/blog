import { GithubButton } from "@/shared/components/GithubButton";
import { ThemeToggleButton } from "@/shared/components/ThemeToggleButton";
import { useTheme } from "@/shared/hooks";
import { css } from "@/styled-system/css";
import { hstack } from "@/styled-system/patterns";

function Header() {
  const { theme } = useTheme();

  const headerStyle = hstack({
    w: "100%",
    h: "60px",
    paddingX: 4,
    bg: theme === "light" ? "white" : "purple.800",
    alignItems: "center",
    justifyContent: "space-between",
  });

  const textStyle = css({
    fontSize: "xl",
    fontWeight: "bold",
    marginLeft: "85px",
  });

  const iconContainerStyle = hstack({
    gap: 6,
    paddingRight: "85px",
  });

  return (
    <div className={headerStyle}>
      <p className={textStyle}>blog</p>
      <div className={iconContainerStyle}>
        <GithubButton />
        <ThemeToggleButton />
      </div>
    </div>
  );
}

export default Header;
