import { Button } from "components/Button";
import { Container } from "components/Container";
import Link from "next/link";
import * as Styled from "./styles";
import { Close as CloseIcon } from "@styled-icons/material-outlined";

export type MenuProps = {
  onClick: () => void;
};

export const Menu = ({ onClick }: MenuProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Menu>
        <Container>
          <Button onClickFn={onClick}>
            <CloseIcon size="30px" />
          </Button>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
        </Container>
      </Styled.Menu>
    </Styled.Wrapper>
  );
};
