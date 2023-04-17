import React from "react";
import PizzaItem from "./PizzaItem";
import c from "./styles.module.scss";

import type { Pizza as TPizza } from "@/common/types/pizza";
import Loader from "../Loader";

import { fetchPizzas } from "@/common/store/slices/pizzasSlice";
import {
  AppDispatch,
  filterSelector,
  pizzasSelector,
  searchSelector,
} from "@/common/store";
import { useDispatch, useSelector } from "react-redux";

interface Props {}

const Pizza: React.FC<Props> = () => {
  const filter = useSelector(filterSelector);
  const search = useSelector(searchSelector);
  const { items: pizzas, status } = useSelector(pizzasSelector);
  const dispatch = useDispatch<AppDispatch>();

  async function getPizzas() {
    try {
      await dispatch(fetchPizzas({ search, filter }));
    } catch (e) {
      console.error(e);
    }
  }

  React.useEffect(() => {
    getPizzas();
  }, [filter, search]);

  const PizzasGrid = () => {
    function renderPizzas(pizza: TPizza) {
      return (
        <li key={pizza.id} className={c._Item}>
          <PizzaItem pizza={pizza} />
        </li>
      );
    }

    if (status == "pending") return <Loader className={c.Loader} />;
    if (status == "rejected")
      return (
        <p>
          Произошла ошибка. Попробуйте перезагрузить страницу или зайти позже.
        </p>
      );

    if (!pizzas.length)
      return <p className={c.ZeroPizzas}>Таких пицц нет 😔</p>;
    return <ul className={c.PizzasGrid}>{pizzas.map(renderPizzas)}</ul>;
  };

  return (
    <section>
      <h2 className={c.title}>Все пиццы</h2>
      <PizzasGrid />
    </section>
  );
};

export default Pizza;
