import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  userCart: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "get-user-cart":
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
  const getUserCart = (data) => {
    dispatch({
      type: "get-user-cart",
      cart: data,
    });
  };

  return (
    <UserContext.Provider value={{ state, actions: { getUserCart } }}>
      {children}
    </UserContext.Provider>
  );
};

// case "receive-user-data":
//   return {
//     ...state,
//     currentUser: action.user,
//     authenticated: action.isAuthenticated,
//     stillLoading: action.isLoading,
//   };

// SET currentUser to authenticated user
// const receiveUserData = (user, isAuthenticated, isLoading) => {
//   console.log("data in func", user, isAuthenticated, isLoading);
//   dispatch({
//     type: "receive-user-data",
//     user,
//     isAuthenticated,
//     isLoading,
//   });
// };
