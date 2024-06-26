import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function Main() {
  //state

  //comportement

  //render
  return (
    <MainStyled className="main">
      {/* <div className="basket">BASKET</div> */}
      {/* AJOUT DE LA PARTIE PANNIER EN ANTICIPATION D4UN FUTURE TICKET */}
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  flex: 1;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .basket {
    border: 1px solid purple;
    background: purple;
    margin: 10px;
  }
`;
