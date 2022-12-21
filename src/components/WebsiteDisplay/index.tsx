import { Text } from "../Text";
import * as Styled from "./styles";

export type WebsiteDisplayProps = {
  link: string;
  srcImg: string;
  name: string;
};

export const WebsiteDisplay = ({ link, srcImg, name }: WebsiteDisplayProps) => {
  return (
    <Styled.Wrapper href={link} target="_blank">
      <Styled.ImgContainer>
        <img src={srcImg} alt={name} />
      </Styled.ImgContainer>
      <Text>{name}</Text>
    </Styled.Wrapper>
  );
};
