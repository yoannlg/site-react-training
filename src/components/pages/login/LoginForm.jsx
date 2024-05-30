import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

      <input
        onChange={handleChange}
        value={inputValue}
        type="text"
        required
        placeholder="Entrez votre prénom"
      />
      <button>Accéder à mon espace</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  background: green;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 464px;
  height: 438px;
  font-family: "Amatic SC", cursive;

  h1 {
    font-size: 48px;
    font-weight: 700;
  }
  h2 {
    font-weight: 700;
    font-size: 36px;
  }
  hr {
    width: 400px;
    border: 1.5px solid #ff9f1b;
  }
  input {
    width: 400px;
    height: 55px;
    margin: 18px;
    padding: 18px, 24px, 18px, 24px;
    border-radius: 5px;
  }

  button {
    width: 400px;
    height: 55px;
    padding: 18px, 24px, 18px, 24px;
    border-radius: 5px;
    border: none;
    background: #ff9f1b;
  }
`;
