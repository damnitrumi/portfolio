import { Text } from "components/Text";
import * as Styled from "./styles";

export type WebsiteDisplayProps = {
  title?: string;
};

export const WebsiteDisplay = ({ title }: WebsiteDisplayProps) => {
  return (
    <Styled.Wrapper href="/">
      <Styled.ImgContainer>
        <img src="/assets/images/Background Wide.jpg" alt="" />
      </Styled.ImgContainer>
      <Text>Nome Aqui</Text>
    </Styled.Wrapper>
  );
};
