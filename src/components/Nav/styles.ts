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
