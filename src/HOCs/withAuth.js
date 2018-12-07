import React from 'react';
import * as api from "../store/effects/api"
import history from "../utils/history"
import {notify, types} from "../store/effects/notifications";
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";

const withAuth = (WrappedComponent) => {
    class HOC extends React.Component {

        state = {
            status: ""
        };

        componentWillMount = () => {
            api.isAuthenticated()
                .then(response => {
                    this.setState({
                        status: response.status
                    })
                })
                .catch(() => {
                    history.push("/login");
                    notify(types.error, "Authentication failed.");
                })
        };

        render() {
            return this.state.status === 200 ?
                (<WrappedComponent
                    {...this.props}/>) :
                (<>
                    Authenticating...
                    <LinearProgress/>
                </>)
        }
    }

    return HOC;
};

export default withAuth;
