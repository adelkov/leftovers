import {connect} from 'react-redux';
import LeftoverMap from "./LeftoverMap";
import {fetchLeftovers} from "../../../../store/actions/leftovers";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => (dispatch(fetchLeftovers()))
    };
};

const mapStateToProps = (state) => {
    return {
        leftovers: state.leftovers.leftovers,
        loading: state.leftovers.loading,
        error: state.leftovers.error,
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(LeftoverMap);
