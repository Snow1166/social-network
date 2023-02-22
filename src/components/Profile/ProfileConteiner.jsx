import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {Navigate, redirect, useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            if (this.props.userId){
                userId = this.props.userId
            } else {
                redirect('Login')
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'}/>
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.profileStatus,
    userId: state.auth.userId
})

function withRouter(Component) {

    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer)
// export default connect(mapStateToProps,{getProfile})(withRouter(ProfileContainer));


