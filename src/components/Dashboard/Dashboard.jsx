import React, { useState } from "react";
import SVGIcons from "../Data/SVGIcons";
import {
  bestSellerData,
  customDoughnutChartData,
  reservationTypesData,
  roomStatusData,
  dashboardLinks,
} from "../Data/Constant";
import {
  CustomBarChart,
  CustomDoughnutChart,
  CustomPieChart,
  ReservationSourceProgressBars,
} from "../../components";
import {
  DashboardWrap,
  DashboardTitleWrap,
  CustomTabsGroup,
  DashboardContentWrap,
  BestSellerWrap,
  BestSellerCardbox,
  BestSellerCarditem,
  ReservationTypesWrap,
  DoughnutChartSellerWrap,
  RoomStatus,
  ReservationSourceTypeWrap,
  RsHkStatusWrap,
  DoughnutChartWrap,
  ResponsiveMediaQuery,
  RoomStatusContentWrap,
  ReservationTypesCarditem,
} from "./DashboardStyledComponent";

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState("dashboard");

  return (
    <>
      <ResponsiveMediaQuery>
        <DashboardWrap>
          <DashboardTitleWrap className=" card-bg">
            <h1 className="text-black-tint-2">
              Dashboard{SVGIcons.Exclamation}
            </h1>
            <CustomTabsGroup>
              {dashboardLinks.map((link) => (
                <button
                  key={link.id}
                  className={
                    activeLink === link.id ? "custom-btn active" : "custom-btn"
                  }
                  onClick={() => setActiveLink(link.id)}
                >
                  {link.label}
                </button>
              ))}
            </CustomTabsGroup>
          </DashboardTitleWrap>
          <DashboardContentWrap>
            {/* First column */}
            <DoughnutChartSellerWrap>
              <DoughnutChartWrap className="card-bg">
                {customDoughnutChartData.map((chart, index) => (
                  <CustomDoughnutChart
                    key={index}
                    title={chart.title}
                    data={chart.data}
                    labels={chart.labels}
                    colors={chart.colors}
                    total={chart.total}
                    subTotal={chart.subTotal}
                  />
                ))}
              </DoughnutChartWrap>
              <BestSellerWrap className="card-bg">
                <h6 className="text-black-tint-1 fw-700 ">Best Seller</h6>
                <BestSellerCardbox>
                  {bestSellerData.map((item) => (
                    <BestSellerCarditem
                      key={item.title}
                      className={`${item.className}`}
                    >
                      <span className="type-wrap">{item.title}</span>
                      <span className="name-wrap">{item.value}</span>
                    </BestSellerCarditem>
                  ))}
                </BestSellerCardbox>
              </BestSellerWrap>
            </DoughnutChartSellerWrap>
            {/* second column */}
            <RsHkStatusWrap>
              <RoomStatus className="card-bg">
                <RoomStatusContentWrap>
                  <h6 className="text-black-tint-1 fw-700 ">Room Status</h6>
                  <div className="label-wrap">
                    {roomStatusData.map((item) => {
                      return (
                        <p
                          key={item.name}
                          className={`${item.className} fw-400 text-black-tint-1`}
                        >
                          {item.name}
                          <span className="fw-700"> {item.value}</span>
                        </p>
                      );
                    })}
                  </div>
                </RoomStatusContentWrap>
                <CustomPieChart />
              </RoomStatus>
              <div className="card-bg">
                <h6 className="text-black-tint-1 fw-700 ">
                  House Keeping Status
                </h6>
                <CustomBarChart />
              </div>
            </RsHkStatusWrap>
          </DashboardContentWrap>

          <ReservationSourceTypeWrap>
            <ReservationTypesWrap className="card-bg">
              <h6 className="text-black-tint-1 fw-700 ">Reservation Types</h6>
              <div className="reservarion-types-cardbox">
                {reservationTypesData.map((item) => (
                  <ReservationTypesCarditem
                    key={item.title}
                    className={` d-align`}
                  >
                    <div className="d-align">
                      <div className="icon-wrap d-align-center">
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <h5 className="text-ellipsis text-black fw-700">
                        {item.title}
                      </h5>
                    </div>
                    <span className="number-wrap fw-700">{item.value}</span>
                  </ReservationTypesCarditem>
                ))}
              </div>
            </ReservationTypesWrap>
            <ReservationSourceProgressBars />
          </ReservationSourceTypeWrap>
        </DashboardWrap>
      </ResponsiveMediaQuery>
    </>
  );
};

export default Dashboard;
