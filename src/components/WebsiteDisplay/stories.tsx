import { Meta, Story } from "@storybook/react/types-6-0";
import { WebsiteDisplay, WebsiteDisplayProps } from ".";

export default {
  title: "WebsiteDisplay",
  component: WebsiteDisplay,
  args: {
    link: "https://digidex-react-js-damnitrumi.vercel.app/",
    srcImg: "/assets/images/digidex.jpg",
    name: "Digidex",
  },
} as Meta<WebsiteDisplayProps>;

export const Template: Story<WebsiteDisplayProps> = (args) => {
  return (
    <div>
      <WebsiteDisplay {...args} />
    </div>
  );
};
