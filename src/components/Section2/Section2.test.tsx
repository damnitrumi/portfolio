import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Section2 } from ".";

describe("< Section2/>", () => {
  it("should render Section2 and is components", () => {
    renderTheme(<Section2 />);

    expect(
      screen.getByText(
        "Desde maio de 2021 estudando para ser um desenvolvedor front-end.",
      ),
    ).toHaveStyleRule("font-size", "3.2rem");
    expect(
      screen.getByText("Atualmente trabalho com React.js/Next.JS."),
    ).toHaveStyleRule("font-size", "2.2rem");
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://github.com/damnitrumi?tab=repositories",
    );
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<Section2 />);

    expect(container).toMatchSnapshot();
  });
});
