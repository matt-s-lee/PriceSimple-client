import { createContext, useReducer, useState } from "react";

export const UserContext = createContext();

const initialState = {
  currentUser: null,
  authenticated: false,
  stillLoading: false,
};

const reducer = (state, action) => {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case "receive-user-data":
      return {
        ...state,
        currentUser: action.user.user,
        authenticated: action.user.isAuthenticated,
        stillLoading: action.user.isLoading,
      };
    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // SET currentUser to authenticated user
  const receiveUserData = (data) => {
    console.log("data in func", data);
    dispatch({
      type: "receive-user-data",
      user: data,
    });
  };

  return (
    <UserContext.Provider value={{ state, actions: { receiveUserData } }}>
      {children}
    </UserContext.Provider>
  );
  //   const [user, setUser] = useState();
  //   const [isAuthenticated, setIsAuthenticated] = useState();
  //   const [isLoading, setIsLoading] = useState();

  //   return (
  //     <UserContext.Provider
  //       value={{ user, setUser, isAuthenticated, setIsAuthenticated, isLoading, setIsLoading }}
  //     >
  //       {children}
  //     </UserContext.Provider>
  //   );
};
