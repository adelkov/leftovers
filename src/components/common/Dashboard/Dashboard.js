import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Switch, Route, Redirect } from "react-router-dom";
import {dashboardStyle} from "../../../assets/styles/DashboardStyle";
import AppbarContainer from "../Appbar/AppbarContainer";



class Dashboard extends React.Component {
    state = {
        open: true,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };



    render() {
        const { classes, routes, mainListItems, title, logoutUser } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppbarContainer
                    logout={logoutUser}
                    open={this.state.open}
                    handleDrawerOpen={this.handleDrawerOpen}
                    title={title}
                />
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>{mainListItems}</List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Switch>
                        {routes.map((prop, key) => {
                            if (prop.redirect)
                                return <Redirect from={prop.path} to={prop.to} key={key} />;
                            return <Route path={prop.path} component={prop.component} key={key} />;
                        })}
                    </Switch>
                </main>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(dashboardStyle)(Dashboard);
