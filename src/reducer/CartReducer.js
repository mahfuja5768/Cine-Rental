const initialState = {
  cartData: [],
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    console.log("r->", state.cartData);
    return {
      cartData: [...state.cartData, action.payload],
    };
  } else if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cartData: state.cartData.filter((x) => x.id != action.payload.id),
    };
  }
  //   switch (action.type) {
  //     case "ADD_TO_CART":
  //       console.log(action.payload, initialState.cartData);
  //       return {
  //         cartData: [...state.cartData, action.payload],
  //       };
  //       break;
  //     case "REMOVE_FROM_CART":
  //       return {
  //         ...state,
  //         cartData: state.cartData.filter((x) => x.id != action.payload.id),
  //       };
  //       break;
  //     default:
  //       return state;
  //   }
};

export { initialState, cartReducer };
