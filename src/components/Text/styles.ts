import styled, { css } from "styled-components";
import { TextProps } from ".";

export const Wrapper = styled.p<TextProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.white};
    font-size: ${size};
    line-height: 30px;
  `}
`;
