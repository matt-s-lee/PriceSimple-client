import { useContext, useState, useEffect } from "react";

import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import { FadeIn } from "../helpers/FadeIn";

import { ProductContext } from "../context/ProductContext";

import corn from "../assets/pexels-mali-maeder-547263-removebg-preview.png";

import { Background, Image, Title } from "./SearchPage"; // styled-components

const ComparePage = () => {
  const {
    state,
    actions: { setSingleMatch },
  } = useContext(ProductContext);
  const selectedProduct = state.selectedProduct;
  console.log(selectedProduct);

  return (
    <Wrapper>
      <Title>{"Compare prices over time".toUpperCase()}</Title>
      <SearchBar />
      {selectedProduct && <div>Selected product: {selectedProduct.product_name}</div>}
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
