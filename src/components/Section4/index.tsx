import { Container } from "components/Container";
import { DataContainer } from "components/DataContainer";
import { WebsiteDisplay } from "components/WebsiteDisplay";
import * as Styled from "./styles";

export type Section4Props = {
  title?: string;
};

export const Section4 = ({ title }: Section4Props) => {
  return (
    <Styled.Wrapper>
      <Container>
        <DataContainer>
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
