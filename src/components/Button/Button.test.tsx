import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Button, ButtonProps } from ".";
import { vi } from "vitest";

const props: ButtonProps = {
  children: "Clique Aqui",
  onClick: () => console.log("Testing"),
};

describe("<Button />", () => {
  it("should render Button", () => {
    renderTheme(<Button {...props} />);

    expect(screen.getByText("Clique Aqui")).toBeInTheDocument();
  });

  it("should call function when clicked", () => {
    const fn = vi.fn();

    renderTheme(<Button {...props} onClick={fn} />);

    expect(screen.getByText("Clique Aqui")).toBeInTheDocument();
  });
});
