import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import { OrderContext } from "../../../../context/OrderContext";

export default function MenuContainer() {
  //state
  const { isAdmin } = useContext(OrderContext);
  //comportement

  //render
  return (
    <MenuContainerStyled>
      {/* <div className="basket">BASKET</div> */}
      {/* AJOUT DE LA PARTIE PANNIER EN ANTICIPATION D4UN FUTURE TICKET */}
      <div className="admin-wrapper">
        <Menu />
        {isAdmin && <Admin />}
      </div>
    </MenuContainerStyled>
  );
}

const MenuContainerStyled = styled.div`
  //border: 3px solid green;
  background: white;
  display: grid;
  grid-template-columns: 1fr;
  flex: 1;

  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  /* .basket {
    border: 1px solid purple;
    background: purple;
  } */
  .admin-wrapper {
    overflow-y: hidden;
    display: grid;
  }

  /* .admin {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 250px;
    z-index: 5;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    background: lightgrey;
    border: 2px solid red;
    //padding-left: 70px;

    .admin-title {
      margin-top: 18px;
      margin-left: 21px;
    }
    .admin-tabs {
      display: flex;
      position: absolute;
      top: -44px;
      justify-content: start;
      align-items: center;
      margin-left: 70px;
      height: 44px;
      border: 1px solid green;
    }
    .tabs {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      margin: 1px;
      background: wheat;
    }
  } */
`;
