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
            <div className="containt">
              <h1>
                Hey, <span>{userName}</span>
              </h1>
              <br />
              <Link to={"/"}>
                <a className="logout">Déconnexion</a>
              </Link>
            </div>
            <div className="iconContaint">ICON</div>
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
      box-shadow: 0px 5px 30px gray;

      .rigthSide {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 27px;

        .containt {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        h1 {
          color: #747b91;
          font-size: 16px;
          font-weight: 400;
          span {
            color: orange;
            font-weight: 700;
          }
        }
        .logout {
          color: #747b91;
          font-weight: 400;
          font-size: 10px;
        }
        :link {
          text-decoration: none;
        }
        .iconContaint {
          margin-right: 70px;
        }
      }
    }
  }
`;
