import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";

export default function NavBar() {
  //state

  //Comportement

  //render
  return (
    <NavBarStyled>
      <Logo />
      <div>
        <p>Hey, bob</p>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div``;
