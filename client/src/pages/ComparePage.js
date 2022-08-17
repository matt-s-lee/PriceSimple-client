import { useContext, useState, useEffect } from "react";

import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import { FadeIn } from "../helpers/FadeIn";

import { ProductContext } from "../context/ProductContext";

import corn from "../assets/pexels-mali-maeder-547263-removebg-preview.png";

import { Background, Image, Title } from "./SearchPage"; // styled-components
import PriceChart from "../components/PriceChart";

const ComparePage = () => {
  const {
    state,
    actions: { setMatchesOverTime },
  } = useContext(ProductContext);
  const selectedProduct = state.selectedProduct;
  const matchesToCompare = state.matchesOverTime;
  console.log(matchesToCompare);
  const [prices, setPrices] = useState([]);
  console.log(prices);

  const productTypeByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key]["is"] === value);
  };

  useEffect(() => {
    if (matchesToCompare) {
      console.log(matchesToCompare[0]["sold_by_weight"]["price_per_lb"]);

      const productType = productTypeByValue(matchesToCompare[0], true);
      console.log(productType);
      if (productType === "sold_by_package") {
        setPrices(
          matchesToCompare.map((match) => {
            return parseFloat(match["sold_by_package"]["price_per_package"]);
          })
        );
      } else if (productType === "sold_individually") {
        setPrices(
          matchesToCompare.map((match) => {
            return parseFloat(match["sold_individually"]["price_per_item"]);
          })
        );
      } else if (productType === "sold_by_weight") {
        setPrices(
          matchesToCompare.map((match) => {
            return parseFloat(match["sold_by_weight"]["price_per_lb"]);
          })
        );
      }
      //     if (matchesToCompare) {
      //       prices = matchesToCompare.map((match) => {
      //         if (match.sold_by_package) {
      //           return match.sold_by_package.price_per_package;
      //         } else if (match.sold_individually) {
      //           return match.sold_individually.price_per_item;
      //         } else {
      //           return match.sold_by_weight.price_per_lb;
      //         }
      //       });
      //       console.log(prices);
      //     }
    }
  }, [matchesToCompare]);

  const handleClick = (ev) => {
    ev.preventDefault();
    if (selectedProduct) {
      fetch(`http://localhost:8000/all-products/${selectedProduct.product_name}`)
        .then((res) => res.json())
        .then((json) => {
          const matches = json.data;
          setMatchesOverTime({ matches });
        });
    }
  };

  return (
    <Wrapper>
      <Title>{"Compare prices over time".toUpperCase()}</Title>
      <SearchBar />
      {selectedProduct && <div>Selected product: {selectedProduct.product_name}</div>}
      {selectedProduct && <button onClick={handleClick}>Search</button>}
      {matchesToCompare && (
        <PriceChart product={selectedProduct.product_name} dataset={prices} />
      )}
      <FadeIn duration={2000}>
        <Image src={corn} />
      </FadeIn>
    </Wrapper>
  );
};

const Wrapper = styled(Background)`
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(58, 127, 0, 1) 89%);
`;
export default ComparePage;
