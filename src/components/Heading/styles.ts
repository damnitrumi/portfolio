import styled, { css } from "styled-components";
import { HeadingProps } from ".";

const pickSize = (size: string) => {
  if (size) {
    return css`
      font-size: ${size};
    `;
  }
};

export const Title = styled.h1<HeadingProps>`
${({ theme, size, as }) => css`
  color: ${theme.colors.white};
  ${pickSize(size)}
  font-weight: ${as == "h1" ? 500 : 400};
`}
`;
