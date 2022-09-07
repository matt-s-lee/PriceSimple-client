import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { ProductContext } from "../../context/ProductContext";
// import { findMatch, handleSelect, keyChangeFunc } from "./helpers";

const SearchBar = (metroOnly) => {
  const {
    state,
    actions: { setSearchMatches, setSingleMatch },
  } = useContext(ProductContext);
  const allProducts = state.allProducts;
  const matches = state.searchMatches;

  const [typed, setTyped] = useState("");
  const [matchIndex, setMatchIndex] = useState(-1);

  let navigate = useNavigate();

  useEffect(() => {
    if (allProducts && metroOnly) {
      const searchMatches = allProducts.filter((product) => {
        return (
          product.product_name.toUpperCase().includes(typed.toUpperCase()) &&
          typed.length >= 2 &&
          product.store === "metro"
        );
      });
      setSearchMatches({ searchMatches, typed });
    } else if (allProducts) {
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
    // setMatchIndex(index);
    if (matchIndex === -1 && window.location.pathname === "/search") {
      navigate("/results");
      setTyped("");
    } else if (window.location.pathname === "/search") {
      window.open(matches[index].link, "_blank").focus();
      setMatchIndex(-1);
    } else if (matchIndex >= matches.length) {
      const match = matches[matches.length - 1]; // return the last one
      setSingleMatch({ match });
      setTyped("");
      setMatchIndex(-1);
    } else {
      const match = matches[index];
      setSingleMatch({ match });
      setTyped("");
      setMatchIndex(-1);
    }
  };

  return (
    <>
      <Background typed={typed}></Background>
      <Input
        type="text"
        placeholder="What's on the list?"
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
      <Results>
        {matches && matches.length > 0 && (
          <>
            <Examples>
              {window.location.pathname === "/search"
                ? "Hit enter to view all or use arrow keys to select specific product"
                : "Are you looking for..."}
            </Examples>
          </>
        )}
        {matches &&
          matches.map((match, index) => {
            return (
              <li
                key={match._id}
                style={{
                  background:
                    matchIndex === index ? "hsla(50deg, 100%, 80%, 0.25)" : "transparent",
                }}
                onClick={(ev) => handleSelect(ev, index)}
              >
                {match.product_name}
              </li>
            );
          })}
      </Results>
    </>
  );
};

const Background = styled.div`
  visibility: ${(props) => (props.typed ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.4;
  background: black;
  z-index: 3;
`;

const Input = styled.input`
  border: 1px solid grey;
  border-radius: 10px;
  margin-left: 1em;
  line-height: 2em;
  width: calc(100% - 2em);
  z-index: 4;
  /* font-family: var(--font-titles); */
  /* font-family: "Josefin Slab", sans-serif; */

  @media only screen and (min-width: 800px) {
    width: 50%;
  }
`;

const Results = styled.ul`
  margin: 1.5em 0 0 1.5em;
  width: calc(100% - 3em);
  overflow: hidden;
  max-height: 20.5em;
  z-index: 4;
  background: transparent;
`;

const Examples = styled.li`
  font-weight: 600;
  margin-bottom: 0.5em;
`;


export default SearchBar;
