import React from "react";

import { Story, Meta } from "@storybook/react";

import Navbar from "../Navbar";

import "../../App.scss";

export default {
  title: "Example/Navbar",
  component: Navbar,
} as Meta;

const Template: Story = (args) => <Navbar {...args} />;

export const MainNavbar = Template.bind({});
MainNavbar.args = {
  children: "test",
};
