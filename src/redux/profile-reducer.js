import {profileAPI} from "../api/usersAPI";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    posts: [
        {id: 1, post: 'Its, my first post', likesCount: 15},
        {id: 2, post: 'Н///Й такую работу', likesCount: 150},
        {id: 3, post: 'post', likesCount: 3},
    ],
    profile: null,
    profileStatus: '',
    captchaUlr: ''
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: ++state.posts.length,
                    post: action.textPost,
                    likesCount: 0
                }],
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.idPost)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                profileStatus: action.status
            }
        default:
            return state
    }
}

export let addPost = (textPost) => ({type: ADD_POST, textPost})
export let deletePost = (idPost) => ({type: DELETE_POST, idPost})
let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setStatus = (status) => ({type: SET_STATUS, status})


export const getProfile = (userId) => async (dispatch) => {
    return profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response))
    })
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    response.status === 200 && dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    dispatch(setStatus(status))
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}


export default profileReducer;
