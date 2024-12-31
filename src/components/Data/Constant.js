import SVGIcons from "./SVGIcons";
import InReservation from "../../assets/images/icons/Individual.svg";
import GroupReservation from "../../assets/images/icons/group-reservation.svg";
import Company from "../../assets/images/icons/company.svg";
import TravelAgent from "../../assets/images/icons/travel-agent.svg";

// export const bestSellerData = [
//   {
//     title: "Business Source",
//     value: "Daman Booking",
//     className: <BusinessSource />,
//   },
//   { title: "Room Type", value: "Deluxe Room", className: <RoomType /> },
//   { title: "Rate Type", value: "CP", className: <RateType /> },
//   { title: "OTA", value: "Go-mmt", className: <Ota /> },
// ];
export const bestSellerData = [
  {
    title: "Business Source",
    value: "Daman Booking",
    className: "business-source",
  },
  { title: "Room Type", value: "Deluxe Room", className: "room-type" },
  { title: "Rate Type", value: "CP", className: "rate-type" },
  { title: "OTA", value: "Go-mmt", className: "ota" },
];

export const reservationTypesData = [
  {
    icon: InReservation,
    title: "Individual Reservation",
    value: "12",
  },
  {
    icon: GroupReservation,
    title: "Group Reservation",
    value: "06",
  },
  {
    icon: Company,
    title: "Company",
    value: "09",
  },
  {
    icon: TravelAgent,
    title: "Travel agent",
    value: "09",
  },
];

export const roomStatusData = [
  {
    name: "Vacant",
    value: "(50)",
    className: "vacant",
  },
  {
    name: "Sold",
    value: "(20)",
    className: "sold",
  },
  {
    name: "Day Use",
    value: "(5)",
    className: "day-use",
  },
  {
    name: "Complimentary",
    value: "(20)",
    className: "complimentary",
  },
  {
    name: "Blocked",
    value: "(5)",
    className: "blocked",
  },
];

export const customDoughnutChartData = [
  {
    title: "No. of Reservation",
    data: [24, 10],
    labels: ["Today (24)", "Yesterday (10)"],
    colors: ["#007bff", "#d6d6d6"],
    total: 24,
    subTotal: 10,
  },
  {
    title: "Arrival",
    data: [42, 8],
    labels: ["Arrived (42)", "Pending (8)"],
    colors: ["#007bff", "#d6d6d6"],
    total: 42,
    subTotal: 50,
  },
  {
    title: "Departure",
    data: [7, 3],
    labels: ["Checked Out (7)", "Pending (3)"],
    colors: ["#007bff", "#d6d6d6"],
    total: 7,
    subTotal: 10,
  },
  {
    title: "In-House",
    data: [72, 20],
    labels: ["Adult (52)", "Child (20)"],
    colors: ["#007bff", "#d6d6d6"],
    total: 72,
    subTotal: null,
  },
];

export const headerLinks = [
  { id: "reservation", label: SVGIcons.Reservation },
  { id: "revenue", label: SVGIcons.Revenue },
  { id: "payments", label: SVGIcons.Payments },
  { id: "report", label: SVGIcons.Report },
  { id: "innalytics", label: SVGIcons.Innalytics },
];

export const dashboardLinks = [
  { id: "dashboard", label: "Dashboard" },
  { id: "compare-mode", label: "Compare Mode" },
  { id: "be-statistics", label: "BE Statistics" },
];

export const progressData = [
  { source: "Walk-in", value: "10" },
  { source: "Booking Engine", value: "12" },
  { source: "Booking.com", value: "18" },
  { source: "Agoda", value: "08" },
  { source: "Airbnb", value: "15" },
  { source: "Go-mmt", value: "05" },
];
