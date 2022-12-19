import { Container } from "components/Container";
import { DataContainer } from "components/DataContainer";
import { Heading } from "components/Heading";
import * as Styled from "./styles";
import { useEffect, useRef, useState } from "react";
import { Text } from "components/Text";

export const Section1 = () => {
  const index = useRef(0);
  const dotsIndex = useRef(0);
  const [currentText, setCurrentText] = useState("");
  const [currentDots, setCurrentDots] = useState("");
  const name = "Olá, eu sou o Guilherme";
  const threeDots = "...";

  useEffect(() => {
    let timeoutText;
    let timeoutDots;

    if (currentText.length < name.length) {
      timeoutText = setTimeout(() => {
        const realIndex = index.current;
        setCurrentText((value) => value + name.charAt(realIndex));
        index.current += 1;
      }, 100);
    }

    if (currentText.length >= name.length) {
      timeoutDots = setTimeout(() => {
        const realIndexDots = dotsIndex.current;
        setCurrentDots((value) => value + threeDots.charAt(realIndexDots));
        dotsIndex.current += 1;
        if (currentDots.length == 3) {
          setCurrentDots("");
          dotsIndex.current = 0;
        }
      }, 300);
    }

    return () => {
      clearTimeout(timeoutText);
      clearTimeout(timeoutDots);
    };
  }, [currentText, currentDots]);

  return (
    <Styled.Wrapper id="home">
      <Container>
        <DataContainer>
          <Heading size="9.2rem">{`${currentText}${currentDots}`}</Heading>
          <Text size="2.2rem">DESENVOLVEDOR FRONT-END</Text>
        </DataContainer>
      </Container>
    </Styled.Wrapper>
  );
};
