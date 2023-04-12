import styled, { css } from "styled-components";
import { Wrapper as Container } from "../Container/styles";

export const Wrapper = styled.nav`
    ${() => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `}
`;

export const imgContainer = styled.a`
    ${() => css`
        max-width: 150px;
    `}
`;

export const NavContainer = styled(Container)`
    background-color: transparent;
    height: auto;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    transition: all 500ms ease-in;


    &.active-menu{
      top: -80px;
    }

    @media ${({ theme }) => theme.media.ltaMedium}{
      background-color: ${({ theme }) => theme.colors.primaryColor};
    }
`;

export const bgMenu = styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    /* pointer-events: none; */
`;

export const BtnsContainer = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    gap: 5px;
  `}
`;
