import React from "react";
import { Route, Routes } from "react-router";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import MySpace from "../pages/MySpace";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="myspace" element={<MySpace />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
