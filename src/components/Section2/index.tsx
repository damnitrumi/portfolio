import { Container } from "components/Container";
import { DataContainer } from "components/DataContainer";
import { Text } from "components/Text";
import * as Styled from "./styles";

export const Section2 = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <DataContainer>
          <Text>
            Desde maio de 2021 estudando para ser um desenvolvedor front-end,
            atualmente trabalho com React.js/Next.JS. No momento procuro a
            primeira oportunidade como desenvolvedor front-end júnior. Procuro
            futuramente estudar sobre React Native pois penso em partir para o
            desenvolvimento Mobile também. Inglês fluente. Veja meus projetos em
            github.com/damnitrumi
          </Text>
          <Styled.IconsContainer>
            <Styled.IconContainer>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML Icon"
              />
            </Styled.IconContainer>

            <Styled.IconContainer>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS Icon"
              />
            </Styled.IconContainer>

            <Styled.IconContainer>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="Javascript Icon"
              />
            </Styled.IconContainer>

            <Styled.IconContainer>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="Typescript Icon"
              />
            </Styled.IconContainer>

            <Styled.IconContainer>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                alt="React.js Icon"
              />
            </Styled.IconContainer>

            <Styled.IconContainer>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                alt="Next.js Icon"
              />
            </Styled.IconContainer>

            <Styled.IconContainer>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                alt="JEST Icon"
              />
            </Styled.IconContainer>
          </Styled.IconsContainer>
        </DataContainer>
      </Container>
    </Styled.Wrapper>
  );
};
