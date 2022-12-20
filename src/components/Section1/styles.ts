import styled, { css } from "styled-components";
import { Title as Heading } from "../Heading/styles";
import { Wrapper as Text } from "../Text/styles";

export const Wrapper = styled.div`
    ${({ theme }) => css`
      @media ${theme.media.ltaMedium}{
        ${Heading}{
          font-size: 8.0rem;
        }
        ${Text}{
          font-size: 1.6rem;
        }
      }
    `}
`;
