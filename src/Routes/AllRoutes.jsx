import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Signin from "../components/Singin";
import Subscriptions from "../components/Subscription";

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signin/>}/>
    <Route path="/home" element = {<Home/>}/>
    <Route path="/subscription" element={<Subscriptions/>}/>
    </Routes>
  );
};

export default AllRoutes;
