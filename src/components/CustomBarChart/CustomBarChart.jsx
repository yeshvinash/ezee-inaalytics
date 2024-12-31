import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register necessary components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels,
  Tooltip,
  Legend
);

const CustomBarChart = () => {
  const data = {
    labels: ["Clean", "HK Assign", "Dirty", "Block"],
    datasets: [
      {
        label: "House Keeping Status",
        data: [18, 14, 10, 8],
        backgroundColor: ["#0068FF", "#00A651", "#F39406", "#FF5353"],
        borderColor: ["#ffffff"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} rooms`;
          },
        },
      },
      datalabels: {
        display: true,
        anchor: "end",
        align: "top",
        font: {
          size: 12,
          weight: "400",
          color: "#999999",
        },
        formatter: (value) => value,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
            weight: 400,
          },
          color: "#666666",
          // stepSize: 40,
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        ticks: {
          font: {
            size: 12,
          },
          color: "#666",
          stepSize: 22,
        },
        grid: {
          color: "red",
        },
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CustomBarChart;
