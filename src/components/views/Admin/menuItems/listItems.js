import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Person';
import MapIcon from '@material-ui/icons/List';

import {Link} from "react-router-dom";


const items = [
    {url: '/admin/map', icon:(<DashboardIcon/>), title: "Map" },
    {url: '/admin/leftovers', icon:(<MapIcon/>), title: "Leftovers" },
    {url: '/admin/users', icon:(<DashboardIcon/>), title: "Users" },
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
