import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import { OrderContext } from "../../../../../context/OrderContext";
import AdminTabsCORRECTION from "./AdminTabsCORRECTION";
import AdminPanelCORRECTION from "./AdminPanelCORRECTION";

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext);
  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
      {/*  <AdminTabsCORRECTION />
      {!isCollapsed && <AdminPanelCORRECTION />} */}
      <div className="admin-tabs"></div>
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border-radius: ${theme.borderRadius.extraRound};
`;
