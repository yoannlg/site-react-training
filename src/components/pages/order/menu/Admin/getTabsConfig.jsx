import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabsConfig = () => [
  /* {
    index: "chevronUpDown",
    onClick: handleClickOnCollapsedTab,
    icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
    label: "",
    className: isCollapsed ? "is-active" : "",
  }, */
  {
    index: "add",
    icon: <AiOutlinePlus />,
    label: "Ajouter un produit",
    /*     className: currentTabSelected === "add" ? "is-active" : "",//A desactiver avec les CORRECTION
     */
  },
  {
    index: "edit",
    icon: <MdModeEditOutline />,
    label: "Modifier un produit",
    /*     className: currentTabSelected === "edit" ? "is-active" : "",//A desactiver avec les CORRECTION
     */
  },
];
