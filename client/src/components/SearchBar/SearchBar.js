import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import { findMatch } from "./helpers";

const SearchBar = () => {
  const {
    state,
    actions: { storeMatchesOnSearch },
  } = useContext(ProductContext);
  const allProducts = state.allProducts;
  const matches = state.searchMatches;

  const [typed, setTyped] = useState("");
  console.log(typed);

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
  //     <div>
  //       <Input
  //       // type="text"
  //       // value={typed}
  //       // onChange={(ev) => setTyped(ev.target.value)}
  //       // onKeyDown={(ev)
  //       // }}
  //       />
  //       <button onClick={() => setTyped("")}>Clear</button>

  //       {/* {matchedSuggestions.length > 0 && ( */}
  //       <div>
  //         {matchedSuggestions.map((suggestion, index) => {
  //           return (
  //             // make own component
  //             <div
  //               index={index}
  //               key={suggestion.id}
  //               onClick={() => handleSelect(suggestion.title)}
  //               // not onClick={handleSelect(suggestion.title)}
  //               // ** must always put into an arrow function in onClick:  () =>
  //               style={{
  //                 background:
  //                   selectedSuggestionIndex === index
  //                     ? "hsla(50deg, 100%, 80%, 0.25)"
  //                     : "transparent",
  //               }}
  //               // onKeyDown={(ev) =>
  //               //   ev.code === "Enter" ? window.alert(suggestion.title) : null
  //               // }
  //               // ** the above code doesn't actually do anything! The "enter" hit
  //               // in the Input component is what triggers the window alert
  //               onMouseEnter={() => setSelectedSuggestionIndex(index)}
  //             ></div>
  //           );
  //         })}
  //       </div>
  //       {/* )} */}
  //     </div>
  //   );
};

export default SearchBar;
