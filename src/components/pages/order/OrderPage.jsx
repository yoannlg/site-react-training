import { useParams } from "react-router-dom";
import styled from "styled-components";
import Main from "./main/Main";
import { theme } from "../../../theme";
import NavBar from "./navbar/NavBar";

export default function OrderPage() {
  const { userName } = useParams();
  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar userName={userName} />
        <Main />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
