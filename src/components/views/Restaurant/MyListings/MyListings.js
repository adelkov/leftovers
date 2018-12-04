import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {listingTableStyles} from "../../../../assets/styles/ListingsTableStyle";
import {compose} from "redux";
import withAsyncData from "../../../../HOCs/withAsyncData";
import Table from "../../../common/Table/Table";


const MyListings = (props) => {

    const rows = [
            {id: 'food', numeric: false, disablePadding: true, label: 'Food offered'},
            {id: 'location', numeric: false, disablePadding: true, label: 'Location'},
            {id: 'status', numeric: false, disablePadding: true, label: 'Status'}
            ];

    return (
        <Table
            rows={rows}
            data={props.leftovers}
        />
    );

};

MyListings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(listingTableStyles),
    withAsyncData
)(MyListings);
