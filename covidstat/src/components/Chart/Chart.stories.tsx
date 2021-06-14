import React from "react";

import { Story, Meta } from "@storybook/react";

import Chart from "../Chart";

import "../../App.scss";

export default {
  title: "Example/Chart",
  component: Chart,
} as Meta;

const Template: Story = (args) => <Chart type="pie" {...args} />;

export const CovidChart = Template.bind({});
CovidChart.args = {
  children: "test",
  type: "pie",
};
