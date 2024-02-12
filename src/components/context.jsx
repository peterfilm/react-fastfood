import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const FoodContext = createContext();

if (!localStorage.getItem("goods")) {
  localStorage.setItem("goods", JSON.stringify([]));
}

if (!localStorage.getItem("user")) {
  localStorage.setItem("user", JSON.stringify({ userName: "", userTel: "", userEmail: "", userAddress: "" }));
}

let userStorage = JSON.parse(localStorage.getItem("user"))

const initialState = {
  categories: [],
  loading: true,
  randomMeal: {},
  order: JSON.parse(localStorage.getItem("goods")),
  isBasketShow: false,
  timer: null,
  lastAdded: "",
  status: 0,
  showAdded: false,
  userName: userStorage.userName,
  userTel: userStorage.userTel,
  userEmail: userStorage.userEmail,
  userAddress: userStorage.userAddress,
};

export const ContentProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };

  value.incQuantity = (idMeal) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { idMeal: idMeal } });
  };

  value.decQuantity = (idMeal) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { idMeal: idMeal } });
  };

  value.removeFromBasket = (idMeal) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { idMeal: idMeal } });
  };

  value.setMeals = (data) => {
    dispatch({ type: "SET_MEALS", payload: data });
  };

  value.setRandomMeals = (data) => {
    dispatch({ type: "SET_RANDOM_MEAL", payload: data });
  };

  value.setBasketShow = () => {
    dispatch({ type: "SET_BASKET_SHOW" });
  };

  value.setLastAdded = (strMeal) => {
    dispatch({ type: "SET_LAST_ADDED", payload: strMeal });
  };

  value.setTimer = (timer) => {
    dispatch({ type: "SET_TIMER", payload: timer });
  };

  value.clearTimer = () => {
    dispatch({ type: "CLEAR_TIMER" });
  };

  value.setShow = () => {
    dispatch({ type: "SET_SHOW_ADDED" });
  };

  value.removeAll = () => {
    dispatch({ type: "REMOVE_ALL" });
  };

  value.setStatus = (data) => {
    dispatch({ type: "SET_STATUS", payload: data });
  };

  value.setUserName = (data) => {
    dispatch({ type: "SET_USERNAME", payload: data });
  };

  value.setUserTel = (data) => {
    dispatch({ type: "SET_USERTEL", payload: data });
  };

  value.setUserEmail = (data) => {
    dispatch({ type: "SET_USEREMAIL", payload: data });
  };

  value.setUserAddress = (data) => {
    dispatch({ type: "SET_USERADDRESS", payload: data });
  };

  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};
