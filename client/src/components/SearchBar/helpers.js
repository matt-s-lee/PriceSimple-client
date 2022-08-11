import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ProductContext } from "../../context/ProductContext";

export const findMatch = (array, query) => {
  return array.filter((product) => {
    return (
      product.product_name.toUpperCase().includes(query.toUpperCase()) && query.length >= 2
    );
  });
};

// export const handleSelect = (ev) => {
//   let navigate = useNavigate();
//   ev.preventDefault();
//   navigate("/");
// };

// export const keyChangeFunc = (ev) => {
//   const { state } = useContext(ProductContext);
//   const matches = state.searchMatches;

//   const [matchIndex, setMatchIndex] = useState(0);

//   switch (ev.key) {
//     case "Enter": {
//       handleSelect(matches[matchIndex]);
//       return;
//     }
//     case "ArrowUp": {
//       setMatchIndex(matchIndex - 1);
//       return;
//     }
//     case "ArrowDown": {
//       setMatchIndex(matchIndex + 1);
//       return;
//     }
//   }
// };
