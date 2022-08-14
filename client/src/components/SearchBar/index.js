import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

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
      setSearchMatches({ searchMatches, typed });
    }
    // eslint-disable-next-line
  }, [typed]);

  const handleSelect = (ev, index) => {
    ev.preventDefault();
    if (matchIndex === 0) {
      navigate("/results");
      setTyped("");
    } else {
      // navigate(`/${matches[index]}`);
    }
  };

  return (
    <div>
      <Input
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
            default: {
              return;
            }
          }
        }}
      />
      <ul>
        {matches && matches.length > 0 && (
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

const Input = styled.input`
  border: 1px solid grey;
  border-radius: 3px;
`;
export default SearchBar;
