import * as Styled from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  onClickFn: () => void;
};

export const Button = ({ children, onClickFn }: ButtonProps) => {
  return <Styled.Wrapper onClick={onClickFn}>{children}</Styled.Wrapper>;
};
