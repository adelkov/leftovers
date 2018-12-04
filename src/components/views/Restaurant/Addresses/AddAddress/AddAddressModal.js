import React from 'react';
import Button from '@material-ui/core/Button';
import AddAddressModalForm from "./AddAddressModalForm/AddAddressModalForm";

export default class AddAddressModal extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Button fullWidth color="primary" variant="contained" onClick={this.handleClickOpen}>Add new address</Button>
                <AddAddressModalForm
                    open={this.state.open}
                    createAddress={this.props.createAddress}
                    handleClose={this.handleClose} />
            </div>
        );
    }
}
