import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Signin from "../components/Singin";

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signin/>}/>
    <Route path="/dashboard" element = {<Home/>}/>
    </Routes>
  );
};

export default AllRoutes;
