import { Button } from "components/Button";
import * as Styled from "./styles";
import { Menu as MenuIcon } from "@styled-icons/material-outlined";

export const Nav = () => {
  return (
    <Styled.NavContainer>
      <Styled.Wrapper>
        <Styled.imgContainer href="/">
          <img
            src="assets/images/damn-it-rumi-text-white.png"
            alt="Damn It Rumi Logo"
          />
        </Styled.imgContainer>
        <Button onClickFn={() => console.log("123")}>
          <MenuIcon size="30px" />
        </Button>
      </Styled.Wrapper>
    </Styled.NavContainer>
  );
};
