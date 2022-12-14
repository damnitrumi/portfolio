import { Meta, Story } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from ".";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Clique Aqui",
    onClick: () => console.log("123"),
  },
} as Meta<ButtonProps>;

export const Template: Story<ButtonProps> = (args) => {
  return (
    <div>
      <Button {...args} />
    </div>
  );
};
