import { Container } from "components/Container";
import { DataContainer } from "components/DataContainer";
import { Heading } from "components/Heading";
import { WebsiteDisplay } from "components/WebsiteDisplay";
import * as Styled from "./styles";

export const Section4 = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <DataContainer>
          <Heading size="2.4rem" as="h5">
            Projetos
          </Heading>
          <Styled.WebsiteContainer>
            <WebsiteDisplay />
            <WebsiteDisplay />
            <WebsiteDisplay />
            <WebsiteDisplay />
            <WebsiteDisplay />
            <WebsiteDisplay />
            <WebsiteDisplay />
            <WebsiteDisplay />
            <WebsiteDisplay />
            <WebsiteDisplay />
          </Styled.WebsiteContainer>
        </DataContainer>
      </Container>
    </Styled.Wrapper>
  );
};
