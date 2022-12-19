import styled, { css } from "styled-components";
import { MenuBehaviorProps } from ".";
import { LinksContainer as IconsContainerMock } from "../Footer/styles";
import { StyledIconBase } from "@styled-icons/styled-icon";

export const Wrapper = styled.div<MenuBehaviorProps>`
    ${({ theme, menuVisible }) => css`
    position: fixed;
    width: 100%;
    max-width: 500px;
    top: 0;
    right: -100%;
    transition: all .8s ease-in-out;

    @media ${theme.media.ltaMedium} {
      max-width: 100%;
    };

    ${
      menuVisible &&
      css`
        right: 0;
    `
    }
    `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const LinksContainer = styled.div`
  padding: 30px 0;

  a{
    padding: 20px 0;
    color: ${({ theme }) => theme.colors.menuGray};
    transition: all 200ms ease-in;
  }

  a:hover{
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const IconsContainer = styled(IconsContainerMock)`
  ${StyledIconBase}{
    color: ${({ theme }) => theme.colors.menuGray};
    &:hover{
      color: ${({ theme }) => theme.colors.hoverGreen};
    }
  }
`;
