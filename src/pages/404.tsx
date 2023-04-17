import React from "react";

interface Props {}

const NotFound: React.FC<Props> = () => {
  return (
    <main>
      <h1 className="NotFound">Данной страницы не существует 😔</h1>
    </main>
  );
};

export default NotFound;
