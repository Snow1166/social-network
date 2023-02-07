import axios from "axios";
import userPhoto from '../../assets/images/user.png'
const Old_Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {props.setUsers(response.data.items)} )
    }

    let usersList = props.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img className='ava' src={u.photos.small ? u.photos.small : userPhoto} alt=""/>
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
    </div>)
    return (
        <div>
            {usersList}
        </div>
    )
}

export default Old_Users;
