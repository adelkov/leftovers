import {connect} from 'react-redux';
import Listings from "./Listings";
import {approveListings, deleteLeftover, fetchLeftovers} from "../../../../store/actions/leftovers";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchLeftovers()),
        onApprove: (listings) => {
            listings.forEach(listing => {
                dispatch(approveListings(listing))
            })
        },
        onDeleteLeftover: id => dispatch(deleteLeftover(id))
    }
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
)(Listings);
