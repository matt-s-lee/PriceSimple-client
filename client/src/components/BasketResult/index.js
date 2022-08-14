import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const BasketResult = ({ productId, quantity }) => {
  const { state } = useContext(ProductContext);
  const products = state.allProducts;

  return (
    <>
      {productId &&
        products
          .filter((product) => {
            return product._id === productId;
          })
          .map((match) => {
            return <div>{match.product_name}</div>;
          })}
    </>
  );
};

export default BasketResult;
