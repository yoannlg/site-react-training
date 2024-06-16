import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import NavBarRightSide from "./NavBarRightSide";
import { theme } from "../../../../theme";
import { refreshPage } from "../../../../utils/windows";

export default function NavBar({ userName }) {
  //state

  //Comportement

  //render
  return (
    <NavBarStyled className="navbar">
      <Logo className="logo-order-page" onClick={refreshPage} />
      <NavBarRightSide userName={userName} />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};

  .logo-order-page {
    cursor: pointer;
  }
`;
