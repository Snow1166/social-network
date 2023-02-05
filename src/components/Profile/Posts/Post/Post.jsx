import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={'ava'}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypj29pzM-egDEkWJsvNtRwymMjwR3XOnq3Q&usqp=CAU"
                alt=""/>
            {props.post}
            <div>
                <span>like: </span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;
