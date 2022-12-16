import styled, { css } from "styled-components";
import { Wrapper as DataContainer } from "../DataContainer/styles";

export const Wrapper = styled.section`
    ${() => css`
      ${DataContainer}{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    `}
`;
export const Education = styled.div`
    ${() => css`
      background-color: rgba(255, 255, 255, 0.2);
      flex: 0 1 500px;
      padding: 50px;
      transition: all 300ms ease-in-out;
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
    ${() => css`
    background-color: rgba(255, 255, 255, 0.2);
    flex: 0 1 500px;
    padding: 50px;
    transition: all 300ms ease-in-out;

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
