import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
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

      <div className="input-container">
        <BsPersonCircle className="icon" />
        <input
          onChange={handleChange}
          value={inputValue}
          type="text"
          required
          placeholder="Entrez votre prénom"
        />
      </div>
      <button>Accéder à mon espace</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  background: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px auto;
  width: 464px;
  height: 438px;
  font-family: "Amatic SC", cursive;

  h1 {
    font-size: 48px;
    font-weight: 700;
    color: white;
  }
  hr {
    width: 400px;
    border: 1.5px solid #ff9f1b;
  }
  h2 {
    font-weight: 700;
    font-size: 36px;
    color: white;
  }
  .input-container {
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    .icon {
      font-size: 15px;
      margin-right: 8px;
    }

    input {
      border: none;
      font-size: 15px;
      color: black;
    }
    &::placeholder {
      background-color: #fff;
      color: lightgray;
    }
  }

  button {
    width: 400px;
    height: 55px;
    padding: 18px, 24px, 18px, 24px;
    margin: 10px;
    border-radius: 5px;
    border: none;
    background: #ff9f1b;
  }
`;
