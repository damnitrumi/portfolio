import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { DataContainer, DataContainerProps } from ".";

const props: DataContainerProps = {
  children: "Children goes here",
};

describe("<DataContainer />", () => {
  it("should render DataContainer", () => {
    renderTheme(<DataContainer {...props} />);

    expect(screen.getByText("Children goes here")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    renderTheme(<DataContainer {...props} />);

    expect(screen.getByText("Children goes here")).toMatchSnapshot();
  });
});
