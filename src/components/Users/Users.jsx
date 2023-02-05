const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    followed: false,
                    photoUrl: 'https://3dwarehouse.sketchup.com/warehouse/v1.0/content/public/02f749cd-e236-4b94-9339-91b17aa80646',
                    fullName: 'Deniska',
                    status: 'i am a boss',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 2,
                    followed: true,
                    photoUrl: 'https://3dwarehouse.sketchup.com/warehouse/v1.0/content/public/02f749cd-e236-4b94-9339-91b17aa80646',
                    fullName: 'Alena',
                    status: 'i am a boss',
                    location: {city: 'SPB', country: 'Russia'}
                },
                {
                    id: 3,
                    followed: false,
                    photoUrl: 'https://3dwarehouse.sketchup.com/warehouse/v1.0/content/public/02f749cd-e236-4b94-9339-91b17aa80646',
                    fullName: 'Vadim',
                    status: 'i am a boss',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
            ]
        )
    }
    debugger
    let usersList = props.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img className='ava' src={u.photoUrl} alt=""/>
            </div>
            <div>
                {u.followed ?
                    <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                    <button onClick={() => props.follow(u.id)}>Follow</button>}

            </div>
        </span>
        <span>
            <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </span>
        </span>
    </div>)
    return (
        <div>
            {usersList}
        </div>
    )
}

export default Users;
