import React from "react";
import GoogleMapCustom from "../../../common/GoogleMap/GoogleMapCustom";
import CheckList from "../../../common/CheckList/CheckList";
import withAsyncData from "../../../../HOCs/withAsyncData";
import getLatLngFromAddress from "../../../../utils/mapUtil";

class LeftoverMap extends React.Component {

    state = {
        leftovers: [
            {id: 1, name: "yes", lat: 47.507354, lng: 19.044378299999998},
            {id: 2, name: "no", lat: 47.502354, lng: 19.044478299999998},
            {id: 3, name: "ba", lat: 47.503354, lng: 19.044378499999998},
        ],
        checked: [
        ],
    };


    componentDidMount() {

        const leftoverEdit = this.props.leftovers
            .slice(0, 5)
            .map(item => {
                item.checked = false;
                item.name = item.food;
                return item;
            })
            .map(item => {
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
        const {leftovers} = this.state;
        return (
            <>
                <CheckList
                    handleSelection={this.handleSelection}
                    leftovers={leftovers}
                />
                <GoogleMapCustom
                    markers={this.filterChecked(leftovers)}
                    loadingElement={<div style={{height: `100%`}}/>}
                    containerElement={<div style={{height: `400px`, width: `100%`}}/>}
                    mapElement={<div style={{height: `100%`, width: '100%'}}/>}
                />
            </>
        );
    }
}

export default withAsyncData(LeftoverMap);

// geocodeByAddress("Budapest")
//     .then(results => getLatLng(results[0]))
//     .then(latLng => console.log('Success', latLng))
//     .catch(error => console.error('Error', error));
