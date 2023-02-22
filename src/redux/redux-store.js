import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    dialogsPage: dialogReducer,
    navBarPage: sidebarReducer,
    auth: authReducer,
    form: formReducer,
    appPage: appReducer,
})


let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))


export default store
