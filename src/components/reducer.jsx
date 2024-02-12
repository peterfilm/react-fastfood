// Work with Local Storage

//Reducer
export function reducer(state, { type, payload }) {
  let goods, user;
  if (!localStorage.getItem("goods")) {
    localStorage.setItem("goods", JSON.stringify([]));
  }
  goods = JSON.parse(localStorage.getItem("goods"));
  user = JSON.parse(localStorage.getItem("user"));

  switch (type) {
    case "SET_MEALS":
      return {
        ...state,
        categories: payload || [],
        loading: false,
      };

    case "ADD_TO_BASKET": {
      const itemIndex = state.order.findIndex((orderItem) => orderItem.idMeal === payload.idMeal);

      let newOrder = null;

      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };

        goods.push(newItem);
        localStorage.setItem("goods", JSON.stringify(goods));

        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });

        //localStorage
        goods = goods.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
        localStorage.setItem("goods", JSON.stringify(goods));
      }

      return {
        ...state,
        order: newOrder,
      };
    }

    case "REMOVE_FROM_BASKET":
      goods = goods.filter((el) => el.idMeal !== payload.idMeal);
      localStorage.setItem("goods", JSON.stringify(goods));

      return {
        ...state,
        order: state.order.filter((el) => el.idMeal !== payload.idMeal),
      };

    case "INCREMENT_QUANTITY":
      goods = goods.map((el) => {
        if (el.idMeal === payload.idMeal) {
          const newQuantity = el.quantity + 1;
          return {
            ...el,
            quantity: newQuantity,
          };
        } else {
          return el;
        }
      });
      localStorage.setItem("goods", JSON.stringify(goods));

      return {
        ...state,
        order: state.order.map((el) => {
          if (el.idMeal === payload.idMeal) {
            const newQuantity = el.quantity + 1;
            return {
              ...el,
              quantity: newQuantity,
            };
          } else {
            return el;
          }
        }),
      };
    case "DECREMENT_QUANTITY":
      goods = goods
        .map((el) => {
          if (el.idMeal === payload.idMeal) {
            const newQuantity = el.quantity - 1;
            return {
              ...el,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          } else {
            return el;
          }
        })
        .filter((item) => item.quantity > 0);
      localStorage.setItem("goods", JSON.stringify(goods));

      return {
        ...state,
        order: state.order
          .map((el) => {
            if (el.idMeal === payload.idMeal) {
              const newQuantity = el.quantity - 1;
              return {
                ...el,
                quantity: newQuantity >= 0 ? newQuantity : 0,
              };
            } else {
              return el;
            }
          })
          .filter((item) => item.quantity > 0),
      };

    case "SET_RANDOM_MEAL":
      return {
        ...state,
        randomMeal: payload.meals[0] || [],
        loading: false,
      };
    case "SET_BASKET_SHOW":
      if (!state.isBasketShow) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };

    case "SET_SHOW_ADDED":
      clearTimeout(state.timer);
      return {
        ...state,
        showAdded: !state.showAdded,
      };

    case "SET_TIMER":
      return {
        ...state,
        timer: payload,
      };

    case "CLEAR_TIMER":
      clearTimeout(state.timer);
      return {
        ...state,
        timer: null,
      };

    case "SET_LAST_ADDED":
      return {
        ...state,
        lastAdded: payload,
      };

    case "SET_STATUS":
      return {
        ...state,
        status: payload,
      };

    case "SET_USERNAME":
      user.userName = payload;
      localStorage.setItem("user", JSON.stringify(user));
      return {
        ...state,
        userName: payload,
      };

    case "SET_USERTEL":
      user.userTel = payload;
      localStorage.setItem("user", JSON.stringify(user));
      return {
        ...state,
        userTel: payload,
      };

    case "SET_USEREMAIL":
      user.userEmail = payload;
      localStorage.setItem("user", JSON.stringify(user));
      return {
        ...state,
        userEmail: payload,
      };

    case "SET_USERADDRESS":
      user.userAddress = payload;
      localStorage.setItem("user", JSON.stringify(user));
      return {
        ...state,
        userAddress: payload,
      };

    case "SET_ADDED_INFO":
      if (payload === false) {
        return {
          ...state,
          addedInfo: false,
        };
      }
      if (state.addedInfo) {
        return {
          ...state,
          lastAdded: payload,
        };
      } else {
        return {
          ...state,
          addedInfo: true,
          lastAdded: payload,
        };
      }

    case "REMOVE_ALL":
      goods = [];
      localStorage.setItem("goods", JSON.stringify(goods));

      return {
        ...state,
        order: [],
      };

    default:
      return state;
  }
}
