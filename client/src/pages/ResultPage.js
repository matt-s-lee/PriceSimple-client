import { useContext, useState } from "react";

import styled from "styled-components";

import SearchResultSmall from "../components/SearchResultSmall";
import { ProductContext } from "../context/ProductContext";

const ResultPage = () => {
  const { state } = useContext(ProductContext);
  const matches = state.searchMatches;
  const [add] = useState(true);

  if (matches) {
    console.log("matches", matches);
    return (
      <>
        <Title>
          Returning results for <Term>{state.searchTerm}</Term>
        </Title>
        <div>
          {matches.map((match) => {
            return (
              <SearchResultSmall
                key={match._id}
                id={match._id}
                product={match.product_name}
                soldByPackage={match.sold_by_package}
                soldByWeight={match.sold_by_weight}
                soldIndividually={match.sold_individually}
                store={match.store}
                imgSrc={match.img_src}
                link={match.link}
                data={match}
                add={add}
              />
            );
          })}
        </div>
      </>
    );
  }
};

const Title = styled.h2`
  margin: 1em;
`;

const Term = styled.span`
  font-family: var(--font-titles);
  font-weight: 600;
`;

export default ResultPage;
