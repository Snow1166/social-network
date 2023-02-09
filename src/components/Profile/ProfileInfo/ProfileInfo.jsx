import s from './ProfileInfo.module.css'
import user from '../../../assets/images/user.png'
import Preloader from "../../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div>
            <div>
                <img className={s.head} src="https://yahont-hotel.ru/ckeditor_images/chernomorskoje_vid.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img
                    src={props.profile.photos.large ? props.profile.photos.large : user}
                    // src={ user}
                    alt=""/>
                <div>
                    <h2>{props.profile.fullName}</h2>
                    <h3>{props.profile.aboutMe}</h3>
                    <ul>
                        <li>{props.profile.contacts.facebook}</li>
                        <li>{props.profile.contacts.website}</li>
                        <li>{props.profile.contacts.vk}</li>
                        <li>{props.profile.contacts.twitter}</li>

                    </ul>
                    <p>{props.profile.lookingForAJobDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
