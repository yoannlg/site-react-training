import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { Link } from "react-router-dom";

export default function NavBar({ userName }) {
  //state

  //Comportement

  //render
  return (
    <NavBarStyled>
      Navbar
      <h1>Bonour {userName}</h1>
      <Link to={"/"}>
        <button>Déconnexion</button>
      </Link>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  background: blue;
  height: 10vh;
`;
