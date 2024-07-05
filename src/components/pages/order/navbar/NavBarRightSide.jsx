import styled from "styled-components";
import Profile from "./Profile";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { useContext } from "react";
import ToastAdmin from "./ToastAdmin";
import { OrderContext } from "../../../../context/OrderContext";

export default function NavBarRightSide() {
  const { isAdmin, setIsAdmin } = useContext(OrderContext);

  const displayToastNotification = () => {
    if (!isAdmin) {
      toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsAdmin(!isAdmin);
  };

  return (
    <NavBarRightSideStyled>
      <ToggleButton
        isChecked={isAdmin}
        onToggle={displayToastNotification}
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
      />
      <Profile />
      <ToastAdmin />
    </NavBarRightSideStyled>
  );
}

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
