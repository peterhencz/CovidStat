import React from "react";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Funnel,
  FunnelChart,
  CartesianGrid,
  LabelList,
} from "recharts";

import { ChartProps } from "./types";

const Chart: React.FC<ChartProps> = ({ type = "pie" }) => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ];
  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
    {
      name: "Group E",
      value: 3908,
    },
    {
      name: "Group F",
      value: 4800,
    },
  ];

  const dataX = [
    {
      value: 100,
      name: "展现",
      fill: "#8884d8",
    },
    {
      value: 80,
      name: "点击",
      fill: "#83a6ed",
    },
    {
      value: 50,
      name: "访问",
      fill: "#8dd1e1",
    },
    {
      value: 40,
      name: "咨询",
      fill: "#82ca9d",
    },
    {
      value: 26,
      name: "订单",
      fill: "#a4de6c",
    },
  ];

  if (type === "bar") {
    return (
      <BarChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="pv" fill="#8884d8" />
      </BarChart>
    );
  }
  if (type === "pie") {
    return (
      <PieChart width={730} height={250}>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>
    );
  } else {
    return (
      <FunnelChart width={730} height={250}>
        <Funnel dataKey="value" data={dataX} isAnimationActive>
          <LabelList
            position="right"
            fill="#000"
            stroke="none"
            dataKey="name"
          />
        </Funnel>
      </FunnelChart>
    );
  }
};

export default Chart;
