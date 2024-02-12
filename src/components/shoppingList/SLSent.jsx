import "./shoppingList.scss";
import { useContext, useEffect, useState} from "react";
import { FoodContext } from "../context";

const SLSent = () => {
  const { setStatus } = useContext(FoodContext);
  const [counter, setCounter] = useState(5)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter === 0) {
        setStatus(3)
        return () => clearTimeout(timer)
      }
      setCounter(counter - 1)
    }, 1000);

  }, [counter]);

  return (
    <div className="shopping__sent">
      <div className="title title__small">Order page</div>
      <div className="shopping__text">Payment will be made on this page</div>
      <div className="shopping__counter title title__black">{counter}</div>
    </div>
  );
};

export {SLSent}