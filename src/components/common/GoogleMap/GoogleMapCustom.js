import React from "react";
import {withGoogleMap, GoogleMap} from "react-google-maps";
import mapStyle from "../../../assets/styles/MapStyle"
import LeftoverMarker from "../../views/Admin/Map/LeftoverMarker/LeftoverMarker";
import {compose} from "redux";

const GoogleMapCustom = ({markers}) => {

     markers = markers.map(marker => <LeftoverMarker
        key={marker.id}
        marker={marker}
        location={{lat: marker.lat, lng: marker.lng}}
    />);

    return (
        <GoogleMap
            defaultZoom={12}
            defaultOptions={mapStyle}
            center={{lat: 47.507354, lng: 19.044378299999998}}
        >
            {markers}
        </GoogleMap>
    );

};


export default compose(
    withGoogleMap
)(GoogleMapCustom);
