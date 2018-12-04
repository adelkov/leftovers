import React from 'react';
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";

const withAsyncData = (WrappedComponent) => {
    class HOC extends React.Component {


        async componentDidMount() {
            await this.props.fetchData();
        }

        render() {
            const {loading, error} = this.props;
            if (loading) {
                return (<LinearProgress/>)
            } else if (error) {
                return (<div>Error: {error}</div>)
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
