import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    ${() => css`
        max-width: 1100px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `}
`;
// export const Wrapper = styled.div`
//     ${() => css`
//         max-width: 1100px;
//         margin: 0 auto;
//         height: 100%;
//         padding: 200px 0;
//     `}
// `;
