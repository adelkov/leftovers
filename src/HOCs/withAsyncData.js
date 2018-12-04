import React from 'react';
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import image from "../assets/img/404.png"

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
                return (<div>
                    <img width="800" src={image} alt=""/>
                </div>)
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
