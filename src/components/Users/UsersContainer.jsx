import {connect} from "react-redux";
import Users from "./Users";
import {follow, unfollow, requestUsers} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getUsers} from "../../redux/users-selectors";

class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
            />
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         currentPage: state.usersPage.currentPage,
//         pageSize: state.usersPage.pageSize,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    connect(mapStateToProps, {getUsers: requestUsers, unfollow, follow}),
    withAuthRedirect,
)(UsersComponent)
