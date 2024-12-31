import styled from "styled-components";

export const DashboardWrap = styled.div`
  padding: 16px;
  max-height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-track {
    background: var(--light-skyblue-tint-1);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--blue);
  }
  .card-bg h6 {
    margin-bottom: 16px;
  }
`;

export const DashboardTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  margin-bottom: 16px;

  h1 {
    font-size: 16px;
    margin-right: 8px;
    display: flex;
    align-items: center;

    svg {
      margin-left: 8px;
    }
  }
`;

export const CustomTabsGroup = styled.div`
  border: 1px solid #d5d5d5;
  border-radius: 4px;

  .custom-btn {
    font-family: var(--primary-font);
    font-size: 13px;
    padding: 7px 26px;
    font-weight: 400;
    outline: none;
    border: none;
    background: transparent;
    line-height: 18.2px;
    transition: 0.3s all ease;

    &.active {
      color: var(--white);
      background-color: var(--blue);
    }

    &:first-child {
      border-radius: 4px 0 0 4px;
    }

    &:last-child {
      border-radius: 0 4px 4px 0;
    }

    &:not(:last-child) {
      border-right: 1px solid #d5d5d5;
    }
  }
`;

export const DashboardContentWrap = styled.div`
  display: grid;
  margin-bottom: 16px;
  grid-template-columns: 67% auto;
  grid-gap: 16px;
`;

export const BestSellerWrap = styled.div`
  padding: 16px;
`;

export const CardBg = styled.div`
  h6 {
    margin-bottom: 16px;
  }
`;

export const BestSellerCardbox = styled.div`
  display: grid;
  grid-gap: 17px;
  grid-template-columns: repeat(4, 1fr);
`;

export const BestSellerCarditem = styled.div`
  border-radius: 4px;
  padding: 15px 12px;
  color: var(--white);

  .type-wrap {
    font-size: 13px;
    font-weight: 400;
    display: inline-block;
    line-height: 14.3px;
    margin-bottom: 8px;
  }

  .name-wrap {
    font-size: 20px;
    display: block;
    font-weight: 700;
    line-height: 23.44px;
  }
  &.business-source {
    background-color: var(--light-lavendar);
  }
  &.room-type {
    background-color: var(--light-skyblue);
  }
  &.rate-type {
    background-color: var(--light-green);
  }
  &.ota {
    background-color: var(--light-gray);
  }
`;

// export const BusinessSource = styled(BestSellerCarditem)`
//   background-color: var(--light-lavendar);
// `;

// export const RoomType = styled(BestSellerCarditem)`
//   background-color: var(--light-skyblue);
// `;

// export const RateType = styled(BestSellerCarditem)`
//   background-color: var(--light-green);
// `;

// export const Ota = styled(BestSellerCarditem)`
//   background-color: var(--light-gray);
// `;

export const ReservationTypesWrap = styled.div`
  padding: 16px;
`;

export const ReservationSourceTypeWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
`;

export const ReservationTypesCarditem = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  background-color: var(--light-skyblue-tint-1);
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  .icon-wrap {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    padding: 5px;
    background: var(--white);
    border-radius: 8px;
    margin-right: 14px;

    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .number-wrap {
    font-size: 24px;
    color: var(--blue);
    flex-shrink: 0;
    margin-left: 5px;
    line-height: 28.13px;
  }

  h5 {
    font-size: 16px;
    word-break: break-word;
    -webkit-line-clamp: 2;
  }
`;

export const DoughnutChartWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 18px;
  margin-bottom: 16px;
`;

export const DoughnutChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    padding-right: 10px;
    border-right: 1px solid #e6e6e6;
  }

  .title-wrap {
    font-size: 16px;
    word-break: break-word;
    font-weight: 700;
    line-height: 18.75px;
    margin-bottom: 16px;
    color: var(--black-tint-1);
    -webkit-line-clamp: 1;
  }

  .doughnutChart-total-wrap {
    width: 130px;
    height: auto;
    position: relative;
    z-index: 1;
    margin-bottom: 16px;

    .number-wrap {
      font-size: 24px;
      position: absolute;
      top: 50%;
      left: 50%;
      box-shadow: 0px 2px 4px 0px #22222229;
      background-color: var(--white);
      transform: translate(-50%, -50%);
      width: calc(100% - 130px);
      height: calc(100% - 130px);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 38%;
      z-index: -1;
    }

    .small-number-wrap {
      color: #999999;
      font-size: 14px;
    }
  }

  canvas {
    width: 100%;
    height: 100%;
  }
`;

