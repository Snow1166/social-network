import {connect} from "react-redux";
import Users from "./Users";
import {follow, unfollow, getUsers, setCurrentPage} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";

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

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default withAuthRedirect(connect(mapStateToProps, {getUsers, unfollow, follow})(UsersComponent))


