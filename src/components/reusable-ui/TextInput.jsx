import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ onChange, value, Icon, ...restProps }) {
  return (
    <TextInputStyled>
      {Icon && Icon}
      <input onChange={onChange} value={value} type="text" {...restProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;
  .icon {
    font-size: ${theme.fonts.size.P0};
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weights.regular};
    border: none;
    color: ${theme.colors.dark};

    &:hover {
      border: 2px solid ${theme.colors.primary};
      border-radius: 5px;
    }
    &::placeholder {
      background-color: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;
