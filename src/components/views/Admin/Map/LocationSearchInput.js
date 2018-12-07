import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import {compose} from "redux";
import {withScriptjs} from "react-google-maps";
import TextField from "@material-ui/core/TextField/TextField";
import Paper from "@material-ui/core/Paper/Paper";

class LocationSearchInput extends React.Component {
    state = {address: ''};

    handleChange = address => {
        this.setState({address});
    };

    handleSelect = address => {
        this.setState({address}, ()=> {
            geocodeByAddress(address)
                .then(results => getLatLng(results[0]))
                .then(latLng => console.log('Success', latLng))
                .catch(error => console.error('Error', error));
        })
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                    <div>
                        <TextField
                            fullWidth
                            margin="dense"
                            variant="outlined"
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input',
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? {backgroundColor: '#fafafa', cursor: 'pointer'}
                                    : {backgroundColor: '#ffffff', cursor: 'pointer'};
                                return (
                                    <Paper
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </Paper>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}

export default compose(
    withScriptjs
)(LocationSearchInput);
