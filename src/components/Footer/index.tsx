import { Text } from "components/Text";
import * as Styled from "./styles";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";

export const Footer = () => {
  return (
    <Styled.FooterContainer>
      <Styled.Wrapper>
        <Text size="1.4rem">© Damn It, Rumi! 2022</Text>
        <Styled.LinksContainer>
          <a href="">
            <LinkedinSquare size="30px" />
          </a>
          <a href="">
            <Github size="30px" />
          </a>
        </Styled.LinksContainer>
      </Styled.Wrapper>
    </Styled.FooterContainer>
  );
};
