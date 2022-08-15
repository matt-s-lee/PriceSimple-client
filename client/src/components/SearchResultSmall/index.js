import { useState } from "react";
import styled from "styled-components";
import AddToCartButton from "./AddToCartButton";
import ChangeQuantityButton from "./ChangeQuantityButton";
import DeleteButton from "./DeleteButton";
import { ReactComponent as MetroLogo } from "../../assets/metroLogo.svg";
import { ReactComponent as VoilaLogo } from "../../assets/voilaLogo.svg";

const SearchResultSmall = ({
  product,
  soldByPackage,
  soldByWeight,
  soldIndividually,
  store,
  imgSrc,
  link,
  id,
  quantity,
  add,
  remove,
}) => {
  const [numItems, setNumItems] = useState(1);

  const showLogo = (store) => {
    if (store === "iga") {
      return <VoilaLink />;
    } else {
      return <MetroLink />;
    }
  };

  return (
    <Card>
      <Column>
        <Image src={imgSrc} />
      </Column>
      <Details>
        <Product>{product}</Product>
        {soldIndividually.is === true && (
          <>
            <a href={link}>{showLogo(store)}</a>
            <div>${soldIndividually.price_per_item}</div>
          </>
        )}
        {soldByPackage.is === true && (
          <>
            <a href={link}>{showLogo(store)}</a>
            <div>${soldByPackage.price_per_package}</div>
            {soldByPackage.price_per_100g && <div>${soldByPackage.price_per_100g}/100g</div>}
            <div>{soldByPackage.units_per_package}</div>
          </>
        )}
        {soldByWeight.is === true && (
          <>
            <a href={link}>{showLogo(store)}</a>
            <div>${soldByWeight.price_per_lb}/lb</div>
            <div>${soldByWeight.price_per_kg}/kg</div>
            <div>${(soldByWeight.price_per_kg / 10).toFixed(2)}/100g</div>
          </>
        )}
      </Details>
      <Cart>
        {add ? (
          <ChangeQuantityButton
            id={id}
            numItems={numItems}
            setNumItems={setNumItems}
            remove={remove}
            add={add}
          />
        ) : (
          <div>Quantity: {quantity}</div>
        )}
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
        {remove ? <DeleteButton id={id} /> : null}
      </Cart>
    </Card>
  );
};

export default SearchResultSmall;

const Card = styled.div`
  display: flex;
  height: 10em;
  border: 1px solid #828282;
  border-radius: 10px;
  margin: 0.5em 0.5em;
  padding: 0.5em 0.5em;
  font-family: "Roboto", sans-serif;
`;

const Image = styled.img`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  width: auto;
  object-fit: contain;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Jost", sans-serif;
  width: 25%;
`;

const Details = styled(Column)`
  width: 50%;
`;

const Product = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Cart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
`;

const VoilaLink = styled(VoilaLogo)`
  height: 1em;
`;

const MetroLink = styled(MetroLogo)`
  height: 1em;
`;