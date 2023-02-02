import {addPostAction, updateTextPostAction} from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage

    let updateTextPost = (text) => props.store.dispatch(updateTextPostAction(text))

    let addPost = () => props.store.dispatch(addPostAction())

    return <MyPosts profilePage={state} updateTextPost={updateTextPost} addPost={addPost}/>
}

export default MyPostsContainer;
