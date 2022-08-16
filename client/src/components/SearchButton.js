import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { FadeIn } from "../helpers/FadeIn";

const SearchButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/search");
  };

  return (
    <FadeIn>
      <Search onClick={handleClick}>
        <BsSearch />
      </Search>
    </FadeIn>
  );
};

const Search = styled.div`
  position: fixed;
  line-height: 2.3em;
  text-align: center;
  border-radius: 50%;
  height: 2em;
  width: 2em;
  font-size: 2em;
  top: calc(100vh - 2.5em);
  left: calc(100vw - 2.5em);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background: black;
    transform: scale(1.1);
  }
`;

export default SearchButton;
