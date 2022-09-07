import { useContext, useState, useEffect } from "react";

import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import { FadeIn } from "../helpers/FadeIn";

import { ProductContext } from "../context/ProductContext";

import corn from "../assets/pexels-mali-maeder-547263-removebg-preview.png";

import { Background } from "./SearchPage"; // styled-components
import PriceChart from "../components/PriceChart";

const ComparePage = () => {
  const {
    state,
    actions: { setSingleMatch, setMatchesOverTime },
  } = useContext(ProductContext);
  const selectedProduct = state.selectedProduct;
  const matchesToCompare = state.matchesOverTime;
  const [prices, setPrices] = useState([]);
  const [unitType, setUnitType] = useState("");
  console.log(prices, "prices");

  // FIND product type (e.g. sold individually, by package)
  const productTypeByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key]["is"] === value);
  };

  // PARSE and SET data retrieved for one product
  useEffect(() => {
    if (matchesToCompare) {
      const productType = productTypeByValue(matchesToCompare[0], true);
      if (productType === "sold_by_package") {
        setPrices(
          matchesToCompare.map((match) => {
            return parseFloat(match["sold_by_package"]["price_per_package"]);
          })
        );
        setUnitType("Price per package");
      } else if (productType === "sold_individually") {
        setPrices(
          matchesToCompare.map((match) => {
            return parseFloat(match["sold_individually"]["price_per_item"]);
          })
        );
        setUnitType("Price per item");
      } else {
        setPrices(
          matchesToCompare.map((match) => {
            return parseFloat(match["sold_by_weight"]["price_per_lb"]);
          })
        );
        setUnitType("Price per lb");
      }
    }
  }, [matchesToCompare]);

  // RETRIEVE data for one product over multiple weeks
  const handleClick = (ev) => {
    ev.preventDefault();
    if (selectedProduct) {
      fetch(`http://localhost:8000/all-products/${selectedProduct.product_name}`)
        .then((res) => res.json())
        .then((json) => {
          const matches = json.data;
          setMatchesOverTime({ matches });
          setSingleMatch({ match: null });
        });
    }
  };

  return (
    <Wrapper>
      <Title>{"Compare prices over time".toUpperCase()}</Title>
      <SearchBar metroOnly={true} />
      {selectedProduct && <Result>Selected product: {selectedProduct.product_name}</Result>}
      {selectedProduct && <Button onClick={handleClick}>Search</Button>}
      {matchesToCompare && (
        <PriceChart
          product={matchesToCompare[0].product_name}
          dataset={prices}
          yAxis={unitType}
        />
      )}
      <FadeIn duration={2000}>
        <Image src={corn} />
      </FadeIn>
    </Wrapper>
  );
};;;;

const Wrapper = styled(Background)`
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(58, 127, 0, 1) 89%);
`;

const Title = styled.h2`
  margin: 2em 0 1em 0;
  font-weight: 100;
  font-family: "Josefin Slab", sans-serif;
`;

const Result = styled.div`
  position: fixed;
  top: 15em;
`;

const Button = styled.button`
  position: fixed;
  top: 17em;
  margin-top: 1em;
`;

const Image = styled.img`
  position: fixed;
  top: 80%;
  left: 0;
  width: 100%;
  z-index: -1;
  @media only screen and (min-width: 800px) {
    width: 50%;
    top: 30%;
    left: 70%;
  }
`;

export default ComparePage;
