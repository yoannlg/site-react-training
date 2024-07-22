import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import { OrderContext } from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminPanelCORRECTION() {
  const { isAddTabActive, isEditTabActive, currentTabSelected } =
    useContext(OrderContext);

  const tabs = getTabsConfig(currentTabSelected);
  const tabSelected = tabs.find((tab) => tab.index === currentTabSelected);
  return (
    <AdminPanelStyled>
      {currentTabSelected === tabSelected.index && (
        <span>{tabSelected.label}</span>
      )}
      {/*  {currentTabSelected === "add" && (
        <span>{"Ajouter un produit CORRECTION"}</span>
      )}
      {currentTabSelected === "edit" && (
        <span>{"Modifier un produit CORRECTION"}</span>
      )} */}

      {/* {isAddTabActive && <span>{"Ajouter un produit"}</span>}
      {isEditTabActive && <span>{"Modifier un produit"}</span>} */}
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
