import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/404";
import CartPage from "./pages/cart";
import MainPage from "./pages/main";
import Layout from "./layout";

export enum ROUTES {
  DEFAULT = "/",
  CART = "/cart",
}

interface Props {}

const Component: React.FC<Props> = () => {
  return (
    <Routes>
      <Route path={ROUTES.DEFAULT} element={<Layout />}>
        <Route path={ROUTES.DEFAULT} element={<MainPage />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Component;
