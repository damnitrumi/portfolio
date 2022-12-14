import { Button } from "components/Button";
import { Container } from "components/Container";
import Link from "next/link";
import * as Styled from "./styles";
import { Close as CloseIcon } from "@styled-icons/material-outlined";

export type MenuProps = {
  onClick: () => void;
};

export type MenuBehaviorProps = {
  menuVisible: boolean;
};

export const Menu = ({
  menuVisible,
  onClick,
}: MenuProps & MenuBehaviorProps) => {
  return (
    <Styled.Wrapper menuVisible={menuVisible}>
      <Container>
        <Button onClick={onClick}>
          <CloseIcon size="30px" />
        </Button>
        <Link href="/">Link</Link>
      </Container>
    </Styled.Wrapper>
  );
};
