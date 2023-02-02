import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {addPostAction, updateTextPostAction} from '../../../redux/profile-reduser'

const MyPosts = (props) => {

    const postsElement = props.state.profilePage.posts.map((el) => <Post post={el.post} likesCount={el.likesCount}/>)

    let newPostElement = React.createRef()


    let updateTextPost = () => {
        props.dispatch(updateTextPostAction(newPostElement.current.value))
    }

    let addPost = () => {
        props.dispatch(addPostAction())
    }
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <p>new post</p>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.state.profilePage.textNewPost} onChange={updateTextPost} name="" id=""
                              cols="30" rows="5"/>
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}></div>
            {postsElement}
        </div>
    )
}

export default MyPosts;
