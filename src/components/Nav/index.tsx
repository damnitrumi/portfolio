import { Button } from "../Button";
import * as Styled from "./styles";
import { Menu as MenuIcon } from "@styled-icons/material-outlined";
import { useEffect, useState } from "react";
import { Menu } from "../Menu";

export const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuSlide, setMenuSlide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [resized, setResized] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible((v) => !v);
  };

  const hideNavOnScroll = () => {
    const scrollWindow = window.scrollY;
    if (scrollWindow > lastScrollY && menuSlide == false) {
      setMenuSlide(true);
    } else if (scrollWindow < lastScrollY && menuSlide == true) {
      setMenuSlide(false);
    }

    setLastScrollY(scrollWindow);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", hideNavOnScroll);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", hideNavOnScroll);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  const defineWidth = () => {
    if (window.innerWidth > 768 && resized == true) {
      setResized(false);
    }
    if (window.innerWidth < 768 && resized == false) {
      setResized(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", defineWidth);

    return () => window.removeEventListener("resize", defineWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resized]);

  return (
    <Styled.NavContainer className={menuSlide && resized ? "active-menu" : ""}>
      <Styled.Wrapper>
        <Styled.imgContainer href="#home">
          <img
            src="assets/images/damn-it-rumi-text-white.png"
            alt="Damn It Rumi Logo"
          />
        </Styled.imgContainer>
        <Button onClick={handleMenuClick}>
          <MenuIcon size="30px" />
        </Button>
      </Styled.Wrapper>
      {menuVisible && <Styled.bgMenu aria-label="bgMenu" />}

      <Menu menuVisible={menuVisible} onClick={handleMenuClick} />
    </Styled.NavContainer>
  );
};
