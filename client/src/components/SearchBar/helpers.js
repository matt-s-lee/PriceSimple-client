export const findMatch = (array, query) => {
  return array.filter((product) => {
    return (
      product.product_name.toUpperCase().includes(query.toUpperCase()) && query.length >= 2
    );
  });
};

export const keyChangeFunc = (ev) => {
  switch (ev.key) {
    case "Enter": {
      //   handleSelect(matchedSuggestions[selectedSuggestionIndex].title);
      return;
    }
    case "ArrowUp": {
      //   setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
      // handleChange();
      return;
    }
    case "ArrowDown": {
      //   setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
      return;
    }
  }
};
