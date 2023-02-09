import s from './Header.module.css'
import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import axios from "axios";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login  } = response.data.data
                    let isAuth = true
                    this.props.setUserData(id, email, login, isAuth)
                }

            })
    }

    render() {
        return <Header {...this.props}/>
    }

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {setUserData: setAuthUserData})(HeaderContainer);
