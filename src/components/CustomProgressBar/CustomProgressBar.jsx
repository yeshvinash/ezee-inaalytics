import { Progress } from "antd";
import { progressData } from "../Data/Constant";
import styled from "styled-components";
// import "./CustomProgressBar.css";

const Container = styled.div`
  .number-wrap {
    margin-left: 7px;
    flex-shrink: 0;
    color: #0068ff;
    font-size: 24px;
    font-weight: 700;
  }
  .source-name {
    font-size: 13px;
    color: var(--black);
    font-weight: 400;
    word-break: break-word;
    line-height: 18.2px;
  }
  @media screen and (max-width: 575px) {
    .number-wrap {
      font-size: 20px;
    }
  }
`;

const ReservationSourceProgressBars = () => {
  return (
    <Container className="card-bg">
      <h6 className="text-black-tint-1 fw-700 ">Reservation Source</h6>
      {progressData.map((item) => (
        <div key={item.source}>
          <span className="source-name">{item.source}</span>
          <div className="d-align-between">
            <Progress
              trailColor="#E6E6E6"
              strokeColor="#0068FF"
              percent={item.value}
              showInfo={false}
              status="active"
            />
            <span className="number-wrap">{item.value}</span>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default ReservationSourceProgressBars;
