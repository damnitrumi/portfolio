import { Container } from "components/Container";
import { DataContainer } from "components/DataContainer";
import { Heading } from "components/Heading";
import { WebsiteDisplay } from "components/WebsiteDisplay";
import * as Styled from "./styles";
import { projectLinks } from "./projectLinks";

export const Section4 = () => {
  return (
    <Styled.Wrapper id="projetos">
      <Container>
        <DataContainer>
          <Heading size="3.8rem" as="h5">
            Projetos
          </Heading>
          <Styled.WebsiteContainer>
            {projectLinks.map((item) => {
              return (
                <WebsiteDisplay
                  key={item.name}
                  link={item.link}
                  srcImg={item.srcImg}
                  name={item.name}
                />
              );
            })}
          </Styled.WebsiteContainer>
        </DataContainer>
      </Container>
    </Styled.Wrapper>
  );
};
