import { $theme } from "@/shared/atoms/$theme";
import { ThemeToggleButton } from "@/shared/components/ThemeToggleButton";
import { css } from "@/styled-system/css";
import { hstack } from "@/styled-system/patterns";
import { FaGithub } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { useRecoilState } from "recoil";

function Header() {
  const icon = css({
    fontSize: "2xl",
    cursor: "pointer",
  });
  return (
    <div
      className={hstack({
        justifyContent: "space-between",
        px: 100,
        py: 4,
        borderBottom: "1px solid #eaeaea",
      })}
    >
      <p
        className={css({
          fontSize: "xl",
          fontWeight: "bold",
        })}
      >
        blog
      </p>

      <div
        className={hstack({
          gap: 6,
        })}
      >
        <IoIosSearch className={icon} />
        <FaGithub className={icon} />
        <ThemeToggleButton />
      </div>
    </div>
  );
}

export default Header;
