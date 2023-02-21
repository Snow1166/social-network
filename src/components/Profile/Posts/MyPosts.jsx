import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";


const addPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field name={'newPostBody'} component={'textarea'} placeholder={'Введите текст поста'}/>
        <button>Add post</button>
    </form>
}

const MyPosts = (props) => {

    const postsElement = props.profilePage.posts.map((el) => <Post key={el.id} post={el.post} likesCount={el.likesCount}/>)


    const addPost = (value) => {
        props.addPost(value.newPostBody)
    }

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <p>new post</p>
            <div>
                <PostReduxForm onSubmit={addPost}/>
            </div>
            <div className={s.posts}></div>
            {postsElement}
        </div>
    )
}

const PostReduxForm = reduxForm({form: 'postsAddPostForm'})(addPostForm)

export default MyPosts;
