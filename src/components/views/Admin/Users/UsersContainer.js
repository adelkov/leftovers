import {connect} from 'react-redux';
import Users from "./Users";
import {fetchUsers} from "../../../../store/actions/user";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchUsers())
    };
};

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        loading: state.users.loading,
        error: state.users.error,
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Users);
