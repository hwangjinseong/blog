import { GithubButton } from "@/shared/components/GithubButton";
import { SearchButton } from "@/shared/components/SearchButton";
import { ThemeToggleButton } from "@/shared/components/ThemeToggleButton";
import { useTheme } from "@/shared/hooks";
import { css } from "@/styled-system/css";
import { hstack } from "@/styled-system/patterns";

function Header() {
  const { theme } = useTheme();

  const headerContainer = hstack({
    justifyContent: "space-between",
    px: 200,
    py: 4,
    borderBottom: "1px solid #eaeaea",
    backgroundColor: theme === "light" ? "white" : "black",
  });

  const title = css({
    fontSize: "xl",
    fontWeight: "bold",
    color: theme === "light" ? "black" : "white",
  });

  const iconContainer = hstack({
    gap: 6,
  });
  return (
    <div className={headerContainer}>
      <p className={title}>blog</p>
      <div className={iconContainer}>
        <SearchButton />
        <GithubButton />
        <ThemeToggleButton />
      </div>
    </div>
  );
}

export default Header;
