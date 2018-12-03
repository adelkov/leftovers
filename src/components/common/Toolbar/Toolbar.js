import React from 'react';
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import IconButton from "@material-ui/core/IconButton/IconButton";
import SearchIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {withStyles} from "@material-ui/core";
import {HomeStyle} from "../../../assets/styles/HomeStyle";


const sections = [
    'Technology',
    'Design',
    'Culture',
    'Business',
    'Politics',
    'Opinion',
    'Science',
    'Health',
    'Style',
    'Travel',
];

const Toolbar = (props) => {
    const {classes} = props;
    return (
        <>
            <Toolbar className={classes.toolbarMain}>
                <Button size="small">Subscribe</Button>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    Blog
                </Typography>
                <IconButton>
                    <SearchIcon/>
                </IconButton>

            </Toolbar>
            <Toolbar variant="dense" className={classes.toolbarSecondary}>
                {sections.map(section => (
                    <Typography color="inherit" noWrap key={section}>
                        {section}
                    </Typography>
                ))}
            </Toolbar>
        </>
    );
};

export default withStyles(HomeStyle)(Toolbar);
