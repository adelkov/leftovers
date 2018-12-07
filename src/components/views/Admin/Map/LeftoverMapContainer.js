import React from "react";
import LeftoverMap from "./LeftoverMap";
import {geocodeByAddress, getLatLng} from "react-places-autocomplete";

class LeftoverMapContainer extends React.Component {

    leftovers = [
        {uid: 1, lat: 47.507354, lon: 19.044378299999998},
        {uid: 2, lat: 47.502354, lon: 19.044478299999998},
        {uid: 3, lat: 47.503354, lon: 19.044378499999998},
    ];

    render() {

        geocodeByAddress("Budapest")
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
        return (
            <LeftoverMap
                leftovers={this.leftovers}
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `600px`, width: `600px`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
            />
        );
    }
}

export default LeftoverMapContainer;
