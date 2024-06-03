import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";

import styled from "styled-components";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButtonStyled from "../../reusable-ui/PrimaryButton";
import { theme } from "../../../theme";

export default function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  //comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //render
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>

      <TextInput
        onChange={handleChange}
        value={inputValue}
        placeholder={"Entrez votre prénom"}
        Icon={<BsPersonCircle className="icon" />}
        required
      />

      <PrimaryButtonStyled
        label={"Accéder à mon espace"}
        Icon={<IoChevronForward className="icon" />}
      />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  font-family: "Amatic SC", cursive;

  h1 {
    margin-top: 40px;
    font-size: ${theme.fonts.size.P5};
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.white};
  }
  hr {
    margin: 40px 0;
    border: 1.5px solid ${theme.colors.primary};
  }
  h2 {
    color: ${theme.colors.white};
    margin: 20px 10px 10px;
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
    margin-left: 10px;
  }
`;
