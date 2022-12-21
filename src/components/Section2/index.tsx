import { Container } from "../Container";
import { DataContainer } from "../DataContainer";
import { Text } from "../Text";
import { Heading } from "../Heading";
import * as Styled from "./styles";
import {
  Html5,
  Css3,
  Javascript,
  ReactLogo,
} from "@styled-icons/boxicons-logos";
import { Typescript, Nextdotjs, Jest } from "@styled-icons/simple-icons";

export const Section2 = () => {
  return (
    <Styled.Wrapper id="sobre">
      <Container>
        <DataContainer>
          <Heading size="3.2rem" as="h3">
            Desde maio de 2021 estudando para ser um desenvolvedor front-end.
          </Heading>
          <Text size="2.2rem">Atualmente trabalho com React.js/Next.JS.</Text>
          <Text size="2.2rem">
            No momento procuro a primeira oportunidade como desenvolvedor
            front-end júnior, e futuramente pretendo estudar sobre React Native
            pois penso em partir para o desenvolvimento Mobile.
          </Text>
          <Text size="2.2rem">Inglês fluente.</Text>
          <Styled.HeadingLink size="2.2rem" as="h3">
            <a
              href="https://github.com/damnitrumi?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Clique aqui para ver os repositórios dos projetos
            </a>
          </Styled.HeadingLink>
          <Styled.IconsContainer>
            <Html5 size="50px" />
            <Css3 size="50px" />
            <Javascript size="50px" />
            <Typescript size="37px" />
            <ReactLogo size="37px" />
            <Nextdotjs size="37px" />
            <Jest size="37px" />
          </Styled.IconsContainer>
        </DataContainer>
      </Container>
    </Styled.Wrapper>
  );
};

{
  /* <Text size="2.4rem">
            <br></br>
            Atualmente trabalho com React.js/Next.JS. <br></br>
            No momento procuro a primeira oportunidade como desenvolvedor
            front-end júnior, e <br></br>
            futuramente pretendo estudar sobre React Native pois penso em partir
            para o <br></br>
            desenvolvimento Mobile. <br></br>
            <br></br>
            Inglês fluente. <br></br>
            <br></br>
          </Text> */
}
