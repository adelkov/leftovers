import React from "react";
import LeftoverMap from "./LeftoverMap";
import LocationSearchInput from "./LocationSearchInput";

export default class LeftoverMapContainer extends React.Component {

    leftovers = [
        {uid: 1, lat: 47.507354, lon: 19.044378299999998},
        {uid: 2, lat: 47.502354, lon: 19.044478299999998},
        {uid: 3, lat: 47.503354, lon: 19.044378499999998},
    ];

    render() {
        return (
            <>
                <LeftoverMap
                    leftovers={this.leftovers}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC_YLBHJrEc36MdARSyS_qpqWHp8OBkyhA&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{height: `100%`}}/>}
                    containerElement={<div style={{height: `600px`, width: `600px`}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                />
                <LocationSearchInput
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC_YLBHJrEc36MdARSyS_qpqWHp8OBkyhA&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{height: `100%`}}/>}
                    containerElement={<div style={{height: `600px`, width: `600px`}}/>}
                />
            </>
        );
    }
}
