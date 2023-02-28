import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";


const Users = ({user, followingInProgress, follow, unfollow, name, status}) => {
    return (
        <div key={user.id}>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img className={style.usersPhoto} src={user.photos.small ? user.photos.small : userPhoto} alt=""/>
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                    }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }}>Follow</button>}
            </div>
        </span>
            <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
            </span>
        </span>
        </div>)
}


export default Users;
