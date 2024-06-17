import styled from "styled-components";
import { theme } from "../../theme";

export default function Card({ title, className, ...others }) {
  return (
    <CardStyled className={className}>
      <img src={others.img} alt="" />
      <div className="info">
        <h1 className="nom">{title}</h1>
        <div className="detail">
          <p>{others.price}</p>
          <button>Ajouter</button>
        </div>
      </div>
    </CardStyled>
  );
}
const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  height: 330px;
  margin-top: 50px;
  padding-top: 50px;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  img {
    width: 200px;
    height: 145px;
    margin: 0 20px;
  }

  .nom {
    margin-top: 15px;
  }
  .detail {
    display: flex;
    justify-content: space-between;
    border: 1px solid green;
  }
`;
