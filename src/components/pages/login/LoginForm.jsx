import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";

import styled from "styled-components";
import TextInput from "../../reusable-ui/TextInput";

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
        icon={<BsPersonCircle className="icon" />}
        required
      />

      <button className="button-with-icon">
        <span>Accéder à mon espace</span>
        <IoChevronForward className="icon" />
      </button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;

  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 438px; */
  font-family: "Amatic SC", cursive;

  h1 {
    margin-top: 40px;
    font-size: 48px;
    font-weight: 700;
    color: white;
  }
  hr {
    margin: 40px 0;
    border: 1.5px solid #ff9f1b;
  }
  h2 {
    color: white;
    margin: 20px 10px 10px;
    font-size: 36px;
    font-weight: 700;
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
  }

  .button-with-icon {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;

    &:hover:not(:disabled) {
      background-color: #fff;
      color: #ff9f1b;
      border: 1px solid #ff9f1b;
      transition: all 200ms ease-out;
    }

    &:active {
      color: white;
      background-color: #ff9f1b;
      border: 1px solid #ff9f1b;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      margin-left: 10px;
    }
  }

  /* button {
    width: 400px;
    height: 55px;
    padding: 18px, 24px, 18px, 24px;
    margin: 10px;
    border-radius: 5px;
    border: none;
    background: #ff9f1b;
  } */
`;
