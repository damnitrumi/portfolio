import styled, { css } from "styled-components";
import { Wrapper as Text } from "../Text/styles";

export const Wrapper = styled.a`
  ${({ theme }) => css`
    /* max-width: 375px; */
    text-align: center;

    ${Text}{
      transition: all 200ms ease-in;
    };

    &:hover ${Text}{
      color: ${theme.colors.hoverGreen}
    }
  `}
`;

export const ImgContainer = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    height: 200px;
    @media ${theme.media.ltaMedium} {
      height: 300px;

    }
    img{
      transition: all 500ms ease-in-out;
      height: 100%;
      /* width: 100%; */
      object-fit: cover;
    }
    &:hover img{
      transform: scale(1.5) rotate(15deg);
    }
  `}
`;
