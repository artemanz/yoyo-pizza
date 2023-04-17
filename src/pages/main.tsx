import { MobileCartButton, Pizza, Sorting } from "@/components";
import React from "react";

interface Props {}

const MainPage: React.FC<Props> = () => {
  return (
    <main>
      <Sorting />
      <Pizza />
      <MobileCartButton />
    </main>
  );
};

export default MainPage;
