import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Person';
import MapIcon from '@material-ui/icons/List';

import {Link} from "react-router-dom";


const items = [
    {url: '/restaurant/profile', icon:(<DashboardIcon/>), title: "Profile" },
    {url: '/restaurant/my-leftovers', icon:(<MapIcon/>), title: "Listings" },
    {url: '/restaurant/else', icon:(<DashboardIcon/>), title: "Something" },
];

export const mainListItems = (
    <div>
        {
            items.map(item=> (
                <Link to={item.url} key={item.url}>
                    <ListItem button>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title}/>
                    </ListItem>
                </Link>
            ))
        }

    </div>
);
