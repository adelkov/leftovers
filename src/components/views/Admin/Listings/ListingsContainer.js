import React from 'react';
import {connect} from 'react-redux';
import MyListings from "./Listings";
import {fetchLeftovers} from "../../../../store/actions/leftovers";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLeftovers: () => dispatch(fetchLeftovers())
    };
};

const mapStateToProps = (state) => {
    return {
        leftoverList: state.leftovers.leftoverList
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(MyListings);
