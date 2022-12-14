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
        max-width: 200px;
    `}
`;

export const NavContainer = styled(Container)`
    background-color: transparent;
    height: auto;
    position: fixed;
    width: 100%;
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
