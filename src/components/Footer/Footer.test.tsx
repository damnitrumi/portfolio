import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Footer } from ".";

describe("<Footer />", () => {
  it("should render Footer", () => {
    renderTheme(<Footer />);

    expect(screen.getByText("© Damn It, Rumi! 2022")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });
  it("should match Snapshot", () => {
    const { container } = renderTheme(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
