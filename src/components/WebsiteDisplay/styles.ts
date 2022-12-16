import styled, { css } from "styled-components";

export const Wrapper = styled.a`
  ${() => css`
    /* max-width: 375px; */
    text-align: center;
  `}
`;

export const ImgContainer = styled.div`
  ${() => css`
  overflow: hidden;
    img{
      transition: all 500ms ease-in-out;
    }
    &:hover img{
      transform: scale(1.5) rotate(15deg);
    }
  `}
`;
