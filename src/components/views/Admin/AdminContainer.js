import {connect} from 'react-redux';
import {logoutUser} from "../../../store/actions/user";
import Admin from "./Admin";

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: ()=>dispatch(logoutUser())
    };
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Admin);
