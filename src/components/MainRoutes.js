import React from 'react';
import Home from './views/Home/Home';
import FoodShare from "./views/Restaurant/Restaurant";
import {Router} from "@reach/router";
import LoginContainer from "./views/Auth/Login/LoginContainer";
import MyListings from "./views/Restaurant/MyListings/MyListings";
import Profile from "./views/Restaurant/Profile/Profile";
import Admin from "./views/Admin/Admin";


const MainRoutes = () => {
    return (
        <>
            <Router>
                <Home exact path="/" />
                <Home exact path="/home" />
                <LoginContainer exact path="/login" />
                <MyListings path="/my-listings" />
                <FoodShare path="/leftovers" />
                <Profile path="/profile" />
                <Admin path="/admin" />
            </Router>
        </>
    )
};


export default MainRoutes;
