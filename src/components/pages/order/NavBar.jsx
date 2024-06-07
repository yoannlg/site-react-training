import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { Link } from "react-router-dom";

export default function NavBar({ userName }) {
  //state

  //Comportement

  //render
  return (
    <NavBarStyled className="navbar">
      <div className="left-side">Left</div>
      <div className="right-side">
        Right
        <h1>Bonjour {userName}</h1>
        <Link to={"/"}>
          <button>Déconnexion</button>
        </Link>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  //align-items: center;

  .left-side {
    background: pink;
  }
  .right-side {
    background: purple;
  }
`;
