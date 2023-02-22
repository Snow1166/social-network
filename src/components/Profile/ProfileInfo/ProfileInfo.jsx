import style from './ProfileInfo.module.css'
import user from '../../../assets/images/user.png'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div>
            <div>
                <img className={style.head} src="https://yahont-hotel.ru/ckeditor_images/chernomorskoje_vid.jpg" alt=""/>
            </div>
            <div className={style.descriptionBlock}>
                <span><img
                    src={props.profile.photos.large ? props.profile.photos.large : user}
                    alt=""/>
                    <h2>{props.profile.fullName}</h2>
                                    <div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
                    <h3>Обо мне: {props.profile.aboutMe}</h3>
                    </span>
                <span>
                    <p>contacts:</p>
                    <ul>
                        <li>facebook: {props.profile.contacts.facebook ? props.profile.contacts.facebook : 'Не заполнено'}</li>
                        <li>website: {props.profile.contacts.website ? props.profile.contacts.website : 'Не заполнено'}</li>
                        <li>vk: {props.profile.contacts.vk ? props.profile.contacts.vk : 'Не заполнено'}</li>
                        <li>twitter: {props.profile.contacts.twitter ? props.profile.contacts.twitter : 'Не заполнено'}</li>
                        <li>instagram: {props.profile.contacts.instagram ? props.profile.contacts.instagram : 'Не заполнено'}</li>
                        <li>youtube: {props.profile.contacts.youtube ? props.profile.contacts.youtube : 'Не заполнено'}</li>
                        <li>github: {props.profile.contacts.github ? props.profile.contacts.github : 'Не заполнено'}</li>
                        <li>mainLink: {props.profile.contacts.mainLink ? props.profile.contacts.mainLink : 'Не заполнено'}</li>

                    </ul>
                    <p>Ищу работу: {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'Не заполнено'}</p>
                    </span>
            </div>
        </div>
    )
}

export default ProfileInfo
