import React from 'react';
import Home from './views/Home/Home';
import FoodShare from "./views/Restaurant/Restaurant";
import {Router} from "@reach/router";
import LoginContainer from "./views/Auth/Login/LoginContainer";
import Profile from "./views/Restaurant/Profile/Profile";
import Admin from "./views/Admin/Admin";
import MyListingsContainer from "./views/Restaurant/MyListings/MyListingsContainer";


const MainRoutes = () => {
    return (
        <>
            <Router>
                <Home exact path="/" />
                <Home exact path="/home" />
                <LoginContainer exact path="/login" />
                <MyListingsContainer path="/my-leftovers" />
                <FoodShare path="/leftovers" />
                <Profile path="/profile" />
                <Admin path="/admin" />
            </Router>
        </>
    )
};

export default MainRoutes;
