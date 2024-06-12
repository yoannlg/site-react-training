import styled from "styled-components";
import { theme } from "../../theme";

export default function Card({ name, className }) {
  return <CardStyled className={className}>{name}</CardStyled>;
}
const CardStyled = styled.div`
  width: 240px;
  height: 330px;
  margin-top: 50px;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
`;
