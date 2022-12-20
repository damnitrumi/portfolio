import { Button } from "components/Button";
import { Container } from "components/Container";
import Link from "next/link";
import * as Styled from "./styles";
import { Close as CloseIcon } from "@styled-icons/material-outlined";
import { Heading } from "components/Heading";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";

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
        <Styled.ButtonContainer>
          <Button onClick={onClick}>
            <CloseIcon size="30px" />
          </Button>
        </Styled.ButtonContainer>
        <Styled.LinksContainer>
          <Heading>
            <Link href="#home">
              <a onClick={onClick}>Home</a>
            </Link>
          </Heading>
          <Heading>
            <Link href="#sobre">
              <a onClick={onClick}>Sobre</a>
            </Link>
          </Heading>
          <Heading>
            <Link href="#ed_exp">
              <a onClick={onClick}>Educação & Experiência</a>
            </Link>
          </Heading>
          <Heading>
            <Link href="#projetos">
              <a onClick={onClick}>Projetos</a>
            </Link>
          </Heading>
        </Styled.LinksContainer>
        <Styled.IconsContainer>
          <a
            href="https://www.linkedin.com/in/gsoares95/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinSquare size="30px" />
          </a>
          <a
            href="https://github.com/damnitrumi"
            target="_blank"
            rel="noreferrer"
          >
            <Github size="30px" />
          </a>
        </Styled.IconsContainer>
      </Container>
    </Styled.Wrapper>
  );
};
