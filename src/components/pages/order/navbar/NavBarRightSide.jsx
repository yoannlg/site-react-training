import styled from "styled-components";
import Profile from "./Profile";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { useState } from "react";
import ToastAdmin from "./ToastAdmin";

export default function NavBarRightSide({ userName }) {
  const [isChecked, setIsChecked] = useState(false);

  const displayToastNotification = () => {
    if (!isChecked) {
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
    setIsChecked(!isChecked);
  };

  return (
    <NavBarRightSideStyled>
      <ToggleButton
        isChecked={isChecked}
        onToggle={displayToastNotification}
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
      />
      <Profile userName={userName} />
      <ToastAdmin />
    </NavBarRightSideStyled>
  );
}

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
