import { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "../../../reusable-ui/Card";
import styled from "styled-components";

export default function Menu() {
  //state
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map((menu) => (
        <Card
          key={menu.id}
          title={menu.title}
          price={menu.price}
          img={menu.imageSource}
        />
      ))}
    </MenuStyled>
  );
}
const MenuStyled = styled.div`
  flex: 1;
  display: grid;
  justify-items: center;
  border: 2px solid red;
  grid-template-columns: 350px 350px 350px 350px;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
`;
