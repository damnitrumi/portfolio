import styled, { css } from "styled-components";
import { Wrapper as WebsiteDisplay } from "../WebsiteDisplay/styles";

export const Wrapper = styled.section`
    ${() => css`
      ${WebsiteDisplay}{
        flex: 1 1 20%;
      }
    `}
`;

export const WebsiteContainer = styled.div`
    ${() => css`
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      overflow-y: auto;
    `}
`;
