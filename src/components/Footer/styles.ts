import styled, { css } from "styled-components";
import { Wrapper as Container } from "../Container/styles";

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
  `}
`;

export const FooterContainer = styled(Container)`
    background-color: transparent;
    height: auto;
    position: fixed;
    width: 100%;
    bottom: 0;

    @media ${({ theme }) => theme.media.ltaMedium}{
      background-color: ${({ theme }) => theme.colors.primaryColor};
    }
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 10px;
`;
