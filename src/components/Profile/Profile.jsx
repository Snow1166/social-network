import s from './Profile.module.css'
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state} addPost={props.addPost} updateTextPost={props.updateTextPost}/>
        </div>
    )
};

export default Profile;
