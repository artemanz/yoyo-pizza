import clsx from "clsx";
import React, { HTMLAttributes } from "react";
import c from "./styles.module.scss";
import { Cart } from "@/assets/images";
import { Link, LinkProps } from "react-router-dom";

interface AppButtondProps extends HTMLAttributes<HTMLButtonElement> {}

const AppButtonOutlined: React.FC<AppButtondProps> = (props) => {
  return (
    <button
      type="button"
      {...props}
      className={clsx(c.AppButton, c.Outlined, props.className)}
    />
  );
};

const AppButtonFilled: React.FC<AppButtondProps> = (props) => {
  return (
    <button
      type="button"
      {...props}
      className={clsx(c.AppButton, c.Filled, props.className)}
    />
  );
};

interface MobileCartButtonProps extends Omit<LinkProps, "to"> {}

const MobileCartButton: React.FC<MobileCartButtonProps> = (props) => {
  return (
    <Link
      {...props}
      className={clsx(c.MobileCartButton, props.className)}
      to={"cart"}
    >
      <img src={Cart} alt="Cart icon" />
    </Link>
  );
};

export { AppButtonOutlined, MobileCartButton, AppButtonFilled };
