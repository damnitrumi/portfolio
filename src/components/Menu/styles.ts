import styled, { css } from "styled-components";
import { MenuBehaviorProps } from ".";

export const Wrapper = styled.div<MenuBehaviorProps>`
    ${({ menuVisible }) => css`
    position: fixed;
    width: 100%;
    max-width: 500px;
    top: 0;
    right: -100%;
    transition: all .8s ease-in-out;

    ${
      menuVisible &&
      css`
        right: 0;
    `
    }
    `}
`;
