import { useTheme } from "@/shared/hooks";
import { css } from "@/styled-system/css";
import { IoIosSearch } from "react-icons/io";
import { useSearch } from "../hook";

function SearchButton() {
  const { theme } = useTheme();

  const {
    isSearchOpen,
    searchForm,
    handleClickSearchButton,
    handleChangeSearchForm,
  } = useSearch();

  const icon = css({
    fontSize: "2xl",
    cursor: "pointer",
    color: theme === "light" ? "black" : "white",
  });

  const searchInput = css({
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    width: "67%",
    display: isSearchOpen ? "block" : "none",
    border: "1px solid black",
    borderRadius: "3px",
  });

  return (
    <>
      {isSearchOpen && (
        <input
          type="text"
          className={searchInput}
          value={searchForm}
          onChange={(e) => handleChangeSearchForm(e)}
        />
      )}
      <IoIosSearch className={icon} onClick={handleClickSearchButton} />
    </>
  );
}

export default SearchButton;
