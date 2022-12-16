import styled, { css } from "styled-components";
import { Wrapper as Container } from "../Container/styles";

export const Wrapper = styled.div`
  ${() => css`
  `}
`;

export const FooterContainer = styled(Container)`
    background-color: transparent;
    height: auto;
    position: fixed;
    width: 100%;
    bottom: 0;
`;

export const LinksContainer = styled.div``;
