import { useContext, useEffect, useState } from "react";
import * as Styled from "./styles";
import { PageThemeContext } from "contexts/PageTheme";

export const ToggleTheme = () => {
  const { setTheme } = useContext(PageThemeContext);
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);

    if (newTheme.name === "light") {
      setChecked(false);
    }
  }, []);

  useEffect(() => {
    setTheme(checked ? "dark" : "light");
  }, [checked, setTheme]);

  const handleChange = () => {
    setChecked((s) => !s);
    setTheme(checked ? "dark" : "light");
  };

  return (
    <Styled.Container>
      <Styled.Label>
        Toggle light and dark modes
        <Styled.Input
          type="checkbox"
          value="Dark mode active"
          onChange={handleChange}
          checked={checked}
        />
        <Styled.Slider></Styled.Slider>
      </Styled.Label>
    </Styled.Container>
  );
};
