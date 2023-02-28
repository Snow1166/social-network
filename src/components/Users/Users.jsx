import React from "react";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";


const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} totalItemCount={totalUsersCount} pageSize={pageSize}
                       onPageChanged={onPageChanged}/>

            {props.users.map(u => <User
                user={u}
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow}
                key={u.id}/>
            )}
        </div>
    )
}

export default Users;
