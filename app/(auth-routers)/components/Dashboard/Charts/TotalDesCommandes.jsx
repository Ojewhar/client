import { COLOR } from "@/app/constant/colors";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  defs,
  linearGradient,
  stop,
} from "recharts";

const data = [
  {
    name: "S01",
    pv: 1398,
  },
  {
    name: "S02",
    pv: 9800,
  },
  {
    name: "S03",
    pv: 3908,
  },
  {
    name: "S04",
    pv: 4800,
  },
  {
    name: "S05",
    pv: 3800,
  },
  {
    name: "S06",
    pv: 4300,
  },
  {
    name: "S07",
    pv: 2400,
  },
];

export default class TotalDesCommandes extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={230}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="gradientId" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={COLOR.primary} stopOpacity={0.8} />
              <stop offset="95%" stopColor={COLOR.primary} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar
            dataKey="pv"
            fill="url(#gradientId)"
            barSize={20}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
