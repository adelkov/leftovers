import {connect} from 'react-redux';
import Listings from "./Listings";
import {fetchLeftovers} from "../../../../store/actions/leftovers";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchLeftovers())
    };
};

const mapStateToProps = (state) => {
    return {
        leftovers: state.leftovers.leftovers
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Listings);
