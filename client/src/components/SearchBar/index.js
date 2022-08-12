import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
// import { findMatch, handleSelect, keyChangeFunc } from "./helpers";

const SearchBar = () => {
  const {
    state,
    actions: { setSearchMatches },
  } = useContext(ProductContext);
  const allProducts = state.allProducts;
  const matches = state.searchMatches;

  const [typed, setTyped] = useState("");
  const [matchIndex, setMatchIndex] = useState(0);
  console.log(matchIndex);

  let navigate = useNavigate();

  useEffect(() => {
    if (allProducts) {
      const searchMatches = allProducts.filter((product) => {
        return (
          product.product_name.toUpperCase().includes(typed.toUpperCase()) && typed.length >= 2
        );
      });
      setSearchMatches(searchMatches);
    }
  }, [typed]);

  const handleSelect = (ev, index) => {
    ev.preventDefault();
    if (matchIndex === 0) {
      navigate("/results");
    } else {
      // navigate(`/${matches[index]}`);
    }
    setTyped("");
  };

  return (
    <div>
      <input
        type="text"
        value={typed}
        onChange={(ev) => setTyped(ev.target.value)}
        onKeyDown={(ev) => {
          switch (ev.key) {
            case "Enter": {
              handleSelect(ev, matchIndex);
              return;
            }
            case "ArrowUp": {
              setMatchIndex(matchIndex - 1);
              return;
            }
            case "ArrowDown": {
              setMatchIndex(matchIndex + 1);
              return;
            }
          }
        }}
      />
      <ul>
        {matches.length > 0 && (
          <>
            <li>Examples</li>
          </>
        )}
        {matches &&
          matches.map((match) => {
            return <li key={match._id}>{match.product_name}</li>;
          })}
      </ul>
    </div>
  );
};

export default SearchBar;
