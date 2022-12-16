import styled, { css } from "styled-components";
import { Wrapper as DataContainer } from "../DataContainer/styles";

export const Wrapper = styled.section`
  ${DataContainer}{
    text-align: center;
  }
`;

export const WebsiteContainer = styled.div`
    ${() => css`
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      overflow-y: auto;
      &::-webkit-scrollbar{
        display: none;
      }
      margin-top: 20px;
    `}
`;
