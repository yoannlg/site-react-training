import styled from "styled-components";
import Profile from "./Profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { useState } from "react";
import { theme } from "../../../../theme";

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
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </NavBarRightSideStyled>
  );
}

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
