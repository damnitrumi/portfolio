import { Nav } from "components/Nav";
import { Section1 } from "components/Section1";
import * as Styled from "./styles";

export const Home = () => {
  return (
    <Styled.Wrapper>
      <Nav />
      <Section1 />
    </Styled.Wrapper>
  );
};
