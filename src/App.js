import './App.css';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileConteiner";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import React, {useEffect} from "react";
import {connect, Provider} from "react-redux";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";
import store from "./redux/redux-store";


const App = (props) => {
    useEffect(() => {
        props.initializedApp()
    })
    if (!props.initialized) {
        return <Preloader />
    }
    return (
        <Provider store={store}>
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/users/*' element={<UsersContainer/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>
                        <Route path='/login/*' element={<LoginContainer/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

const mapStateToProps = (state) => ({
    initialized: state.appPage.initialized
})

const AppContainer = connect(mapStateToProps, {initializedApp})(App);


const MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp
