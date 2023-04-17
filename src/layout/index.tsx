import type { FC, ReactNode } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

interface Props {
}

const Layout: FC<Props> = () => {
  return (
    <div className="content-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
