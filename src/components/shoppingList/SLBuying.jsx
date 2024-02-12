import "./shoppingList.scss";
import { useContext } from "react";
import { FoodContext } from "../context";
import OrderItem from "../orderItem/OrderItem";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const SLBuying = () => {
  const { setBasketShow, order, removeAll, setStatus } = useContext(FoodContext);
  let total = 0;
  const navigate = useNavigate();
  const isMobilePhone = useMediaQuery({ maxWidth: 768 });

  const handleOrderNow = () => {
    setBasketShow((item) => !item);
    navigate("/products");
  };

  if (order.length !== 0) {
    total = order.map((item) => item.quantity * +item.price).reduce((sum, item) => sum + item);
  }
  const items = order.map((item, index) => <OrderItem key={item.idMeal} index={index} {...item} />);

  return (
    <>
      {order.length === 0 ? (
        <>
          <div className="shopping__empty">Your shopping card is empty</div>{" "}
          <button className="btn btn_322" onClick={handleOrderNow}>
            Start buying!
          </button>
        </>
      ) : (
        <>
          <div className={isMobilePhone ? "shopping__items adaptiveItems" : "shopping__items"}>{items}</div>{" "}
          <div className="shopping__final">
            Total: <span>{total} RUB</span>
          </div>
          <button className="btn shopping__btn" onClick={() => setStatus(1)}>
            Click to Order!
          </button>
          <div onClick={() => removeAll()} className="shopping__removeAll">
            Remove all from Basket
          </div>
        </>
      )}
    </>
  );
};

export { SLBuying };
