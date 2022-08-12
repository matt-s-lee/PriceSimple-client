import styled from "styled-components";

const SearchResultSmall = () => {
  return (
    <Card>
      <Images>
        <div>Picture</div>
        <div>Store</div>
      </Images>

      <Details>
        <div>Item name</div>
        <div>Price</div>
        <div>Units</div>
        <div>Price / 100g</div>
        <div>
          <div># of Items</div>
          <button>Add to cart</button>
        </div>
      </Details>
    </Card>
  );
};

export default SearchResultSmall;

const Card = styled.div`
  display: flex;
`;

const Images = styled.div`
  display: flex;
  flex-direction: column;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
