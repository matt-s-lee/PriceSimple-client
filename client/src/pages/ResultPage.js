import { useContext } from "react";

import SearchResultSmall from "../components/SearchResultSmall";
import { ProductContext } from "../context/ProductContext";

const ResultPage = () => {
  const { state } = useContext(ProductContext);
  const matches = state.searchMatches;

  if (matches) {
    console.log("matches", matches);
    return (
      <>
        <div>Returning results for {state.searchTerm}</div>
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
              />
            );
          })}
        </div>
      </>
    );
  }
};

export default ResultPage;
