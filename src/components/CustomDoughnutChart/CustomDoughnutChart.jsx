import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
  DoughnutChart,
  ChartLabelWrap,
  DotWrap,
  ResponsiveMediaQuery,
} from "../Dashboard/DashboardStyledComponent.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const CustomDoughnutChart = ({
  title,
  data,
  labels,
  colors,
  total,
  subTotal,
}) => {
  return (
    <>
      <ResponsiveMediaQuery>
        <DoughnutChart>
          <span className="title-wrap text-ellipsis">
            {title}
            <span className="custom-badge"> {subTotal}</span>
          </span>
          <div className="doughnutChart-total-wrap">
            <Doughnut
              data={{
                labels: labels,
                datasets: [
                  {
                    data: data,
                    backgroundColor: colors,
                    hoverBackgroundColor: colors,
                    borderWidth: 0,
                    cutout: "80%",
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false, // Hide default legend
                  },
                  tooltip: {
                    callbacks: {
                      label: (tooltipItem) =>
                        `${tooltipItem.label}: ${tooltipItem.raw}`,
                    },
                  },
                  datalabels: {
                    display: false,
                  },
                },
              }}
            />
            <p className="fw-700 text-black-tint-1 number-wrap">
              {total && subTotal ? `${total}/` : `${total}`}
              <span className="small-number-wrap fw-700">
                {subTotal ? `${subTotal}` : ""}
              </span>
            </p>
          </div>

          {/* Custom Legend */}
          <ChartLabelWrap className=" d-align-between">
            {labels.map((label, index) => (
              <div key={index} className="d-align">
                <span
                  style={{
                    display: "inline-block",
                    width: "7px",
                    height: "7px",
                    backgroundColor: colors[index],
                    borderRadius: "50%",
                    marginRight: "4px",
                    flexShrink: "0",
                  }}
                ></span>
                <DotWrap> {label}</DotWrap>
              </div>
            ))}
          </ChartLabelWrap>
        </DoughnutChart>
      </ResponsiveMediaQuery>
    </>
  );
};

export default CustomDoughnutChart;
