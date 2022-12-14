import * as Styled from "./styles";

export type CloneMeProps = {
  title?: string;
};

export const CloneMe = ({ title }: CloneMeProps) => {
  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
