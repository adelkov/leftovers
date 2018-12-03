import React from "react";
import Home from "../components/views/Home/Home";
import Login from "../components/views/Auth/Login/Login";
import Restaurant from "../components/views/Restaurant/Restaurant";
import Admin from "../components/views/Admin/Admin";

const indexRoutes = [
    { path: "/home", component: Home},
    { path: "/login", component: Login},
    { path: "/restaurant", component: Restaurant},
    { path: "/admin", component: Admin},
];

export default indexRoutes;

