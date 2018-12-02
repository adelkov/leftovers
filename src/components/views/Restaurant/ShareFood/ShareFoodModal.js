import React from 'react';
import Button from '@material-ui/core/Button';
import ShareFoodForm from "./ShareFoodForm/ShareFoodForm";

export default class ShareFoodModal extends React.Component {
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
                <Button fullWidth color="primary" variant="contained" onClick={this.handleClickOpen}>Offer new food</Button>
                <ShareFoodForm open={this.state.open} handleClose={this.handleClose} />
            </div>
        );
    }
}
