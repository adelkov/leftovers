import React, {Component} from 'react';
import indexRoutes from "../routes";
import {Route, Router, Switch} from "react-router-dom";
import history from '../utils/history'
import {withScriptjs} from "react-google-maps";



class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    {indexRoutes.map((prop, key) => {
                        return <Route path={prop.path} component={prop.component} key={key}/>;
                    })}
                </Switch>
            </Router>
        );
    }
}

export default withScriptjs(App);
