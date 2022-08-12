import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import { findMatch, handleSelect, keyChangeFunc } from "./helpers";

const SearchBar = () => {
  const {
    state,
    actions: { storeMatchesOnSearch },
  } = useContext(ProductContext);
  const allProducts = state.allProducts;
  const matches = state.searchMatches;

  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (allProducts) {
      const matches = findMatch(allProducts, typed);
      storeMatchesOnSearch(matches);
    }
  }, [typed]);

  return (
    <div>
      <input type="text" value={typed} onChange={(ev) => setTyped(ev.target.value)}></input>
      <ul>
        {matches &&
          matches.map((match) => {
            return <li>{match.product_name}</li>;
          })}
      </ul>
    </div>
  );
};

export default SearchBar;
