import React from 'react';
import {connect} from 'react-redux';
import Addresses from "./Addresses";
import {deleteAddress, fetchAddresses, saveAddress} from "../../../../store/actions/addresses";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAddresses: () => dispatch(fetchAddresses()),
        saveAddress: address => dispatch(saveAddress(address)),
        deleteAddress: id => dispatch(deleteAddress(id))
    };
};

const mapStateToProps = (state) => {
    return {
        addresses: state.myAddresses.myAddresses
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Addresses);
