import React from "react";
import { AppButtonOutlined } from "../Buttons";
import { CartPizza, Pizza } from "../../common/types/pizza";
import c from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { addPizza } from "@/common/store/slices/cartSlice";

const DOUGS = ["тонкое", "традиционное"];

interface Props {
  pizza: Pizza;
}

type Dough = Pizza["types"][number];
type Size = Pizza["sizes"][number];

const PizzaItem: React.FC<Props> = ({ pizza }) => {
  const dispatch = useDispatch();

  const [currentDough, setCurrentDough] = React.useState<Dough>(pizza.types[0]);
  const [currentSize, setCurrentSize] = React.useState<Size>(pizza.sizes[0]);
  const [currentPrice, setCurrentPrice] = React.useState<Size>(pizza.prices[0]);

  const currentPizza = React.useMemo<CartPizza>(
    () => ({
      ...pizza,
      type: currentDough,
      size: currentSize,
      price: currentPrice,
    }),
    [currentDough, currentSize, currentPrice]
  );



  const DoughTypes = () => {
    return (
      <div className={c._Dough}>
        {pizza.types.map((type) => {
          return (
            <label
              key={type}
              onClick={() => setCurrentDough(type)}
              className={c._DoughType}
            >
              <input type="radio" readOnly checked={currentDough == type} />
              <span>{type !== undefined ? DOUGS[type] : ""}</span>
            </label>
          );
        })}
      </div>
    );
  };

  const Sizes = () => {
    return (
      <div className={c._Size}>
        {pizza.sizes.map((size, idx) => {
          return (
            <label
              key={size}
              onClick={() => {
                setCurrentSize(size);
                setCurrentPrice(pizza.prices[idx]);
              }}
              className={c._SizeValue}
            >
              <input type="radio" readOnly checked={currentSize == size} />
              <span>{size}см</span>
            </label>
          );
        })}
      </div>
    );
  };

  const Actions = () => {
    return (
      <div className={c._Actions}>
        <p className={c._Price}>{currentPrice} ₽</p>
        <AppButtonOutlined
          onClick={() => {
            dispatch(addPizza(currentPizza));
          }}
          className={c._AddButton}
        >
          В корзину
        </AppButtonOutlined>
      </div>
    );
  };

  return (
    <article className={c.Pizza}>
      <figure className={c._Image}>
        <img src={pizza.imageUrl} alt={pizza.title} />
      </figure>
      <h3 className={c._Title}>{pizza.title}</h3>
      <p className={c._Description}>{pizza.description}</p>
      <div className={c._Properties}>
        <DoughTypes />
        <Sizes />
      </div>
      <Actions />
    </article>
  );
};

export default PizzaItem;
