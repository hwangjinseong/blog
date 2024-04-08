import { css } from "@/styled-system/css";
import { IoIosSearch } from "react-icons/io";
import { useSearch } from "../hook";

function SearchButton() {
  const {
    isSearchOpen,
    searchForm,
    handleClickSearchButton,
    handleChangeSearchForm,
  } = useSearch();

  return (
    <input
      type="text"
      className={css({
        width: "300px",
        border: "1px solid black",
        borderRadius: "3px",
        animation: "alternate 0.5s ease-in-out infinite",
        transitionDuration: "fast",
      })}
      value={searchForm}
      onChange={(e) => handleChangeSearchForm(e)}
    />
  );
}

export default SearchButton;
