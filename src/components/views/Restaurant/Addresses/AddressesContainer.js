import {connect} from 'react-redux';
import Addresses from "./Addresses";
import {deleteAddress, fetchAddresses, createAddress} from "../../../../store/actions/addresses";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchAddresses()),
        createAddress: address => dispatch(createAddress(address)),
        deleteAddress: id => dispatch(deleteAddress(id))
    };
};

const mapStateToProps = (state) => {
    return {
        addresses: state.addresses.addresses,
        loading: state.addresses.loading,
        error: state.addresses.error
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Addresses);
