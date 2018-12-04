import {connect} from 'react-redux';
import AddAddressModal from "./AddAddressModal";
import {createAddress} from "../../../../../store/actions/addresses";

const mapDispatchToProps = (dispatch) => {
    return {
        createAddress: address => dispatch(createAddress(address))
    };
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(AddAddressModal);
