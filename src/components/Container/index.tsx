import * as Styled from "./styles";

export type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
