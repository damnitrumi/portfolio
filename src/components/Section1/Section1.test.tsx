import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Section1 } from ".";

describe("<Section1 />", () => {
  it("should render Section1", () => {
    renderTheme(<Section1 />);
    expect(screen.getByRole("heading")).toHaveStyleRule("font-size", "9.2rem");
    expect(screen.getByText("DESENVOLVEDOR FRONT-END")).toHaveStyleRule(
      "font-size",
      "2.2rem",
    );
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<Section1 />);
    expect(container).toMatchSnapshot();
  });
});
