import { useState } from "react";

function useSearch() {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const [searchForm, setSearchForm] = useState<string>("");

  function handleClickSearchButton() {
    setIsSearchOpen(!isSearchOpen);
  }

  function handleChangeSearchForm(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchForm(e.target.value);
  }

  return {
    searchForm,
    setSearchForm,
    isSearchOpen,
    setIsSearchOpen,
    handleClickSearchButton,
    handleChangeSearchForm,
  };
}

export default useSearch;
