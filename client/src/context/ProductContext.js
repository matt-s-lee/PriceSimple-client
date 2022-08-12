import { createContext, useReducer } from "react";

export const ProductContext = createContext();

const initialState = {
  igaProducts: null,
  metroProducts: null,
  allProducts: null,
  searchMatches: null,
};

const reducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case "receive-product-data":
      return {
        ...state,
        igaProducts: action.igaData,
        metroProducts: action.metroData,
        allProducts: action.igaData.concat(action.metroData),
      };
    case "set-search-matches":
      return {
        ...state,
        searchMatches: action.matches,
      };
    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const receiveProductData = (data) => {
    // console.log("data in func", data);
    dispatch({
      type: "receive-product-data",
      igaData: data[0],
      metroData: data[1],
    });
  };

  const setSearchMatches = (data) => {
    dispatch({
      type: "set-search-matches",
      matches: data,
    });
  };

  return (
    <ProductContext.Provider
      value={{ state, actions: { receiveProductData, setSearchMatches } }}
    >
      {children}
    </ProductContext.Provider>
  );
};
