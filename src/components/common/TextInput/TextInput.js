import {withFormsy} from 'formsy-react';
import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";




const MyInput = (props) => {

    const changeValue = (event) => {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.
        props.setValue(event.currentTarget.value);
    };

    // An error message is returned only if the component is invalid
    const errorMessage = props.getErrorMessage();

    return (
        <TextField
            onChange={changeValue}
            value={props.getValue() || ''}
            margin="dense"
            label={props.label}
            fullWidth
            error={Boolean(errorMessage)}
            helperText={errorMessage}
        />
    );
};

export default withFormsy(MyInput);
