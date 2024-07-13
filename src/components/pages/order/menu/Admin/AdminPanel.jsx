import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import { OrderContext } from "../../../../../context/OrderContext";

export default function AdminPanel() {
  const { isAddTabActive, isEditTabActive } = useContext(OrderContext);
  return (
    <AdminPanelStyled>
      {isAddTabActive && <span>{"Ajouter un produit"}</span>}
      {isEditTabActive && <span>{"Modifier un produit"}</span>}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  border: 1px solid blue;
  height: 250px;
  border: 1px solid ${theme.colors.greyLight};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
`;
