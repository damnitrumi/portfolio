import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.primaryColor};
        padding: ${theme.paddings.containerDefault};
        height: 100vh;

        @media ${theme.media.ltaMedium}{
            padding: ${theme.paddings.containerLtaMedium};
        }
    `}
`;
