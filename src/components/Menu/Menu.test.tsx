import { fireEvent, screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Menu, MenuProps, MenuBehaviorProps } from ".";
import { vi } from "vitest";

const props: MenuProps & MenuBehaviorProps = {
  onClick: () => console.log("Testing"),
  menuVisible: true,
};

describe("<Menu />", () => {
  it("should render Menu", () => {
    renderTheme(<Menu {...props} />);

    expect(screen.getAllByRole("heading")).toHaveLength(4);
    expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(6);
  });

  it("should render Menu but not on screen", () => {
    renderTheme(<Menu {...props} menuVisible={false} />);

    expect(screen.queryAllByRole("heading")).toHaveLength(0);
    expect(
      screen.queryByRole("heading", { name: "Home" }),
    ).not.toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });

  it("should call function when button is clicked", () => {
    const fn = vi.fn();

    renderTheme(<Menu {...props} onClick={fn} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<Menu {...props} />);

    expect(container).toMatchSnapshot();
  });
});
