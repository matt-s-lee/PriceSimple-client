import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const SearchBar = () => {
  const { state } = useContext(ProductContext);
  const igaProducts = state.igaProducts;
  const metroProducts = state.metroProducts;
  console.log(igaProducts.length, metroProducts.length);

  return <div>SearchBar</div>;
};

export default SearchBar;
