import {authAPI, authAPI as api} from "../api/usersAPI";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_CAPTCHA = 'SET_CAPTCHA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
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


export let setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export let getAuthUserData = () => (dispatch) => {
    return api.auth().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login  } = response.data.data
            let isAuth = true
            dispatch(setAuthUserData(id, email, login, isAuth))
        }
    })
}

const setCaptcha = (urlCaptcha) => ({type: SET_CAPTCHA, urlCaptcha})

export const login = (loginForm) => dispatch => {
    authAPI.login(loginForm).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let messagesError = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            let action = stopSubmit('login', {_error: messagesError});
            dispatch(action);
        }
    })
}

export const logout = () => dispatch => {
    authAPI.logout().then(response => {
        dispatch(setAuthUserData(null, null, null, false))
    })
}

export const getCaptcha = () => dispatch => {
    authAPI.getCaptcha().then(response => {
        dispatch(setCaptcha(response.data))
    })
}

export default authReducer;
