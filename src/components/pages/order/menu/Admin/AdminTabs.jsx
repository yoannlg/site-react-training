import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {
  const [isActiveTab, setIsActiveTab] = useState(false);

  const handleClickOnCollapsedTab = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleClick = () => {
    setIsActiveTab(!isActiveTab);
  };

  return (
    <AdminTabsStyled>
      <Tab
        onClick={handleClickOnCollapsedTab}
        icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        className={isCollapsed ? "is-active" : ""}
      />
      <Tab
        onClick={handleClick}
        icon={<AiOutlinePlus />}
        label="Ajouter un produit"
        className={isActiveTab && !isCollapsed ? "is-active" : ""}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }

  button {
    margin-left: 1px;
  }
`;
