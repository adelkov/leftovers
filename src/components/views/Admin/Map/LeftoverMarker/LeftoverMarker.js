import React from "react";
import { Marker } from "react-google-maps";
import MarkerIcon from "@material-ui/icons/Fastfood"

export default class LeftoverMarker extends React.Component {

    render(){
        return(
            <Marker
                position={this.props.location}
                icon={MarkerIcon}
            >
            </Marker>
        );
    }
}
