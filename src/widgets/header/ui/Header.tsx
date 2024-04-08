import { GithubButton } from "@/shared/components/GithubButton";
import { SearchButton } from "@/shared/components/SearchButton";
import { ThemeToggleButton } from "@/shared/components/ThemeToggleButton";
import { useTheme } from "@/shared/hooks";
import { css } from "@/styled-system/css";
import { hstack } from "@/styled-system/patterns";

function Header() {
  const headerStyle = hstack({
    w: "100%",
    h: "60px",
    alignItems: "center",
    justifyContent: "space-between",
  });

  const textStyle = css({
    fontSize: "22px",
    sm: { fontSize: "26px" },
    fontFamily: "Rubik Scribble, system-ui",
    fontWeight: 700,
  });

  const iconContainerStyle = hstack({
    gap: 2,
    sm: { gap: 3 },
  });

  return (
    <div className={headerStyle}>
      <p className={textStyle}>Blog</p>
      <div className={iconContainerStyle}>
        <GithubButton />
        <ThemeToggleButton />
      </div>
    </div>
  );
}

export default Header;
