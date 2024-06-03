import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";

export default function OrderPage() {
  const { userName } = useParams();
  return (
    <OrderPageStyled>
      <div className="container">
        <div className="navbar">
          {/* <NavBar /> */}
          <div className="leftSide">LOGO</div>
          <div className="rigthSide">
            <h1> Bonjour {userName} </h1>
            <br />
            <Link to={"/"}>
              <button>Déconnexion</button>
            </Link>
          </div>
        </div>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .container {
    border: 2px solid red;
    height: 95vh;
    width: 1400px;
    background-color: blue;

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: white;
      border-radius: 15px 15px 0 0;
      box-shadow: 0px 15px 15px gray;
    }
  }
`;
