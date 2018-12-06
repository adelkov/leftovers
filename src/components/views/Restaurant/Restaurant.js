import React from 'react';
import Dashboard from "../../common/Dashboard/Dashboard";
import restaurantRoutes from "../../../routes/restaurantRoutes";
import {mainListItems} from "./menuItems/listItems";

const Restaurant = ({logoutUser}) => {
    return (
        <Dashboard
            logoutUser={logoutUser}
            title="Restaurant page"
            routes={restaurantRoutes}
            mainListItems={mainListItems}
        />
    );
};

export default Restaurant;
