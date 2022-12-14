import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    ${() => css`
        height: 100vh;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: flex-end;
        position: absolute;
        top: 0;
        left: 0;
    `}
`;

export const Menu = styled.div`
    ${({ theme }) => css`
        height: 100%;
        /* background-color: ${theme.colors.primaryColor}; */
        flex: 0 1 500px;
    `}
`;
