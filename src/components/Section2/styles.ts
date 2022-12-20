import styled, { css } from "styled-components";
import { Wrapper as DataContainer } from "../DataContainer/styles";
import { Wrapper as Container } from "../Container/styles";
import { Wrapper as Text } from "../Text/styles";
import { Title as Heading } from "../Heading/styles";

export const Wrapper = styled.section`
    ${() => css`
      ${DataContainer}{
        justify-content: flex-start;

        & > ${Heading}{
          margin-bottom: 20px;
        };

        ${Text}:last-of-type{
          margin-top: 30px;
          margin-bottom: 30px;
        }

      }
      ${Container}{
        height: auto;
      }
    `}
`;

export const IconsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-top: 10px;
    max-width: 400px;

    @media ${theme.media.ltaMedium}{
      gap: 2px;
      max-width: 100%;
    }
  `}

`;

export const IconContainer = styled.div`
      flex: 0 1 50px;
`;

export const HeadingLink = styled(Heading)`
  ${({ theme }) => css`

    a{
      background-color: ${theme.colors.white};
      padding: 15px 20px 10px 20px;
      max-width: max-content;
      border-radius: 5px;
      color: ${theme.colors.black};
      transition: all 200ms ease-in;
    }
    a:hover{
      color: ${theme.colors.white};
      background-color: ${theme.colors.hoverGreen};
    }

    @media ${theme.media.ltaMedium}{
      font-size: 1.6rem;
      a{
        max-width: 100%;
        text-align: center;
      }
    }

  `}

`;
