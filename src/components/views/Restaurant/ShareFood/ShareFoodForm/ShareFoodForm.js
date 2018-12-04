import React, {Component} from 'react';
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";

class ShareFoodForm extends Component {

    constructor() {
        super();
        this.state = {
            food: "",
            location: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };


    onSubmit = () => {

        this.props.createLeftover();
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
                <DialogTitle id="form-dialog-title">Tell us about the food you're offering</DialogTitle>
                <DialogContent>
                    <TextField
                        onChange={this.onChange}
                        value={this.state.name}
                        name="food"
                        margin="dense"
                        id="food"
                        label="Info about offered food"
                        type="food"
                        fullWidth
                    />
                    <TextField
                        onChange={this.onChange}
                        value={this.state.name}
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
                        Share
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

}

export default ShareFoodForm;
