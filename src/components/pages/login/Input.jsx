import styled from "styled-components";

export default function Input({ onChange, value, Icon, ...restProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input onChange={onChange} value={value} type="text" {...restProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;
  .icon {
    font-size: 15px;
    margin-right: 8px;
    color: #93a2b1;
  }

  input {
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    border: none;
    color: black;
  }
  &::placeholder {
    background-color: #fff;
    color: lightgray;
  }
`;
