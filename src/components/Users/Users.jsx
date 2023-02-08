import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";


const Users = (props) => {
    // let totalPages = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 10; i++) {  // i <= totalPages
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => <span key={p} onClick={() => props.onPageChanged(p)}
                                      className={props.currentPage === p ? style.selectedPage : style.nonSelected}> {p} </span>)}
            </div>
            {props.users.map(u => <div key={u.id}>
        <span>
            <div>
                <NavLink to={'/profile/' + u.id}>
                    <img className='ava' src={u.photos.small ? u.photos.small : userPhoto} alt=""/>
                </NavLink>
            </div>
            <div>
                {u.followed ?
                    <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                    <button onClick={() => props.follow(u.id)}>Follow</button>}
            </div>
        </span>
                <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
            </span>
        </span>
            </div>)}
        </div>)
}

export default Users;
