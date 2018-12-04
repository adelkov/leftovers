import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import AddressIcon from '@material-ui/icons/LocationCity';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import AddAddressModalContainer from "./AddAddress/AddAddressModalContainer";
import {addressListStyle} from "../../../../assets/styles/AddressListStyle";
import {compose} from "redux";
import withAsyncData from "../../../../HOCs/withAsyncData";




class Addresses extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dense: false,
            secondary: true,
        };
    }


    render() {

        const {classes, addresses} = this.props;
        const {dense, secondary} = this.state;

        return (
            <div className={classes.root}>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={secondary}
                                onChange={event => this.setState({secondary: event.target.checked})}
                                value="secondary"
                            />
                        }
                        label="Show address"
                    />
                </FormGroup>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.title}>
                        My addresses:
                    </Typography>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            {addresses.map(address => {
                                return (
                                    <ListItem key={address.id}>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <AddressIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={address.name}
                                            secondary={secondary ? address.location : null}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton aria-label="Delete">
                                                <DeleteIcon onClick={()=>{this.props.deleteAddress(address.id)}}/>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>)
                            })}
                        </List>
                        <AddAddressModalContainer />
                    </div>
                </Grid>
            </div>
        );
    }
}

Addresses.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(addressListStyle),
    withAsyncData
)(Addresses)
