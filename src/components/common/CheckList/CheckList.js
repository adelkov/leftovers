import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import AddressIcon from '@material-ui/icons/LocationCity';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

const CheckboxListSecondary = props => {

    const {classes, handleSelection, leftovers } = props;

    return (
        <List dense className={classes.root}>
            {leftovers.map(leftover => (
                <ListItem key={leftover.id} button>
                    <ListItemAvatar>
                        <Avatar>
                            <AddressIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={leftover.name}/>
                    <ListItemSecondaryAction>
                        <Checkbox
                            onChange={handleSelection(leftover)}
                            // checked={leftover.checked}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
}

CheckboxListSecondary.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxListSecondary);
