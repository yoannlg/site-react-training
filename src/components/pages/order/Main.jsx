import styled from "styled-components";
import { theme } from "../../../theme";
import Card from "../../reusable-ui/Card";
import { useState } from "react";
import { fakeMenu1, fakeMenu2 } from "../../../fakeData/fakeMenu";

export default function Main() {
  //state
  const [menu1, setMenu1] = useState(fakeMenu1);
  const [menu2, setMenu2] = useState(fakeMenu2);

  //comportement

  //render
  return (
    <MainStyled className="main">
      <div className="basket">BASKET</div>
      <div className="menu">
        {fakeMenu2.map(() => (
          <Card />
        ))}
        {/*<Card name="UN" className="green" />
        <Card name="DEUX" className="green" />
        <Card name="TROIS" className="green" />
        <Card name="QUATRE" className="green" />
        <Card name="CINQ" className="green" />
        <Card name="SIX" className="green" />
        <Card name="SEPT" className="green" />
        <Card name="HUIT" className="green" />
        <Card name="NEUF" className="green" />
        <Card name="DIX" className="green" /> */}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: 25% 1fr;
  flex: 1;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  .basket {
    border: 1px solid purple;
    background: purple;
    width: 100px;
    margin: 10px;
  }
  .menu {
    flex: 1;
    border: 2px solid red;
    //grid-template-columns: 350px 350px 350px 350px;
    //grid-template-columns: repeat(4, 350px);
    grid-template-columns: repeat(4, 1fr);
    gap: 10px 0px;
  }
  .darkblue {
    background: darkblue;
  }
  .green {
    background: green;
  }
`;
