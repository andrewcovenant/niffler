import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import CurrencyConverter from "./CurrencyConverter";

export default {
  title: "Molecules/CurrencyInputField",
  component: CurrencyConverter,
} as ComponentMeta<typeof CurrencyConverter>;

const Template: ComponentStory<typeof CurrencyConverter> = (args) => (
  <CurrencyConverter {...args} />
);

export const EuroToUSDCurrencyConverter = Template.bind({});
EuroToUSDCurrencyConverter.args = {
  exchangeRate: 1.2,
};
