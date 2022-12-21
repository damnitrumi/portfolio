import { Container } from "../Container";
import { DataContainer } from "../DataContainer";
import { Heading } from "../Heading";
import { Text } from "../Text";
import * as Styled from "./styles";

export const Section3 = () => {
  return (
    <Styled.Wrapper id="ed_exp">
      <Container>
        <DataContainer>
          <Styled.Education>
            <Heading size="4.7rem" as="h2">
              Educação
            </Heading>
            <Styled.EducationData>
              <Heading as="h3">FORMAÇÃO ACADÊMICA</Heading>
              <Heading size="1.6rem" as="h4">
                Unicesumar, Maringá-PR / Out/2017 - Ago/2020
              </Heading>
              <Text size="1.4rem">
                Curso Superior de Tecnologia (CST) em Análise de Sistemas de
                Computação
              </Text>
            </Styled.EducationData>
            <Styled.EducationData>
              <Heading as="h3">LICENÇAS E CERTIFICADOS</Heading>
              <Heading size="1.6rem" as="h4">
                Udemy
              </Heading>
              <Text size="1.4rem">
                Web Design Completo (HTML, CSS e Javascript)
              </Text>
            </Styled.EducationData>
          </Styled.Education>
          <Styled.Experience>
            <Heading size="4.7rem" as="h2">
              Experiências
            </Heading>
            <Styled.ExperienceData>
              <Heading size="1.6rem" as="h4">
                Vip Sistemas, Maringá-PR / Jul/2018 - Dez/2019
              </Heading>
              <Text size="1.4rem">
                Realizava a função de suporte de sistemas de TI, onde trabalhava
                com a manutenção de servidores (Locais e em nuvem) e banco de
                dados.
              </Text>
            </Styled.ExperienceData>
          </Styled.Experience>
        </DataContainer>
      </Container>
    </Styled.Wrapper>
  );
};
