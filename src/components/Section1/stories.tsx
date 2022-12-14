import { Meta, Story } from "@storybook/react/types-6-0";
import { Section1 } from ".";

export default {
  title: "Section1",
  component: Section1,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <Section1 {...args} />
    </div>
  );
};
