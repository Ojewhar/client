import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { COLOR } from "@/app/constant/colors";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Accepted", "Rejected", "Pending"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 10],
      backgroundColor: [COLOR.uorangedark, COLOR.upred, COLOR.upyellow],
      borderColor: " #fff",
      borderWidth: 1,
    },
  ],
};

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

function PieChartPatient() {
  return <Pie options={options} data={data} />;
}

export default PieChartPatient;
