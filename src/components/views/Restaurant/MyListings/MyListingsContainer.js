import {connect} from 'react-redux';
import MyListings from "./MyListings";
import {fetchMyLeftovers} from "../../../../store/actions/leftovers";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchMyLeftovers())
    };
};

const mapStateToProps = (state) => {
    return {
        leftovers: state.myLeftovers.myLeftovers,
        loading: state.myLeftovers.loading,
        error: state.myLeftovers.error,
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(MyListings);
