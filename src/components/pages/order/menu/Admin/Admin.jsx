import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import { theme } from "../../../../../theme";

export default function Admin() {
  return (
    <AdminStyled>
      <AdminTabs />
      <AdminPanel />
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
