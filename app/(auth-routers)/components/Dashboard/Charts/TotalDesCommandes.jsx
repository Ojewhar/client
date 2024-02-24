import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { COLOR } from "@/app/constant/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Patients Info Graph",
    },
  },
  scales: {
    x: {
      type: "category",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const generateRandomData = () => {
  return labels.map(() => Math.floor(Math.random() * 1000));
};

const data = {
  labels,
  datasets: [
    {
      label: "Patient",
      data: generateRandomData(),
      backgroundColor: COLOR.uorange,
    },
    {
      label: "User",
      data: generateRandomData(),
      backgroundColor: COLOR.lightsky,
    },
  ],
};

function TotalDesCommandes() {
  return <Bar options={options} data={data} />;
}

export default TotalDesCommandes;
