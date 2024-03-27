import { GithubButton } from "@/shared/components/GithubButton";
import { SearchButton } from "@/shared/components/SearchButton";
import { ThemeToggleButton } from "@/shared/components/ThemeToggleButton";
import { useTheme } from "@/shared/hooks";
import { css } from "@/styled-system/css";
import { hstack } from "@/styled-system/patterns";

function Header() {
  const { theme } = useTheme();

  return (
    <div
      className={hstack({
        justifyContent: "space-between",
        px: 200,
        py: 4,
        borderBottom: "1px solid #eaeaea",
        backgroundColor: theme === "light" ? "white" : "black",
      })}
    >
      <p
        className={css({
          fontSize: "xl",
          fontWeight: "bold",
          color: theme === "light" ? "black" : "white",
        })}
      >
        blog
      </p>
      <div
        className={hstack({
          gap: 6,
        })}
      >
        <SearchButton />
        <GithubButton />
        <ThemeToggleButton />
      </div>
    </div>
  );
}

export default Header;
