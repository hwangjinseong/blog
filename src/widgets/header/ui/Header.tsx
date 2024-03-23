import { hstack } from "@/styled-system/patterns";
import { FaGithub } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

function Header() {
  return (
    <div
      className={hstack({
        justifyContent: "space-between",
        p: 10,
      })}
    >
      <h1>blog</h1>
      <div
        className={hstack({
          gap: 2,
        })}
      >
        <FaGithub />
        <FiSun />
      </div>
    </div>
  );
}

export default Header;
