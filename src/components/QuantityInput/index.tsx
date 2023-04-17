import React from "react";
import c from "./styles.module.scss";

interface Props {
  quantity: number;
  increase(): void;
  decrease(): void;
}

const QuantityInput: React.FC<Props> = ({ increase, decrease, quantity }) => {
  const [disabled, setDisabled] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (quantity > 99) {
      setDisabled(true);
    }
  }, [quantity]);

  return (
    <div className={c.QuantityInput}>
      <button onClick={decrease} className={c.Action}>
        –
      </button>
      <p className={c.Value}>{quantity}</p>
      <button disabled={disabled} onClick={increase} className={c.Action}>
        +
      </button>
    </div>
  );
};

export default QuantityInput;
