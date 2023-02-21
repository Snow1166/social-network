import Login from "./Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {logout, login, getCaptcha} from "../../redux/profile-reducer";

const LoginContainer =(props) => {
    return <Login isAuth={props.isAuth} login={props.login} logout={props.logout} getCaptcha={props.getCaptcha}/>
}


const mapStateToProps = (props) => ({
    isAuth: props.auth.isAuth
})
export default compose(
    connect(mapStateToProps, {login, logout, getCaptcha}))(LoginContainer)



// export default compose (
//     connect(mapStateToProps,{getProfile, getStatus, updateStatus}),
//     withRouter,
//     withAuthRedirect
// )(ProfileContainer)
