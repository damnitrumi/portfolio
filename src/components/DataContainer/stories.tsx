import { Meta, Story } from "@storybook/react/types-6-0";
import { DataContainer, DataContainerProps } from ".";

export default {
  title: "DataContainer",
  component: DataContainer,
} as Meta<DataContainerProps>;

export const Template: Story<DataContainerProps> = (args) => {
  return (
    <div>
      <DataContainer {...args} />
    </div>
  );
};
