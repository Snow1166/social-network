import {authAPI, profileAPI} from "../api/usersAPI";

const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_CAPTCHA = 'SET_CAPTCHA'

let initialState = {
    posts: [
        {id: 1, post: 'Its, my first post', likesCount: 15},
        {id: 2, post: 'Н///Й такую работу', likesCount: 150},
        {id: 3, post: 'post', likesCount: 3},
    ],
    textNewPost: '',
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
                    id: state.posts.length++,
                    post: state.textNewPost,
                    likesCount: 0
                }],
                textNewPost: ''
            }
        case UPDATE_TEXT_POST:
            return {
                ...state,
                textNewPost: action.textNewPost
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
        case SET_CAPTCHA:
            return {
                ...state,
                captchaUlr: action.urlCaptcha
            }
        default:
            return state
    }
}

export let addPostAction = () => ({type: ADD_POST})
export let updateTextPostAction = (text) => ({type: UPDATE_TEXT_POST, textNewPost: text})
let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setStatus = (status) => ({type: SET_STATUS, status})
const setCaptcha = (urlCaptcha) => ({type: SET_CAPTCHA, urlCaptcha})

export const getProfile = (userId) => dispatch => {
    let currentUserId = userId ? userId : 2
    profileAPI.getProfile(currentUserId).then(response => {
        dispatch(setUserProfile(response))
    })
}

export const getStatus = (userId) => dispatch => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status) => dispatch => {
    profileAPI.updateStatus(status).then(response => {
        dispatch(setStatus(status))
        // if (response.data.resultCode === 0) {
        //     dispatch(setStatus(status))
        // }
    })
}

export const login = (loginForm) => dispatch => {
    authAPI.login(loginForm).then(response => {
    })
}

export const logout = () => dispatch => {
    authAPI.logout().then(response => {
    })
}

export const getCaptcha = () => dispatch => {
    authAPI.getCaptcha().then(response => {
        dispatch(setCaptcha(response.data))
    })
}

export default profileReducer;
