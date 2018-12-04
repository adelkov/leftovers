import React from 'react';
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";

const withAsyncData = (WrappedComponent) => {
    class HOC extends React.Component {

        constructor(props, context) {
            super(props, context);
            this.state = {
                loading: true,
                error: null,
                data: []
            }
        }

        async componentDidMount() {
            const response = await this.props.fetchData();
            this.setState({
                data: response.data,
                error: response.error,
                loading: false
            })
        }

        render() {

            const {loading, error} = this.state;
            if (loading) {
                return (<LinearProgress/>)
            } else if (error) {
                return (<div>Error: {error.message}</div>)
            } else {
                return (
                    <WrappedComponent
                        {...this.props}
                    />
                );
            }
        }
    }

    return HOC;
};

export default withAsyncData;
