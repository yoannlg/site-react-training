import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function AdminPanel() {
  return <AdminPanelStyled></AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  border: 1px solid blue;
  height: 250px;
  border: 1px solid ${theme.colors.greyLight};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 250px;
`;
