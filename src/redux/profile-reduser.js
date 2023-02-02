const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST'
const ADD_POST = 'ADD-POST'

const profileReduser = (state, action) => {
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

export default profileReduser;
