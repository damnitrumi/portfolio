import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { WebsiteDisplay, WebsiteDisplayProps } from ".";
import { projectLinks } from "../Section4/projectLinks";

const props: WebsiteDisplayProps = {
  ...projectLinks[0],
};

describe("<WebsiteDisplay />", () => {
  it("should render websiteDisplay with correct data", () => {
    renderTheme(<WebsiteDisplay {...props} />);

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      projectLinks[0].link,
    );

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      projectLinks[0].srcImg,
    );
    expect(screen.getByText(projectLinks[0].name)).toBeInTheDocument();
  });

  //Não colocarei snapshot pois vai quebrar toda vez que adicionarmos outro elemento ao array
});
