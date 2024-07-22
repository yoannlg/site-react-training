import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";

import { useContext } from "react";
import { OrderContext } from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminTabsCORRECTION() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  const handleClickOnCollapsedTab = () => {
    setIsCollapsed(!isCollapsed);
  };

  const selectTab = (tabSelected) => {
    setIsCollapsed(false); //Ouvre le panel dans tout les cas
    setCurrentTabSelected(tabSelected); //Actualise le tab selectionné
  };
  const tabs = getTabsConfig(currentTabSelected);
  return (
    <AdminTabsStyled>
      <Tab
        onClick={handleClickOnCollapsedTab}
        icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        className={isCollapsed ? "is-active" : ""}
      />

      {tabs.map(({ icon, label, index }) => {
        return (
          <Tab
            key={self.crypto.randomUUID()}
            onClick={() => selectTab(index)}
            icon={icon}
            label={label}
            className={currentTabSelected === index ? "is-active" : ""}
          />
        );
      })}
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
