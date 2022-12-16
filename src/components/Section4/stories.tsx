import { Meta, Story } from "@storybook/react/types-6-0";
import { Section4, Section4Props } from ".";

export default {
  title: "Section4",
  component: Section4,
} as Meta<Section4Props>;

export const Template: Story<Section4Props> = (args) => {
  return (
    <div>
      <Section4 {...args} />
    </div>
  );
};
