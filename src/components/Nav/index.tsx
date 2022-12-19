import { Button } from "components/Button";
import * as Styled from "./styles";
import { Menu as MenuIcon } from "@styled-icons/material-outlined";
import { useState } from "react";
import { Menu } from "components/Menu";

// export type NavProps = {
//   menuVisible: boolean;
//   handleMenuClick: () => void;
// };

export const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible((v) => !v);
  };
  return (
    <Styled.NavContainer>
      <Styled.Wrapper>
        <Styled.imgContainer href="#home">
          <img
            src="assets/images/damn-it-rumi-text-white.png"
            alt="Damn It Rumi Logo"
          />
        </Styled.imgContainer>
        <Button onClick={handleMenuClick}>
          <MenuIcon size="30px" />
        </Button>
      </Styled.Wrapper>
      {menuVisible && <Styled.bgMenu />}

      <Menu menuVisible={menuVisible} onClick={handleMenuClick} />
    </Styled.NavContainer>
  );
};
