import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext } from "react";
import { OrderContext } from "../../../../../context/OrderContext";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    isAddTabActive,
    setIsAddTabActive,
    isEditTabActive,
    setIsEditTabActive,
  } = useContext(OrderContext);

  const handleClickOnCollapsedTab = () => {
    setIsCollapsed(!isCollapsed);
  };

  const selectTab = (tabSelected) => {
    if (tabSelected === "add") {
      setIsAddTabActive(true);
      setIsEditTabActive(false);
    }
    if (tabSelected === "edit") {
      setIsEditTabActive(true);
      setIsAddTabActive(false);
    }
    setIsCollapsed(false);
  };

  const tabConfig = [
    {
      onClick: handleClickOnCollapsedTab,
      icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
      label: "",
      className: isCollapsed ? "is-active" : "",
    },
    {
      onClick: () => {
        selectTab("add");
      },
      icon: <AiOutlinePlus />,
      label: "Ajouter un produit",
      className: isAddTabActive ? "is-active" : "",
    },
    {
      onClick: () => {
        selectTab("edit");
      },
      icon: <MdModeEditOutline />,
      label: "Modifier un produit",
      className: isEditTabActive ? "is-active" : "",
    },
  ];

  return (
    <AdminTabsStyled>
      {/* <Tab
        onClick={handleClickOnCollapsedTab}
        icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        label=""
        className={isCollapsed ? "is-active" : ""}
      />
      <Tab
        onClick={() => {
          selectTab("add");
        }}
        icon={<AiOutlinePlus />}
        label="Ajouter un produit"
        className={isAddTabActive ? "is-active" : ""}
      />
      <Tab
        onClick={() => {
          selectTab("edit");
        }}
        icon={<MdModeEditOutline />}
        label="Modifier un produit"
        className={isEditTabActive ? "is-active" : ""}
      /> */}
      {tabConfig.map(({ onClick, icon, label, className }) => {
        return (
          <Tab
            key={self.crypto.randomUUID()}
            onClick={onClick}
            icon={icon}
            label={label}
            className={className}
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
