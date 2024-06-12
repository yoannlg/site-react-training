import styled from "styled-components";
import { theme } from "../../../theme";
import Card from "../../reusable-ui/Card";

export default function Main() {
  return (
    <MainStyled className="main">
      <Card name="UN" className="green" />
      <Card name="DEUX" className="green" />
      <Card name="TROIS" className="green" />
      <Card name="QUATRE" className="green" />
      <Card name="CINQ" className="green" />
      <Card name="SIX" className="green" />
      <Card name="SEPT" className="green" />
      <Card name="HUIT" className="green" />
      <Card name="NEUF" className="green" />
      <Card name="DIX" className="green" />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  //grid-template-columns: 350px 350px 350px 350px;
  //grid-template-columns: repeat(4, 350px);
  grid-template-columns: repeat(4, 1fr);
  gap: 10px 0px;

  .darkblue {
    background: darkblue;
  }
  .green {
    background: green;
  }
`;
