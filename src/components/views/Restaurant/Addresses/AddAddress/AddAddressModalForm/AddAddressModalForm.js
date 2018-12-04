import React, {Component} from 'react';
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";




class AddAddressModalForm extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            location: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = () => {
        this.props.createAddress(this.state);
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
                <DialogTitle id="form-dialog-title">Add new address</DialogTitle>
                <DialogContent>
                    <TextField
                        value={this.state.name}
                        onChange={this.onChange}
                        name="name"
                        margin="dense"
                        id="name"
                        label="Name this address"
                        type="food"
                        fullWidth
                    />
                    <TextField
                        value={this.state.location}
                        onChange={this.onChange}
                        name="location"
                        margin="dense"
                        id="location"
                        label="Location"
                        type="location"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.onSubmit} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default AddAddressModalForm;
