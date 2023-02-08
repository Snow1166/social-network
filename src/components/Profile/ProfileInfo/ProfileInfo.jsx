import s from './ProfileInfo.module.css'
import user from '../../../assets/images/user.png'
import Preloader from "../../../common/Preloader/Preloader";


const ProfileInfo = (props) => {


    return (
        <div>
            <div>
                <img className={s.head} src="https://yahont-hotel.ru/ckeditor_images/chernomorskoje_vid.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img
                    src={props.profile.photos ? props.profile.photos.large : user }
                    alt=""/>
                description
            </div>
        </div>
    )
}

export default ProfileInfo
