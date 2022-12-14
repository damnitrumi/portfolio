import { Meta, Story } from "@storybook/react/types-6-0";
import { Nav } from ".";

export default {
  title: "Nav",
  component: Nav,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <Nav {...args} />
    </div>
  );
};
