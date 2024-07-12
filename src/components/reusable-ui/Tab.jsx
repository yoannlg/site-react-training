import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ icon, onClick, className, label }) {
  return (
    <TabStyled onClick={onClick} className={className}>
      {icon && <div className="icon">{icon}</div>}
      {label && <span className="label">{label}</span>}
    </TabStyled>
  );
}
const TabStyled = styled.button`
  height: 43px;
  padding: 0 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  position: relative;
  top: 1px;
  left: 5%;

  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};

  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};

  border-radius: 5px 5px 0 0;

  &:hover {
    border-bottom: 2px solid ${theme.colors.white};
  }
  .icon {
    display: flex;
  }
  .label {
    margin-left: 13px;
  }
`;
