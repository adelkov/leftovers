import {geocodeByAddress, getLatLng} from "react-places-autocomplete";


const getLatLngFromAddress = async address => {
    const results = await geocodeByAddress(address);
    return getLatLng(results[0])
};

export default getLatLngFromAddress;
