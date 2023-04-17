import clsx from "clsx";
import React from "react";
import PizzaLoader from "./Loader.class";
import c from "./styles.module.scss";

interface Props extends React.HTMLAttributes<HTMLCanvasElement> {}

const Loader: React.FC<Props> = ({ className }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const pizza = new PizzaLoader(canvas);

    (function update() {
      requestAnimationFrame(update);
      pizza.update();
    })();
  }, []);

  return (
    <canvas className={clsx(c.Loader, className)} ref={canvasRef}></canvas>
  );
};

export default Loader;
