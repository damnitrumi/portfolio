import { fireEvent, screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Nav } from ".";

describe("<Nav />", () => {
  it("should render Nav", () => {
    renderTheme(<Nav />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Damn It Rumi Logo");
  });

  it("should not render bgMenu when menuVisible False and render when True", () => {
    renderTheme(<Nav />);

    expect(screen.queryByLabelText("bgMenu")).not.toBeInTheDocument();

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(screen.getByLabelText("bgMenu")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<Nav />);

    expect(container).toMatchSnapshot();
  });
});
