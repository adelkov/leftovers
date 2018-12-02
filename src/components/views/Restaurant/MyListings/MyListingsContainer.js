import React from 'react';
import {connect} from 'react-redux';
import MyListings from "./MyListings";
import {fetchMyLeftovers} from "../../../../store/actions/leftovers";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMyLeftovers: () => dispatch(fetchMyLeftovers())
    };
};

const mapStateToProps = (state) => {
    return {
        leftovers: state.myLeftovers.myLeftovers
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(MyListings);
