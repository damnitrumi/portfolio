import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Section3 } from ".";

describe("<Section3 />", () => {
  it("should render Section3", () => {
    renderTheme(<Section3 />);

    expect(
      screen.getByRole("heading", {
        name: "Unicesumar, Maringá-PR / Out/2017 - Ago/2020",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Curso Superior de Tecnologia (CST) em Análise de Sistemas de Computação",
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Vip Sistemas, Maringá-PR / Jul/2018 - Dez/2019",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Realizava a função de suporte de sistemas de TI, onde trabalhava com a manutenção de servidores (Locais e em nuvem) e banco de dados.",
      ),
    ).toBeInTheDocument();
  });
  it("should render", () => {
    const { container } = renderTheme(<Section3 />);

    expect(container).toMatchSnapshot();
  });
});
