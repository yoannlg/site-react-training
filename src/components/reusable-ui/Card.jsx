import styled from "styled-components";
import { theme } from "../../theme";
import PrimaryButton from "./PrimaryButton";

export default function Card({ title, img, price, ...others }) {
  return (
    <CardStyled className={others.altclassName}>
      <img src={img} alt={title} />
      <div className="info">
        <h1 className="nom">{title}</h1>
        <div className="detail">
          <p>{price}</p>
          {/* <button>Ajouter</button> */}
          <PrimaryButton label={"Ajouter"} />
        </div>
      </div>
    </CardStyled>
  );
}
const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /*  width: 240px;
  height: 330px;
  margin-top: 50px;
  padding-top: 50px; */
  width: 200px; //240px - 20px de padding droite et 20px de padding gauche
  height: 270px; //330px - 50px de padding-top et - 10px de padding-bottom
  padding: 50px 20px 10px;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  img {
    width: 100%;
    height: 145px;
    /* margin: 0 20px; */
    object-fit: contain;
  }

  .nom {
    margin-top: 15px;
  }
  .info {
    width: 200px;
    height: 110px;
    //padding: 0 5px 5px 5px;
    h1 {
      font-family: "Amatic SC";
      font-size: ${theme.fonts.size.P4};
      font-weight: ${theme.fonts.weights.bold};
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .detail {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 0;

    p {
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.size.P0};
      font-weight: ${theme.fonts.weights.regular};
    }
    button {
      font-size: ${theme.fonts.size.XS};
      font-weight: ${theme.fonts.weights.bold};
      width: 95px;
      height: 38px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
