import {withFormsy} from 'formsy-react';
import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";

class MyInput extends React.Component {

    changeValue = (event) => {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.
        this.props.setValue(event.currentTarget.value);
    };

    render() {
        // An error message is returned only if the component is invalid
        const errorMessage = this.props.getErrorMessage();

        return (
            <TextField
                onChange={this.changeValue}
                value={this.props.getValue() || ''}
                margin="dense"
                label={this.props.label}
                fullWidth
                error={Boolean(errorMessage)}
                helperText={errorMessage}
            />
        );
    }
}

export default withFormsy(MyInput);
