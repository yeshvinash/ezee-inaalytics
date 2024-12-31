import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
// import "./CustomPieChart.css";
import styled from "styled-components";

const Container = styled.div`
  width: 153px;
  height: auto;

  canvas {
    width: 100% !important;
    height: 100% !important;
  }

  @media screen and (max-width: 575px) {
    width: 100%;
  }
`;
const CustomPieChart = () => {
  const data = {
    labels: ["Vacant", "Sold", "Day Use", "Complimentary", "Blocked"],
    datasets: [
      {
        data: [50, 20, 5, 20, 5],
        backgroundColor: [
          "#0068FF",
          "#D1D4D9",
          "#00A651",
          "#F39406",
          "#FF5353",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    // <div className="customPieChart-wrap">
    //   <Pie data={data} options={options} />
    // </div>
    <Container>
      <Pie data={data} options={options} />
    </Container>
  );
};

export default CustomPieChart;
