import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import {compose} from "redux";
import {withScriptjs} from "react-google-maps";
import TextField from "@material-ui/core/TextField/TextField";
import Paper from "@material-ui/core/Paper/Paper";
import {withFormsy} from "formsy-react";

class LocationInput extends React.Component {
    state = {
        address: '',
        latlng: {}
    };

    changeValue = () => {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.
        this.props.setValue(this.state.address);
    };

    handleChange = address => {
        this.setState({address});
    };

    handleSelect = address => {
        this.setState({address}, ()=>{
            this.changeValue()
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
                            name="location"
                            fullWidth
                            value={this.props.getValue() || ''}
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
    withFormsy,
    withScriptjs
)(LocationInput);
