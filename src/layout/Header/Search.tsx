import debounce from "@/common/functions/debounce";
import { SET_SEARCH } from "@/common/store/slices/filterSlice";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import c from "./styles.module.scss"

const Search = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();

  const debouncedCallback = React.useCallback(
    debounce((value: string) => {
      dispatch(SET_SEARCH(value));
    }, 500),
    []
  );

  React.useEffect(() => {
    debouncedCallback(value);
  }, [value]);

  return (
    <label className={c.SearchInput}>
      <AiOutlineSearch color="currentColor" size={20} />
      <input
        key={"searchInput"}
        type="search"
        placeholder="Поиск..."
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </label>
  );
};

export default Search
