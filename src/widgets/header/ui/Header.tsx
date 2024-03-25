import { ThemeToggleButton } from "@/shared/components/ThemeToggleButton";
import { css } from "@/styled-system/css";
import { hstack } from "@/styled-system/patterns";
import { FaGithub } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

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

const icon = css({
  fontSize: "2xl",
  cursor: "pointer",
});

function Header() {
  return (
    <div className={headerContainer}>
      <p className={title}>blog</p>
      <div className={iconContainer}>
        <IoIosSearch className={icon} />
        <FaGithub className={icon} />
        <ThemeToggleButton />
      </div>
    </div>
  );
}

export default Header;
