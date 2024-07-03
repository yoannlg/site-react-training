import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function MenuContainer() {
  //state

  //comportement

  //render
  return (
    <MainStyled className="main">
      {/* <div className="basket">BASKET</div> */}
      {/* AJOUT DE LA PARTIE PANNIER EN ANTICIPATION D4UN FUTURE TICKET */}
      <Menu />
      <div className="admin">
        <p>Titre dynamique</p>
      </div>
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
  .admin {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 250px;
    z-index: 5;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    background: red;

    p {
      margin-top: 18px;
      margin-left: 21px;
    }
  }
`;
