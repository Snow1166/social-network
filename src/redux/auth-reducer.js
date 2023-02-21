import {authAPI as api} from "../api/usersAPI";

const SET_USER_DATA = 'SET_USER_DATA'


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
                ...action.data
            }
        default:
            return state
    }
}


export let setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}})
export let authMe = () => (dispatch) => {
    api.auth().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login  } = response.data.data
            let isAuth = true
            dispatch(setAuthUserData(id, email, login, isAuth))
        }
    })
}

export default authReducer;
