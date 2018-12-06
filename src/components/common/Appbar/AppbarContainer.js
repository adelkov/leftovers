import React from 'react';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography/Typography";
import {dashboardStyle} from "../../../assets/styles/DashboardStyle";
import {withStyles} from "@material-ui/core";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from "@material-ui/core/AppBar/AppBar";
import history from "../../../utils/history"
import Button from "@material-ui/core/Button/Button";

const toggleRole = () => {
    if (history.location.pathname.startsWith("/restaurant")) {
        history.push("/admin")
    } else {
        history.push("/restaurant")
    }
};


const AppbarContainer = ({classes, title, logout, open, handleDrawerOpen}) => {
    return (
        <AppBar
            position="absolute"
            className={classNames(classes.appBar, open && classes.appBarShift)}
        >
            <Toolbar disableGutters={!open} className={classes.toolbar}>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={handleDrawerOpen}
                    className={classNames(
                        classes.menuButton,
                        open && classes.menuButtonHidden,
                    )}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography
                    component="h1"
                    variant="display1"
                    color="inherit"
                    noWrap
                    className={classes.title}
                >
                    {title}
                </Typography>
                <Button variant="contained" color="default" onClick={toggleRole}>
                    Toggle Role
                </Button>
                <Button variant="contained" color="primary" onClick={logout}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

AppbarContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    open: PropTypes.bool,
    handleDrawerOpen: PropTypes.func,
};

export default withStyles(dashboardStyle)(AppbarContainer);
