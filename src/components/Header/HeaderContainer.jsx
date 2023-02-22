import styles from './Header.module.css'
import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

const HeaderContainer = (props) =>{

        return <Header {...props} logout={props.logout}/>

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {authMe: getAuthUserData, logout})(HeaderContainer);
