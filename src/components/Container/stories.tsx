import { Meta, Story } from "@storybook/react/types-6-0";
import { Container, ContainerProps } from ".";

export default {
  title: "Container",
  component: Container,
  args: {
    children: "Olá Mundo",
  },
} as Meta<ContainerProps>;

export const Template: Story<ContainerProps> = (args) => {
  return (
    <div>
      <Container {...args} />
    </div>
  );
};
