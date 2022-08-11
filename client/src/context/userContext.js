import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  currentUser: null,
  authenticated: false,
  stillLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "receive-user-data":
      return {
        ...state,
        currentUser: action.user,
        authenticated: action.isAuthenticated,
        stillLoading: action.isLoading,
      };
    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // SET currentUser to authenticated user
  const receiveUserData = (user, isAuthenticated, isLoading) => {
    console.log("data in func", user, isAuthenticated, isLoading);
    dispatch({
      type: "receive-user-data",
      user,
      isAuthenticated,
      isLoading,
    });
  };

  return (
    <UserContext.Provider value={{ state, actions: { receiveUserData } }}>
      {children}
    </UserContext.Provider>
  );
};
