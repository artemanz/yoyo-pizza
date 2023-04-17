import QuantityInput from "@/components/QuantityInput";
import React from "react";
import c from "./CartItem.module.scss";
import pizzaType from "@/common/constants/pizzaType";
import {
  CartItem as TCartItem,
  addItem,
  reduceItem,
  removeItem,
} from "@/common/store/slices/cartSlice";
import { useDispatch } from "react-redux";

interface Props {
  cartPizza: TCartItem;
}

const CartItem: React.FC<Props> = ({ cartPizza: { id, pizza, value } }) => {
  const dispatch = useDispatch();

  function increasePizzaValue() {
    dispatch(addItem(id));
  }
  function decreasePizzaValue() {
    dispatch(reduceItem(id));
  }

  return (
    <li className={c.Item}>
      <div className={c.InfoGroup}>
        <figure className={c.Image}>
          <img src={pizza.imageUrl} alt={pizza.title} loading="lazy" />
        </figure>
        <div className={c.Info}>
          <p className={c.InfoTitle}>{pizza.title}</p>
          <p className={c.InfoProps}>
            {pizzaType[pizza.type]} тесто, {pizza.size} см
          </p>
        </div>
      </div>
      <div className={c.Actions}>
        <div className={c.Quantity}>
          <QuantityInput
            quantity={value}
            increase={increasePizzaValue}
            decrease={decreasePizzaValue}
          />
        </div>
        <p className={c.Price}>{pizza.price * value} ₽</p>
        <button
          onClick={() => dispatch(removeItem(id))}
          className={c.RemoveButton}
        >
          x
        </button>
      </div>
    </li>
  );
};

export default CartItem;
