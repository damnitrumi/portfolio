import { screen } from "@testing-library/react";
import { Heading } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<Heading />", () => {
  it("should render a heading", () => {
    renderTheme(<Heading>Example</Heading>);
    const heading = screen.getByRole("heading", { name: "Example" });
    expect(heading).toBeInTheDocument();
  });
  it("should render a heading with corrent font-size and and font-weight", () => {
    renderTheme(
      <Heading as="h2" size="3.2rem">
        Example
      </Heading>,
    );
    const heading = screen.getByRole("heading", { name: "Example" });
    expect(heading).toHaveStyleRule("font-size", "3.2rem");
    expect(heading).toHaveStyleRule("font-weight", "400");
  });
});
