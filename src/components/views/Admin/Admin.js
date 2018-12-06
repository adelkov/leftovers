import React from 'react';
import Dashboard from "../../common/Dashboard/Dashboard";
import adminRoutes from "../../../routes/adminRoutes";
import {mainListItems} from "../Admin/menuItems/listItems";

const Admin = ({logoutUser}) => {
    return (
        <Dashboard
            logoutUser={logoutUser}
            title="Admin page"
            routes={adminRoutes}
            mainListItems={mainListItems}
        />
    );
};

export default Admin;
