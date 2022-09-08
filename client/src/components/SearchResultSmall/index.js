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

  const showLogo = (store, url) => {
    if (store === "iga") {
      return <VoilaLink onClick={() => window.open(url, "_blank").focus()} />;
    } else {
      return <MetroLink onClick={() => window.open(url, "_blank").focus()} />;
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
            <div>{showLogo(store, link)}</div>
            <div>${soldIndividually.price_per_item}</div>
          </>
        )}
        {soldByPackage.is === true && (
          <>
            <div>{showLogo(store, link)}</div>
            <div>${soldByPackage.price_per_package}</div>
            {soldByPackage.price_per_100g && (
              <SmallFont>${soldByPackage.price_per_100g}/100g</SmallFont>
            )}
            <SmallFont>{soldByPackage.units_per_package}</SmallFont>
          </>
        )}
        {soldByWeight.is === true && (
          <>
            <div>{showLogo(store, link)}</div>
            <div>${soldByWeight.price_per_lb}/lb</div>
            <SmallFont>${soldByWeight.price_per_kg}/kg</SmallFont>
            <SmallFont>${(soldByWeight.price_per_kg / 10).toFixed(2)}/100g</SmallFont>
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
          <div>Qty: {quantity}</div>
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
  border-radius: 4px;
  margin: 0.5em 0.5em;
  padding: 0.5em 0.5em;
  font-family: "Roboto", sans-serif;

  @media only screen and (min-width: 800px) {
    width: 30vw;
  }

  @media only screen and (min-width: 1280px) {
    width: 32%;
  }
`;

const Image = styled.img`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  width: auto;
  object-fit: contain;
  padding: 0.25em;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
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
  font-weight: 600;
`;

const Cart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
`;

const VoilaLink = styled(VoilaLogo)`
  height: 1em;
  cursor: pointer;
  transition: all 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    scale: 1.05;
  }
`;

const MetroLink = styled(MetroLogo)`
  height: 1em;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    scale: 1.1;
  }
`;

const SmallFont = styled.div`
  font-size: 0.8em;
`;