import React from "react";
import c from "./styles.module.scss";

type Props = {};

const PaymentPopup = (props: Props) => {
  return (
    <div className={c.PaymentPopup}>
      <div className={c.Backdrop} />
      <p className={c._Message}>Сервис временно недоступен.</p>
    </div>
  );
};

export default PaymentPopup;