export const ChartLabelWrap = styled.div`
  width: 100%;
  flex-wrap: wrap;
`;

export const DotWrap = styled.div`
  word-break: break-word;
  font-weight: 400;
  font-size: 13px;
  padding-right: 2px;
  flex-shrink: 0;
`;

export const RoomStatus = styled.div`
  justify-content: space-between;
  display: flex;
  margin-bottom: 16px;
`;

export const RoomStatusContentWrap = styled.div`
  border-right: 1px solid #d5d5d5;
  padding-right: 45px;
  flex-basis: 50%;

  .label-wrap {
    display: flex;
    flex-direction: column;
    padding-inline-start: 16px;

    p {
      position: relative;
      font-size: 13px;
      font-weight: 400;
      word-break: break-word;

      &:not(:last-child) {
        margin-bottom: 8px;
      }

      &::before {
        content: "";
        position: absolute;
        width: 7px;
        height: 7px;
        background-color: transparent;
        border-radius: 50%;
        top: 50%;
        left: -15px;
        transform: translateY(-50%);
      }

      &.vacant::before {
        background-color: var(--blue);
      }

      &.sold::before {
        background-color: #d1d4d9;
      }

      &.day-use::before {
        background-color: #00a651;
      }

      &.complimentary::before {
        background-color: #f39406;
      }

      &.blocked::before {
        background-color: #ff5353;
      }
    }
  }
`;

export const RsHkStatusWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DoughnutChartSellerWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResponsiveMediaQuery = styled.div`
  @media screen and (max-width: 1199px) {
    ${DashboardContentWrap} {
      grid-template-columns: 100%;
    }

    ${DoughnutChartWrap} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${DoughnutChart} {
      padding-right: 0;
      border-right: none;
    }

    ${CustomTabsGroup} {
      display: flex;
      flex-wrap: wrap;
    }

    ${ChartLabelWrap} {
      margin-top: 16px;
    }

    ${RoomStatusContentWrap} .label-wrap p {
      padding-inline-start: 0;
    }

    ${RsHkStatusWrap} {
      flex-direction: column;
    }

    ${DoughnutChartSellerWrap} {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 991px) {
    ${BestSellerCardbox} {
      grid-gap: 14px;
      grid-template-columns: repeat(2, 1fr);
    }

    ${ReservationSourceTypeWrap} {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 14px;
    }

    ${BestSellerCarditem} .name-wrap {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 575px) {
    ${DashboardTitleWrap} {
      padding: 8px 12px;
      flex-wrap: wrap;

      h1 {
        margin-right: 0;
        flex: 100%;
        margin-bottom: 8px;
      }
    }

    ${CustomTabsGroup} {
      flex: 100%;
      flex-direction: column;

      .custom-btn {
        padding: 7px 16px;
        font-size: 12px;

        &:not(:last-child) {
          border-bottom: 1px solid #d5d5d5;
          border-right: 0;
        }

        &:first-child {
          border-radius: 4px 4px 0 0px;
        }

        &:last-child {
          border-radius: 0 0px 4px 4px;
        }
      }
    }

    ${DoughnutChart} {
      padding-right: 0px;
      border-right: none;
    }

    ${ReservationTypesCarditem} {
      padding: 12px 12px;

      .icon-wrap {
        width: 40px;
        height: 40px;
        margin-right: 8px;

        img {
          max-width: 80%;
        }
      }

      h5 {
        font-size: 14px;
      }

      .number-wrap {
        font-size: 20px;
      }
    }

    ${BestSellerCardbox} {
      grid-template-columns: repeat(1, 1fr);
    }

    ${ReservationSourceTypeWrap} {
      grid-template-columns: repeat(1, 1fr);
    }

    ${DoughnutChartWrap} {
      grid-template-columns: repeat(1, 1fr);
    }

    ${RoomStatus} {
      flex-direction: column;
    }

    ${RoomStatusContentWrap} {
      border-right: 0;
      border-bottom: 1px solid #d5d5d5;
      padding-right: 0px;
      padding-bottom: 20px;
      margin-bottom: 20px;
      flex-basis: 100%;
    }

    ${DoughnutChart} .doughnutChart-total-wrap .small-number-wrap {
      font-size: 12px;
    }

    ${DoughnutChart} .doughnutChart-total-wrap .number-wrap {
      font-size: 22px;
    }
  }
`;
