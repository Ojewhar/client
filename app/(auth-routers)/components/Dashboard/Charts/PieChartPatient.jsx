import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { COLOR } from "@/app/constant/colors";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
    },
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Patient Chart Informations",
    },
  },
  layout: {
    padding: {
      bottom: 20,
    },
  },
  //   maintainAspectRatio: false,
  maxHeight: 300,
};

function PieChartPatient({ data }) {
  return <Pie options={options} data={data} />;
}

export default PieChartPatient;
