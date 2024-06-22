import { useState } from "react";
import { fakeMenu1, fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "../../../reusable-ui/Card";
import styled from "styled-components";
import { theme } from "../../../../theme";
import {
  formatPrice,
  replaceFrenchCommaWithDot,
} from "../../../../utils/maths";

export default function Menu() {
  //state
  const [menu, setMenu] = useState(fakeMenu2);

  //comportement
  const priceFinalFormat = (price) => {
    let finalPrice = replaceFrenchCommaWithDot(price);
    return (finalPrice = formatPrice(finalPrice));
  };
  return (
    <MenuStyled>
      {menu.map((menu) => (
        <Card
          key={menu.id}
          title={menu.title}
          price={priceFinalFormat(menu.price)}
          img={menu.imageSource}
          /*IDENTIQUE AVEC LE DESTRUCTURING
          mais ils faut que les clé de l'objet soit les même que les props
          EX: j'ai une props img à qui je donne la valeur de menu.imageSource
          en destructurant il faudrait changer la props img en imageSource directement*/
          /* {...menu} */
        />
      ))}
    </MenuStyled>
  );
}
const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
