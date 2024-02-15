"use client";
import { COLOR } from "@/app/constant/colors";
import React, { PureComponent } from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "SEP",
    Revendeurs: 35,
    Marques: 55,
  },
  {
    name: "OCT",
    Revendeurs: 35,
    Marques: 55,
  },
  {
    name: "NOV",
    Revendeurs: 45,
    Marques: 67,
  },
  {
    name: "DEC",
    Revendeurs: 31,
    Marques: 50,
  },
  {
    name: "JAN",
    Revendeurs: 44,
    Marques: 69,
  },
  {
    name: "FEB",
    Revendeurs: 50,
    Marques: 70,
  },
];

function SimpleLineChart() {
  const isBrands = useSelector((state) => state.brandsInfo.brands);
  const isReseller = useSelector((state) => state.resellerInfo.resellers);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        {/* <YAxis /> */}
        <Tooltip />
        {/* <Legend /> */}
        <Line
          type="monotone"
          dataKey="Marques"
          stroke={COLOR.primary}
          activeDot={{ r: 8 }}
          strokeWidth={4}
        />
        <Line
          type="monotone"
          dataKey="Revendeurs"
          strokeWidth={4}
          stroke={COLOR.lightsky}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
export default SimpleLineChart;
