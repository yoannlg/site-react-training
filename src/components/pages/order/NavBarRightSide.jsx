import styled from "styled-components";
import Profile from "./Profile";

export default function NavBarRightSide({ userName }) {
  return (
    <NavBarRightSideStyled>
      {/*       <div className="admin-button">ADMIN BUTTON</div>
       */}
      <Profile userName={userName} />
      <div className="picture"></div>
    </NavBarRightSideStyled>
  );
}

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
