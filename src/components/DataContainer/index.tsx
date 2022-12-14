import * as Styled from "./styles";

export type DataContainerProps = {
  children: React.ReactNode;
};

export const DataContainer = ({ children }: DataContainerProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
