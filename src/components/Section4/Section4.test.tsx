import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Section4 } from ".";
import { projectLinks } from "./projectLinks";

describe("<Section4 />", () => {
  it("should render Section4", () => {
    renderTheme(<Section4 />);

    expect(
      screen.getByRole("heading", { name: "Projetos" }),
    ).toBeInTheDocument();

    expect(screen.getAllByRole("link")).toHaveLength(projectLinks.length);
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<Section4 />);

    expect(container).toMatchSnapshot();
  });
});
