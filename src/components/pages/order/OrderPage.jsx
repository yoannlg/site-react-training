import styled from "styled-components";
import MenuContainer from "./menu/MenuContainer";
import { theme } from "../../../theme";
import NavBar from "./navbar/NavBar";
import { OrderContext } from "../../../context/OrderContext";
import { useState } from "react";

export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  const valueOrderContext = {
    isAdmin,
    setIsAdmin,
  };

  return (
    <OrderContext.Provider value={valueOrderContext}>
      <OrderPageStyled>
        <div className="container">
          <NavBar />
          <MenuContainer />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    position: relative;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
