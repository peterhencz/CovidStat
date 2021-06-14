import React from "react";

import { Story, Meta } from "@storybook/react";

import Button from "../Button";

import "../../App.scss";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  className: "btn",
  additionalStyles: "btn-primary",
  children: "test",
};
