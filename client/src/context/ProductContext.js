import { createContext, useReducer } from "react";

export const ProductContext = createContext();

const initialState = {
  igaProducts: null,
  metroProducts: null,
};

const reducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case "receive-product-data":
      return {
        ...state,
        igaProducts: action.igaData,
        metroProducts: action.metroData,
      };
    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const receiveProductData = (data) => {
    console.log("data in func", data);
    dispatch({
      type: "receive-product-data",
      igaData: data[0],
      metroData: data[1],
    });
  };

  return (
    <ProductContext.Provider value={{ state, actions: { receiveProductData } }}>
      {children}
    </ProductContext.Provider>
  );
};
