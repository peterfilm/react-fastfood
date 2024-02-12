import "./shoppingList.scss";
import { useEffect, useContext} from "react";
import { FoodContext } from "../context";

const SLFinal = () => {
  const { removeAll, setStatus } = useContext(FoodContext)
  const timer = setTimeout(() => setStatus(0), 3000);

  useEffect(() => {
    
    if (timer === 0) {
      return () => {
        setStatus(0)
        clearTimeout(timer);
      };
    }
  }, [setStatus, timer]);

  useEffect(() => removeAll(), [])

  return (
    <>
      <div>
        <div className="title title__small">Thanks for order</div>
        <div className="shopping__text">You will now be returned to cart</div>
      </div>
    </>
  );
};

export default SLFinal;
