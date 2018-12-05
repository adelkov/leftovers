import React, {Component} from 'react';
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import MyInput from "../../../../../common/TextInput/TextInput";
import Formsy from "formsy-react";

class ShareFoodForm extends Component {

    state = {canSubmit: false};

    disableButton = () => {
        this.setState({canSubmit: false});
    };

    enableButton = () => {
        this.setState({canSubmit: true});
    };

    submit = (model) => {
        this.props.createLeftover(model);
        this.props.handleClose()
    };


    render() {
        const {handleClose, open} = this.props;

        return (
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                    <DialogTitle id="form-dialog-title">Tell us about the food you're offering</DialogTitle>
                    <DialogContent>
                        <MyInput
                            label="Offered food"
                            name="food"
                            validations="isExisty"
                            validationError="Required"
                            required
                        />
                        <MyInput
                            label="Location"
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

export default ShareFoodForm;
