import { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "../../../reusable-ui/Card";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";

export default function Menu() {
  //state
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map(({ id, title, price, imageSource }) => (
        <Card
          key={id}
          title={title}
          leftDetail={formatPrice(price)}
          img={imageSource}
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
  //border: 2px solid blue;
  background: ${theme.colors.background_white};
  display: grid;
  //grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
