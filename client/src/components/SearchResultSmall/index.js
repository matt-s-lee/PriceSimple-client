import { useState } from "react";
import styled from "styled-components";
import AddToCartButton from "./AddToCartButton";
import ChangeQuantityButton from "./ChangeQuantityButton";
import DeleteButton from "./DeleteButton";

const SearchResultSmall = ({
  product,
  soldByPackage,
  soldByWeight,
  soldIndividually,
  store,
  imgSrc,
  link,
  id,
  add,
  remove,
}) => {
  const [numItems, setNumItems] = useState(1);

  return (
    <Card>
      <Column>
        <Image src={imgSrc} />
      </Column>
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
      <Cart>
        <ChangeQuantityButton
          id={id}
          numItems={numItems}
          setNumItems={setNumItems}
          remove={remove}
        />
        {add ? (
          <AddToCartButton
            product={product}
            soldByPackage={soldByPackage}
            soldByWeight={soldByWeight}
            soldIndividually={soldIndividually}
            store={store}
            imgSrc={imgSrc}
            link={link}
            id={id}
            numItems={numItems}
          />
        ) : null}
        {remove ? <DeleteButton id={id}/> : null}
      </Cart>
    </Card>
  );
};

export default SearchResultSmall;

const Card = styled.div`
  display: flex;
  height: 10em;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin: 0.4em 0.3em;
  padding: 0.4em 0.3em;
`;

const Image = styled.img`
  display: flex;
  flex-direction: column;
  height: 5em;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Details = styled(Column)`
  width: 50%;
`;

const Cart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1em;
`;
