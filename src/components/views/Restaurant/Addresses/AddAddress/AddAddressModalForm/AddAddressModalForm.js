import React, {Component} from 'react';
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import Formsy from "formsy-react";
import MyInput from "../../../../../common/TextInput/TextInput";




class AddAddressModalForm extends Component {

    constructor(props) {
        super(props);
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.submit = this.submit.bind(this);
        this.state = { canSubmit: false };
    }

    disableButton() {
        this.setState({ canSubmit: false });
    }

    enableButton() {
        this.setState({ canSubmit: true });
    }

    submit(model) {
        this.props.createAddress(model);
        this.props.handleClose()
    }


    render() {
        const {handleClose, open} = this.props;

        return (
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                    <DialogTitle id="form-dialog-title">Add new address</DialogTitle>
                    <DialogContent>
                        <MyInput
                            label="Name of address"
                            name="name"
                            validations="isExisty"
                            validationError="Required"
                            required
                        />
                        <MyInput
                            label="Address"
                            name="location"
                            validations="isExisty"
                            validationError="Required"
                            required
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" disabled={!this.state.canSubmit} color="primary">
                            Share
                        </Button>
                    </DialogActions>
                </Formsy>
            </Dialog>
        );
    }
}

export default AddAddressModalForm;
