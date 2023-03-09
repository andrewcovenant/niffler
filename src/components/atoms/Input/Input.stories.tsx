import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Input from "./Input";

export default {
  title: "Atoms/InputField",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const ClassicInput = Template.bind({});
ClassicInput.args = {
  label: "Classic Input",
  placeholder: "Insert Text Here ...",
  value: "",
  onChange: action("Input changed"),
};
