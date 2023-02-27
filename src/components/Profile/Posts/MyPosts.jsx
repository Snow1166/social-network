import style from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {ControlInputText} from "../../../common/FormControls/FormControls";

const maxLength30 = maxLengthCreator(30)

const addPostForm = (props) => {


    return <form onSubmit={props.handleSubmit}>
        <Field name={'newPostBody'} component={ControlInputText} tag={'textarea'} placeholder={'Введите текст поста'} validate={[required, maxLength30]}/>
        <button>Add post </button>
    </form>
}

const MyPosts = React.memo(props => {
    const postsElement = props.profilePage.posts.map((el) => <Post key={el.id} post={el.post} likesCount={el.likesCount}/>)


    const addPost = (value) => {
        props.addPost(value.newPostBody)

    }

    return (

        <div className={style.postBlock}>
            <h3>My post</h3>
            <p>new post</p>
            <div>
                <PostReduxForm onSubmit={addPost}/>
            </div>
            <div className={style.posts}></div>
            {postsElement}
        </div>
    )
})

const PostReduxForm = reduxForm({form: 'postsAddPostForm'})(addPostForm)

export default MyPosts;
