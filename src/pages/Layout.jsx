import React from "react";
import AppHeader from "../components/Header/Header";
import Dashboard from "../components/Dashboard/Dashboard";
import styled from "styled-components";

const Test = styled.section`
  background: var(--light-white-tint);
`;
const Layout = () => {
  return (
    <Test>
      <AppHeader />
      <Dashboard />
    </Test>
  );
};

export default Layout;
