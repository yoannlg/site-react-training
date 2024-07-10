import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown } from "react-icons/fi";

export default function AdminTabs() {
  return (
    <AdminTabsStyled>
      <Tab icon={<FiChevronDown />} />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;
`;
