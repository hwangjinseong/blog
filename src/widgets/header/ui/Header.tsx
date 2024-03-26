import { GithubButton } from "@/shared/components/GithubButton";
import { SearchButton } from "@/shared/components/SearchButton";
import { ThemeToggleButton } from "@/shared/components/ThemeToggleButton";
import { css } from "@/styled-system/css";
import { hstack } from "@/styled-system/patterns";

const headerContainer = hstack({
  justifyContent: "space-between",
  px: 100,
  py: 4,
  borderBottom: "1px solid #eaeaea",
});

const title = css({
  fontSize: "xl",
  fontWeight: "bold",
});

const iconContainer = hstack({
  gap: 6,
});

function Header() {
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
