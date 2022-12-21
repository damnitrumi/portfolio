import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Container, ContainerProps } from ".";

const props: ContainerProps = {
  children: "Children goes here",
};

describe("<Container />", () => {
  it("should render Container", () => {
    renderTheme(<Container {...props} />);

    expect(screen.getByText("Children goes here")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    renderTheme(<Container {...props} />);

    expect(screen.getByText("Children goes here")).toMatchSnapshot();
  });
});
