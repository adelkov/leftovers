import {connect} from 'react-redux';
import Login from "./Login";
import {loginUser} from "../../../../store/actions/user";

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user)=>{dispatch(loginUser(user))}
    };
};

const mapStateToProps = (state) => {
    return {
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Login);
