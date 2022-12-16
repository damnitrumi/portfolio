import { createGlobalStyle } from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img{
    max-width: 100%;
    display: block;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.body};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.headings};
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    display: block;
    text-decoration: none;
  }

  ${StyledIconBase}{
    color: ${({ theme }) => theme.colors.white};
    transition: all 300ms ease-in-out;
    &:hover{
      color: #00FF00;
    }
  }

`;
