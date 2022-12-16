import { Meta, Story } from "@storybook/react/types-6-0";
import { Section3 } from ".";

export default {
  title: "Section3",
  component: Section3,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <Section3 {...args} />
    </div>
  );
};
