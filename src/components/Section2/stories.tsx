import { Meta, Story } from "@storybook/react/types-6-0";
import { Section2 } from ".";

export default {
  title: "Section2",
  component: Section2,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <Section2 {...args} />
    </div>
  );
};
