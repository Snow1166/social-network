import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.head} src="https://yahont-hotel.ru/ckeditor_images/chernomorskoje_vid.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ikRkMJhd7rVJK1efVPD4T_6AOmwQ05F9Og&usqp=CAU"
                    alt=""/>
                description
            </div>
        </div>
    )
}

export default ProfileInfo
