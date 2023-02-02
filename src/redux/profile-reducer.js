const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST'
const ADD_POST = 'ADD-POST'

let initialState = {
    posts: [
        {id: 1, post: 'Its, my first post', likesCount: 15},
        {id: 2, post: 'Н///Й такую работу', likesCount: 150},
        {id: 3, post: 'post', likesCount: 3},
    ],
    textNewPost: '',
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:

            state.posts.push({
                id: state.posts.length++,
                post: state.textNewPost,
                likesCount: 0
            })
            state.textNewPost = ''
            return state
        case UPDATE_TEXT_POST:

            state.textNewPost = action.textNewPost
            return state
        default:
            return state
    }
}

export let addPostAction = () => ({type: ADD_POST})
export let updateTextPostAction = (text) => ({type: UPDATE_TEXT_POST, textNewPost: text})

export default profileReducer;
