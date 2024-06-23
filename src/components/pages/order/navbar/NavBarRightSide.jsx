import styled from "styled-components";
import Profile from "./Profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { useState } from "react";

export default function NavBarRightSide({ userName }) {
  const [isChecked, setIsChecked] = useState(false);
  const notify = () =>
    toast.info("🦄 Wow so easy!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const onToggle = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  };
  return (
    <NavBarRightSideStyled>
      <ToggleButton
        isChecked={isChecked}
        onToggle={onToggle}
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

  .info {
    margin-left: 50px;
  }
`;
