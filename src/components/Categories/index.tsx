import React from "react";
import c from "./styles.module.scss";
import clsx from "clsx";
import categories from "@/common/constants/categories";
import { useDispatch, useSelector } from "react-redux";
import { filterSelector } from "@/common/store";
import { SET_FILTER } from "@/common/store/slices/filterSlice";

interface Props {}

const Categories: React.FC<Props> = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  function createCategory(cat: typeof categories[number]) {
    return (
      <li
        key={cat.id}
        className={clsx(c.listItem, cat.id === filter && c.active)}
      >
        <button onClick={() => dispatch(SET_FILTER(cat.id))}>
          {cat.value}
        </button>
      </li>
    );
  }

  return <ul className={c.list}>{categories.map(createCategory)}</ul>;
};

export default Categories;
