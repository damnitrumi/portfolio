import { Meta, Story } from "@storybook/react/types-6-0";
import { Section4 } from ".";

export default {
  title: "Section4",
  component: Section4,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <Section4 {...args} />
    </div>
  );
};
