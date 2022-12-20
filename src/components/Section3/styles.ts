import styled, { css } from "styled-components";
import { Wrapper as DataContainer } from "../DataContainer/styles";
import { Wrapper as Container } from "../Container/styles";

export const Wrapper = styled.section`
    ${({ theme }) => css`
      ${DataContainer}{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        @media ${theme.media.ltaMedium}{
          flex-direction: column;
          gap: 20px
        }
      }

      ${Container}{
        @media ${theme.media.ltaMedium}{
          height: auto;
        }
      }
    `}
`;
export const Education = styled.div`
    ${({ theme }) => css`
      background-color: rgba(255, 255, 255, 0.2);
      flex: 0 1 500px;
      padding: 50px;
      transition: all 300ms ease-in-out;
      border-radius: 5px ;

      @media ${theme.media.ltaMedium}{
        flex: 0 1 auto;
      }

      &:hover{
        background-color: #c32865;
      }
    `}
`;

export const EducationData = styled.div`
    ${({ theme }) => css`
      padding: 20px 0;

      & + &{
        border-top: 1px solid ${theme.colors.white};
      }
    `}
`;

export const Experience = styled.div`
    ${({ theme }) => css`
    background-color: rgba(255, 255, 255, 0.2);
    flex: 0 1 500px;
    padding: 50px;
    transition: all 300ms ease-in-out;
    border-radius: 5px ;

    @media ${theme.media.ltaMedium}{
        flex: 0 1 auto;
      }

    &:hover{
        background-color: #c32865;
      }

    `}
`;

export const ExperienceData = styled.div`
    ${({ theme }) => css`
    padding: 20px 0;
    & + &{
        border-top: 1px solid ${theme.colors.white};
      }
    `}
`;
