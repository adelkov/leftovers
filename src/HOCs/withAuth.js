import React from 'react';
import * as api from "../store/effects/api"
import history from "../utils/history"
import {notify, types} from "../store/effects/notifications";

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
                .catch( e => {
                    history.push("/login");
                    notify(types.error, "Authentication required.");
                })
        };

        render() {
            switch (this.state.status) {
                case "":
                    return (<div> Loading...</div>);
                case 200:
                    return (<WrappedComponent
                        {...this.props}
                    />);
                default:
                    return (
                        <div>Loading...</div>
                    );
            }
        }
    }

    return HOC;
};

export default withAuth;
