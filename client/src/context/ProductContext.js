import { createContext, useReducer } from "react";

export const ProductContext = createContext();

const initialState = {
  igaProducts: null,
  metroProducts: null,
  allProducts: null,
  searchMatches: null,
  searchTerm: null,
  selectedProduct: null,
  matchesOverTime: null,
};

const reducer = (state, action) => {
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
        searchTerm: action.searchTerm,
      };
    case "set-single-match":
      return {
        ...state,
        selectedProduct: action.match,
      };
    case "set-matches-over-time":
      return {
        ...state,
        matchesOverTime: action.matchesOverTime,
      };
    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const receiveProductData = (data) => {
    dispatch({
      type: "receive-product-data",
      igaData: data[0],
      metroData: data[1],
    });
  };
  const setSearchMatches = (data) => {
    dispatch({
      type: "set-search-matches",
      matches: data.searchMatches,
      searchTerm: data.typed,
    });
  };
  const setSingleMatch = (data) => {
    dispatch({
      type: "set-single-match",
      match: data.match,
    });
  };
  const setMatchesOverTime = (data) => {
    dispatch({
      type: "set-matches-over-time",
      matchesOverTime: data.matches,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        state,
        actions: { receiveProductData, setSearchMatches, setSingleMatch, setMatchesOverTime },
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
