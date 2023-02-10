import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})


// const withAuthRedirect = (Component) => {
//     class RedirectComponent extends React.Component {
//         render() {
//             if (this.props.isAuth) {return <Component {...this.props}/>}
//             return <Navigate to={'/login'}/>
//         }
//     }
//     return connect(mapStateToProps)(RedirectComponent)
// }

const withAuthRedirect = (Component) => {
    const AuthCont = (props) => {
        if (props.isAuth) {
            return <Component {...props} />
        }
        return <Navigate to={'/login'}/>
    }
    return connect(mapStateToProps)(AuthCont)
}

export default withAuthRedirect




