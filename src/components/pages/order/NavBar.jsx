import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import NavBarRightSide from "./NavBarRightSide";

export default function NavBar({ userName }) {
  //state

  //Comportement

  //render
  return (
    <NavBarStyled className="navbar">
      <Logo />
      <NavBarRightSide userName={userName} />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  //align-items: center;

  .left-side {
    background: pink;
  }
`;
