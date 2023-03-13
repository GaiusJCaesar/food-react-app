import { Outlet, Link } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';
import TopNavigationBar from "../../components/TopNavigationBar";

const Layout = () => {
  return (
    <>
        <TopNavigationBar />
        <Outlet />
    </>
  );
};

export default Layout;
