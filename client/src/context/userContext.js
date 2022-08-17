import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  userCart: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update-user-cart":
      return {
        ...state,
        userCart: action.cart,
      };
    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateUserCart = (data) => {
    dispatch({
      type: "update-user-cart",
      cart: data,
    });
  };

  return (
    <UserContext.Provider value={{ state, actions: { updateUserCart } }}>
      {children}
    </UserContext.Provider>
  );
};
