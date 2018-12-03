import React, {Component} from 'react';
import indexRoutes from "../routes";
import {createBrowserHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

const hist = createBrowserHistory();


class App extends Component {
    render() {
        return (
            <Router history={hist}>
                <Switch>
                    {indexRoutes.map((prop, key) => {
                        return <Route path={prop.path} component={prop.component} key={key}/>;
                    })}
                </Switch>
            </Router>
        );
    }
}

export default App;
