import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import IconButton from "@material-ui/core/IconButton/IconButton";
import ApproveIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import React from "react";
import classNames from 'classnames';
import {toolbarStyles} from "../../../../assets/styles/TableToolbarStyle";



let EnhancedTableToolbar = props => {
    const { numSelected, classes, onApprove } = props;

    return (
        <Toolbar
            className={classNames(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            <div className={classes.title}>
                {numSelected > 0 ? (
                    <Typography color="inherit" variant="subtitle1">
                        {numSelected} selected
                    </Typography>
                ) : (
                    <Typography variant="h6" id="tableTitle">
                        Listings
                    </Typography>
                )}
            </div>
            <div className={classes.spacer} />
            <div className={classes.actions}>
                {numSelected > 0 ? (
                    <Tooltip title="Delete" onClick={onApprove}>
                        <IconButton aria-label="Delete">
                            <ApproveIcon onClick={onApprove} /> Approve
                        </IconButton>
                    </Tooltip>
                ) : (
                    <div>Select items to approve</div>
                )}
            </div>
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
};

export default withStyles(toolbarStyles)(EnhancedTableToolbar);
