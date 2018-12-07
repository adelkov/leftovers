import React from "react";
import GoogleMapCustom from "../../../common/GoogleMap/GoogleMapCustom";
import CheckList from "../../../common/CheckList/CheckList";
import withAsyncData from "../../../../HOCs/withAsyncData";
import getLatLngFromAddress from "../../../../utils/mapUtil";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import {compose} from "redux";
import {withStyles} from "@material-ui/core";
import GridStyle from "../../../../assets/styles/GridStyle";
import MapContainerStyle from "../../../../assets/styles/MapContainerStyle";


class LeftoverMap extends React.Component {

    state = {
        leftovers: [],
    };


    componentDidMount() {
        const leftoverEdit = this.props.leftovers
            .map(item => {
                item.checked = false;
                item.name = item.food;
                getLatLngFromAddress(item.location)
                    .then(res => {
                        item.lat = res.lat;
                        item.lng = res.lng
                    });
                return item;
            });
        this.setState({
            leftovers: leftoverEdit
        })
    }

    handleSelection = leftover => () => {
        const newLeftovers = this.state.leftovers.map(item => {
            if (item.id === leftover.id) {
                item.checked = !item.checked;
            }
            return item;
            });
        this.setState({
            checked: newLeftovers
        })
    };


    filterChecked = arrUnfiltered => (
        arrUnfiltered.filter(item => item.checked )
    );

    render() {
        const {classes} = this.props;
        const {leftovers} = this.state;
        return (
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Paper className={classes.paper}>
                            <CheckList
                                handleSelection={this.handleSelection}
                                leftovers={leftovers}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                        <Paper className={classes.paperMap}>
                            <GoogleMapCustom
                                markers={this.filterChecked(leftovers)}
                                loadingElement={<div style={{height: `100%`}}/>}
                                containerElement={<div style={MapContainerStyle}/>}
                                mapElement={<div style={{height: `100%`, width: '100%'}}/>}
                            />
                        </Paper>
                    </Grid>
                </Grid>
        );
    }
}

export default compose(
    withAsyncData,
    withStyles(GridStyle)
)(LeftoverMap);
