import { Arrow } from "@/assets/images";
import SORTING_TYPES from "@/common/constants/sortingTypes";
import { RootState, sortingSelector } from "@/common/store";
import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import c from "./styles.module.scss";

interface Props {}

const Sorting: React.FC<Props> = () => {
  const { sortingDuration } = useSelector(sortingSelector);
  const dispatch = useDispatch();

  const [dropdown, setDropdown] = React.useState<boolean>(false);
  const [sortingWord, setSortingWord] = React.useState("популярности");

  React.useEffect(() => {
    function clickHandler(e: MouseEvent) {
      const target = e.target as HTMLElement;
      console.log(1);

      if (
        !target.closest(
          "[data-selector=dropdown],[data-selector=dropdown-trigger]"
        )
      ) {
        setDropdown(false);
      }
    }

    if (dropdown) {
      window.addEventListener("click", clickHandler);
      return () => window.removeEventListener("click", clickHandler);
    }
  }, [dropdown]);

  const Dropdown = () => {
    return (
      <ul className={c._SortDropdown} data-selector="dropdown">
        {SORTING_TYPES.map((type) => (
          <li key={type.id}>
            <button
              onClick={() => {
                dispatch(type.action());
                setSortingWord(type.UI_text);
                setDropdown(false);
              }}
              className={c._SortDropdownButton}
            >
              {type.UI_text}
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={c.Sorting}>
      <figure
        className={clsx(
          c._SortDuration,
          sortingDuration == "desc" && c.rotated
        )}
      >
        <img src={Arrow} alt="Arrow icon" />
      </figure>
      Сортировка по:{" "}
      <button
        type="button"
        onClick={() => {
          setDropdown((prev) => !prev);
        }}
        className={c._SortType}
        data-selector="dropdown-trigger"
      >
        {sortingWord}
      </button>
      {dropdown && <Dropdown />}
    </div>
  );
};

export default Sorting;
