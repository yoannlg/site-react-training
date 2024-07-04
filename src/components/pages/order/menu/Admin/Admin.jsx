import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Admin() {
  return (
    <AdminStyled>
      <div className="admin-tabs"></div>
      <p className="admin-title">Titre dynamique</p>
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  border: 1px solid ${theme.colors.greyLight};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};
  height: 250px;
`;
