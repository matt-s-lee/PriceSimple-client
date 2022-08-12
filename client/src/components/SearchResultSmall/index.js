import { useState } from "react";
import styled from "styled-components";
import AddToCartButton from "./AddToCartButton";
import ChangeQuantityButton from "./ChangeQuantityButton";

const SearchResultSmall = ({
  product,
  soldByPackage,
  soldByWeight,
  soldIndividually,
  store,
  imgSrc,
  link,
  id,
}) => {
  const [numItems, setNumItems] = useState(1);

  return (
    <Card>
      <Image src={imgSrc} />
      <Details>
        <div>{product}</div>
        {soldIndividually.is === true && (
          <>
            <a href={link}>{store}</a>
            <div>${soldIndividually.price_per_item}</div>
          </>
        )}
        {soldByPackage.is === true && (
          <>
            <a href={link}>{store}</a>
            <div>${soldByPackage.price_per_package}</div>
            {soldByPackage.price_per_100g && <div>${soldByPackage.price_per_100g}/100g</div>}
            <div>{soldByPackage.units_per_package}</div>
          </>
        )}
        {soldByWeight.is === true && (
          <>
            <a href={link}>{store}</a>
            <div>${soldByWeight.price_per_lb}/lb</div>
            <div>${soldByWeight.price_per_kg}/kg</div>
            <div>${(soldByWeight.price_per_kg / 10).toFixed(2)}/100g</div>
          </>
        )}
      </Details>
      <div>
        <ChangeQuantityButton numItems={numItems} setNumItems={setNumItems} />
        <AddToCartButton id={id} numItems={numItems} />
      </div>
    </Card>
  );
};

export default SearchResultSmall;

const Card = styled.div`
  display: flex;
  height: 10em;
`;

const Image = styled.img`
  display: flex;
  flex-direction: column;
  height: 5em;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
