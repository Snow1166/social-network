import {usersAPI} from "../api/usersAPI";

const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {id: 1, post: 'Its, my first post', likesCount: 15},
        {id: 2, post: 'Н///Й такую работу', likesCount: 150},
        {id: 3, post: 'post', likesCount: 3},
    ],
    textNewPost: '',
    profile: null
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length++,
                    post: state.textNewPost,
                    likesCount: 0}],
                textNewPost: ''}
        case UPDATE_TEXT_POST:
            return {
                ...state,
                textNewPost: action.textNewPost}
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile}
        default:
            return state
    }
}

export let addPostAction = () => ({type: ADD_POST})
export let updateTextPostAction = (text) => ({type: UPDATE_TEXT_POST, textNewPost: text})
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfile = (userId) => dispatch => {
    let currentUserId = userId ? userId : 2
    usersAPI.getProfile(currentUserId).then(response => {
        dispatch(setUserProfile(response))
    })
}
export default profileReducer;
