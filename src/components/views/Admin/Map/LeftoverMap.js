import React from "react";
import {withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";
import LeftoverMarker from "./LeftoverMarker";
import {compose} from "redux";

const LeftoverMap = ({leftovers}) => {

    const markers = leftovers.map(leftover => <LeftoverMarker
        key={leftover.uid}
        leftover={leftover}
        location={{lat: leftover.lat, lng: leftover.lon}}
    />);


    return (
        <>
            <GoogleMap
                defaultZoom={14}
                center={{lat: 47.507354, lng: 19.044378299999998}}
            >
                {markers}
            </GoogleMap>
        </>
    );

};


export default compose(
    withGoogleMap
)(LeftoverMap);
