import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {listingTableStyles} from "../../../../assets/styles/ListingsTableStyle";
import {compose} from "redux";
import withAsyncData from "../../../../HOCs/withAsyncData";
import Table from "../../../common/Table/Table";


const Listings = (props) => {

    const rows = [
        {id: 'food', numeric: false, disablePadding: true, label: 'Food offered'},
        {id: 'location', numeric: false, disablePadding: false, label: 'Location'},
        {id: 'status', numeric: false, disablePadding: false, label: 'Status'},
        {id: 'userId', numeric: true, disablePadding: false, label: 'User ID'},
    ];

    return (
        <Table
            rows={rows}
            data={props.leftovers}
        />
    );

};

Listings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(listingTableStyles),
    withAsyncData
)(Listings);
